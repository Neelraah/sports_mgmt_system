CREATE TABLE sport (
  sport_id SERIAL PRIMARY KEY,
  sport_name TEXT NOT NULL UNIQUE,
  first_day_of_season DATE NOT NULL,
  last_day_of_season DATE NOT NULL
);

CREATE TABLE league (
  league_id SERIAL PRIMARY KEY,
  league_name TEXT NOT NULL UNIQUE,
  sport_id INTEGER NOT NULL REFERENCES sport(sport_id) ON DELETE CASCADE,
  contact_first_name TEXT NOT NULL,
  contact_last_name TEXT NOT NULL,
  contact_tel TEXT NOT NULL
);

CREATE TABLE team (
  team_id SERIAL PRIMARY KEY,
  team_name TEXT NOT NULL UNIQUE,
  sport_id INTEGER NOT NULL REFERENCES sport(sport_id) ON DELETE CASCADE,
  league_id INTEGER NOT NULL REFERENCES league(league_id) ON DELETE CASCADE,
  league_division TEXT NOT NULL
);

CREATE TABLE membership_type (
  membership_type_id SERIAL PRIMARY KEY,
  membership_name TEXT NOT NULL UNIQUE,
  subscription_amount NUMERIC(10, 2) NOT NULL
);

CREATE TABLE member (
  member_id SERIAL PRIMARY KEY,
  membership_type_id INTEGER NOT NULL REFERENCES membership_type(membership_type_id),
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  address_line1 TEXT NOT NULL,
  address_line2 TEXT,
  address_line3 TEXT,
  post_code TEXT NOT NULL,
  home_phone TEXT,
  mobile_number TEXT,
  date_of_birth DATE NOT NULL,
  subscription_method TEXT NOT NULL
);

CREATE TABLE opponent (
  opponent_id SERIAL PRIMARY KEY,
  opponent_team_name TEXT NOT NULL UNIQUE,
  contact_first_name TEXT NOT NULL,
  contact_last_name TEXT NOT NULL,
  contact_tel TEXT NOT NULL,
  contact_club TEXT NOT NULL
);

CREATE TABLE fixture (
  fixture_id SERIAL PRIMARY KEY,
  team_id INTEGER NOT NULL REFERENCES team(team_id) ON DELETE CASCADE,
  opponent_id INTEGER NOT NULL REFERENCES opponent(opponent_id) ON DELETE CASCADE,
  sport_id INTEGER NOT NULL REFERENCES sport(sport_id) ON DELETE CASCADE,
  captain_member_id INTEGER REFERENCES member(member_id),
  fixture_date DATE NOT NULL,
  home_away TEXT NOT NULL CHECK (home_away IN ('Home', 'Away')),
  result TEXT NOT NULL,
  score TEXT NOT NULL,
  fixture_status TEXT NOT NULL
);

CREATE INDEX idx_team_sport ON team(sport_id);
CREATE INDEX idx_team_league ON team(league_id);
CREATE INDEX idx_fixture_team ON fixture(team_id);
CREATE INDEX idx_fixture_opponent ON fixture(opponent_id);
