-- Itihaas Gatha - Supabase schema
-- Run this in Supabase SQL Editor.

create extension if not exists pgcrypto;

create table if not exists public.albums (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  description text,
  cover_url text,
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists public.album_photos (
  id uuid primary key default gen_random_uuid(),
  album_id uuid not null references public.albums(id) on delete cascade,
  storage_path text not null unique,
  file_name text,
  alt_text text,
  created_at timestamptz not null default now()
);

create index if not exists album_photos_album_id_created_at_idx
  on public.album_photos(album_id, created_at desc);

create table if not exists public.reviews (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(trim(name)) between 1 and 80),
  trip text not null check (char_length(trim(trip)) between 1 and 120),
  rating integer not null check (rating between 1 and 5),
  review text not null check (char_length(trim(review)) between 1 and 2000),
  created_at timestamptz not null default now()
);

create index if not exists reviews_created_at_idx
  on public.reviews(created_at desc);

-- If an older version of the schema created a status column, remove it because
-- reviews are published immediately and do not require moderation.
alter table public.reviews drop column if exists status;

-- Keep the database validation consistent with the website form.
alter table public.reviews drop constraint if exists reviews_name_check;
alter table public.reviews drop constraint if exists reviews_trip_check;
alter table public.reviews drop constraint if exists reviews_review_check;
alter table public.reviews add constraint reviews_name_check check (char_length(trim(name)) between 1 and 80);
alter table public.reviews add constraint reviews_trip_check check (char_length(trim(trip)) between 1 and 120);
alter table public.reviews add constraint reviews_review_check check (char_length(trim(review)) between 1 and 2000);

-- Seed the albums already present in the HTML.
insert into public.albums (slug, title, description, sort_order)
values
  ('kalu', 'Kalu Waterfall', 'Waterfall moments, monsoon trails and group memories.', 1),
  ('camp-stars', 'Camp & Stars', 'Campfires, tents, night skies and weekend memories.', 2),
  ('sahyadri', 'Sahyadri Trails', 'Green trails, monsoon walks and hidden nature spots.', 3),
  ('forts', 'Fort Stories', 'Historic forts, viewpoints and heritage adventures.', 4),
  ('camp-nights', 'Camp Nights', 'Night camping, friends, stars and unforgettable evenings.', 5)
on conflict (slug) do update set
  title = excluded.title,
  description = excluded.description,
  sort_order = excluded.sort_order;

-- RLS: public visitors can read albums/photos and all submitted reviews.
alter table public.albums enable row level security;
alter table public.album_photos enable row level security;
alter table public.reviews enable row level security;

drop policy if exists "Public can read albums" on public.albums;
create policy "Public can read albums"
  on public.albums for select
  to anon, authenticated
  using (true);

drop policy if exists "Public can read album photos" on public.album_photos;
create policy "Public can read album photos"
  on public.album_photos for select
  to anon, authenticated
  using (true);

drop policy if exists "Public can upload album photo metadata" on public.album_photos;
create policy "Public can upload album photo metadata"
  on public.album_photos for insert
  to anon, authenticated
  with check (
    exists (select 1 from public.albums a where a.id = album_id)
    and storage_path like album_id::text || '/%'
  );

drop policy if exists "Public can read approved reviews" on public.reviews;
drop policy if exists "Public can read all reviews" on public.reviews;
create policy "Public can read all reviews"
  on public.reviews for select
  to anon, authenticated
  using (true);

drop policy if exists "Public can submit pending reviews" on public.reviews;
drop policy if exists "Public can submit reviews" on public.reviews;
create policy "Public can submit reviews"
  on public.reviews for insert
  to anon, authenticated
  with check (true);

-- Do NOT grant public update/delete permissions.
revoke update, delete on public.reviews from anon, authenticated;
revoke update, delete on public.album_photos from anon, authenticated;

-- Storage bucket for album images.
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'album-photos',
  'album-photos',
  true,
  5242880,
  array['image/jpeg','image/png','image/webp']
)
on conflict (id) do update set
  public = true,
  file_size_limit = 5242880,
  allowed_mime_types = array['image/jpeg','image/png','image/webp'];

-- Public image delivery is allowed by the public bucket.
-- Uploads are restricted to paths whose first folder is a real album UUID.
drop policy if exists "Public can upload album images" on storage.objects;
create policy "Public can upload album images"
  on storage.objects
  for insert
  to anon, authenticated
  with check (
    bucket_id = 'album-photos'
    and (storage.foldername(name))[1] in (select id::text from public.albums)
  );

-- No public delete/update policy: the website never exposes destructive storage actions.
