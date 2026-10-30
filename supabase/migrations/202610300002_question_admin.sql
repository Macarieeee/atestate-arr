begin;
do $$ begin
  if not exists (select 1 from auth.users where id = 'ee76fecc-6cd2-4568-b73f-24276961ae14') then
    raise exception 'Admin user does not exist';
  end if;
end $$;

alter table public.question_bank add column if not exists revision integer not null default 1;

create or replace function public.valid_question_answers(value jsonb, correct_key text)
returns boolean language sql immutable set search_path = '' as $$
  select case when jsonb_typeof(value) <> 'array' then false else
    jsonb_array_length(value) between 2 and 4
    and not exists (select 1 from jsonb_array_elements(value) a
      where jsonb_typeof(a) <> 'object' or a->>'key' is null or a->>'key' not in ('a','b','c','d')
        or jsonb_typeof(a->'text') is distinct from 'string' or length(btrim(a->>'text')) = 0)
    and (select count(distinct a->>'key') from jsonb_array_elements(value) a) = jsonb_array_length(value)
    and exists (select 1 from jsonb_array_elements(value) a where a->>'key' = correct_key)
  end;
$$;

alter table public.question_bank drop constraint if exists question_bank_valid_content;
alter table public.question_bank add constraint question_bank_valid_content
  check (length(btrim(text)) > 0 and public.valid_question_answers(answers, correct));

create or replace function public.increment_question_revision()
returns trigger language plpgsql set search_path = '' as $$
begin
  new.revision := old.revision + 1;
  return new;
end;
$$;
drop trigger if exists question_revision on public.question_bank;
create trigger question_revision before update on public.question_bank
  for each row execute function public.increment_question_revision();

grant update (text, answers, correct) on public.question_bank to authenticated;
drop policy if exists "Designated admin can edit questions" on public.question_bank;
create policy "Designated admin can edit questions" on public.question_bank
  for update to authenticated
  using ((select auth.uid()) = 'ee76fecc-6cd2-4568-b73f-24276961ae14'::uuid)
  with check ((select auth.uid()) = 'ee76fecc-6cd2-4568-b73f-24276961ae14'::uuid);
commit;
