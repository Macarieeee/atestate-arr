-- Public practice questions: clients can read, only administrators can write.
create table if not exists public.question_bank (
  category text not null check (category in ('ca-marfa', 'sofer-taxi', 'sofer-inchiriere', 'manager-taxi-inchiriere')),
  language text not null check (language in ('ro', 'en')),
  id integer not null check (id > 0),
  source_no text not null,
  text text not null check (length(text) > 0),
  answers jsonb not null check (jsonb_typeof(answers) = 'array' and jsonb_array_length(answers) between 2 and 4),
  correct text not null check (correct in ('a', 'b', 'c', 'd')),
  images jsonb not null default '[]'::jsonb check (jsonb_typeof(images) = 'array'),
  primary key (category, language, id),
  check (answers @> jsonb_build_array(jsonb_build_object('key', correct)))
);
alter table public.question_bank enable row level security;
revoke all on public.question_bank from anon, authenticated;
grant select on public.question_bank to anon, authenticated;
drop policy if exists "Public practice questions are readable" on public.question_bank;
create policy "Public practice questions are readable" on public.question_bank
  for select to anon, authenticated using (true);
