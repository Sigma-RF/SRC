/*
  # Initial Schema Setup

  1. New Tables
    - `applications`
      - Stores research program applications
      - Includes personal info and research interests
    - `contacts`
      - Stores contact form submissions
    - `events`
      - Stores event information and registrations
    - `publications`
      - Stores research publications data

  2. Security
    - Enable RLS on all tables
    - Add policies for data access
*/

-- Applications table
CREATE TABLE IF NOT EXISTS applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  education_level text NOT NULL,
  research_experience text NOT NULL,
  research_field text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public to insert applications"
  ON applications
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Allow users to view their own applications"
  ON applications
  FOR SELECT
  TO authenticated
  USING (auth.uid() IN (
    SELECT auth.uid()
    FROM auth.users
    WHERE auth.users.email = applications.email
  ));

-- Contacts table
CREATE TABLE IF NOT EXISTS contacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public to insert contacts"
  ON contacts
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Events table
CREATE TABLE IF NOT EXISTS events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  date date NOT NULL,
  time time NOT NULL,
  location text NOT NULL,
  capacity integer NOT NULL,
  registered_count integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public to view events"
  ON events
  FOR SELECT
  TO public
  USING (true);

-- Event registrations table
CREATE TABLE IF NOT EXISTS event_registrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id uuid REFERENCES events(id),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE event_registrations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public to insert event registrations"
  ON event_registrations
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Allow users to view their own registrations"
  ON event_registrations
  FOR SELECT
  TO authenticated
  USING (auth.uid() IN (
    SELECT auth.uid()
    FROM auth.users
    WHERE auth.users.email = event_registrations.email
  ));

-- Publications table
CREATE TABLE IF NOT EXISTS publications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  authors text NOT NULL,
  journal text NOT NULL,
  year integer NOT NULL,
  abstract text,
  doi text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE publications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public to view publications"
  ON publications
  FOR SELECT
  TO public
  USING (true);