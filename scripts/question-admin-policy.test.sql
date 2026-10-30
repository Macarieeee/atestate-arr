-- Runs against Supabase in a transaction. All content changes are rolled back.
begin;
set local role authenticated;
select set_config('request.jwt.claim.sub', 'ee76fecc-6cd2-4568-b73f-24276961ae14', true);
do $$
declare before_revision integer; changed integer;
begin
  select revision into before_revision from public.question_bank where category='ca-marfa' and language='ro' and id=1;
  update public.question_bank set text = text || ' [temporary policy test]',
    answers = jsonb_set(answers, '{0,text}', '"Temporary answer"'::jsonb), correct = 'a'
    where category='ca-marfa' and language='ro' and id=1 and revision=before_revision;
  get diagnostics changed = row_count;
  if changed <> 1 then raise exception 'Admin update failed'; end if;
  if (select revision from public.question_bank where category='ca-marfa' and language='ro' and id=1) <> before_revision + 1 then
    raise exception 'Revision was not incremented';
  end if;
  update public.question_bank set text = 'Stale update' where category='ca-marfa' and language='ro' and id=1 and revision=before_revision;
  get diagnostics changed = row_count;
  if changed <> 0 then raise exception 'Stale update was accepted'; end if;
  begin
    update public.question_bank set text = ' ' where category='ca-marfa' and language='ro' and id=1;
    raise exception 'Blank question was accepted';
  exception when check_violation then null; end;
  begin
    update public.question_bank set answers = '[{"key":"a","text":"One"},{"key":"a","text":"Two"}]'::jsonb where category='ca-marfa' and language='ro' and id=1;
    raise exception 'Duplicate answer keys were accepted';
  exception when check_violation then null; end;
  begin
    update public.question_bank set id=999999 where category='ca-marfa' and language='ro' and id=1;
    raise exception 'Identity column update was accepted';
  exception when insufficient_privilege then null; end;
end $$;
select set_config('request.jwt.claim.sub', '00000000-0000-0000-0000-000000000001', true);
do $$ declare changed integer; begin
  update public.question_bank set text='Unauthorized edit' where category='ca-marfa' and language='ro' and id=1;
  get diagnostics changed = row_count;
  if changed <> 0 then raise exception 'Non-admin update was accepted'; end if;
end $$;
set local role anon;
do $$ begin
  begin
    update public.question_bank set text='Anonymous edit' where category='ca-marfa' and language='ro' and id=1;
    raise exception 'Anonymous update was accepted';
  exception when insufficient_privilege then null; end;
end $$;
rollback;
