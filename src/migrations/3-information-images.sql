create table public.information_images (
  id serial not null,
  image_url text,
  title text,
  status text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,

  primary key (id)
);

alter table public.information_images enable row level security;
