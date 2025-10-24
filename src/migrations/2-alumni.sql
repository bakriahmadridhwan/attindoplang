create table public.alumni (
  id serial not null,
  name text,
  email text,
  phone text,
  origin_address text,
  current_address text,
  work text,
  graduate text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,

  primary key (id)
);

alter table public.alumni enable row level security;
