create table public.students (
  id serial not null,
  name text,
  email text,
  identity_number text,
  phone text,
  address text,
  avatar_url text,
  origin_school text,
  school_now text,
  companion text,
  companion_nik text,
  kk text,
  companion_name text,
  companion_phone text,
  companion_address text,
  companion_work text,
  year text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,

  primary key (id)
);

alter table public.students enable row level security;
