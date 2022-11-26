-- Create a table for public practices
create table practices (
  id uuid not null primary key,
  user_id uuid references auth.users,
  team text not null,
  link text not null
);
-- Set up Row Level Security (RLS)
-- See https://supabase.com/docs/guides/auth/row-level-security for more details.
alter table practices
  enable row level security;

create policy "Practices are viewable by everyone." on practices
  for select using (true);

create policy "Users can insert their own practices." on practices
  for insert with check (auth.uid() = user_id);

create policy "Users can update own practices." on practices
  for update using (auth.uid() = user_id);

create policy "Users can delete own practices." on practices
  for delete using (auth.uid() = user_id);
