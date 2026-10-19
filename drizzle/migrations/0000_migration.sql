CREATE TABLE public.rsvps (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL UNIQUE,
  first_name text NOT NULL,
  last_name text NOT NULL,
  attending boolean NOT NULL,
  departure_works boolean,
  preferred_time text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT ALL ON public.rsvps TO service_role;
ALTER TABLE public.rsvps ENABLE ROW LEVEL SECURITY;