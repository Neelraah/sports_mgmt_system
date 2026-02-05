-- List teams with league and sport details
SELECT
  t.team_name,
  t.league_division,
  l.league_name,
  s.sport_name
FROM team t
JOIN league l ON t.league_id = l.league_id
JOIN sport s ON t.sport_id = s.sport_id
ORDER BY s.sport_name, t.team_name;

-- Upcoming fixtures with opponents
SELECT
  f.fixture_date,
  t.team_name,
  o.opponent_team_name,
  f.home_away,
  f.fixture_status
FROM fixture f
JOIN team t ON f.team_id = t.team_id
JOIN opponent o ON f.opponent_id = o.opponent_id
WHERE f.fixture_date >= CURRENT_DATE
ORDER BY f.fixture_date;

-- Member directory with membership type
SELECT
  m.first_name,
  m.last_name,
  mt.membership_name,
  m.mobile_number
FROM member m
JOIN membership_type mt ON m.membership_type_id = mt.membership_type_id
ORDER BY m.last_name;

-- Fixture results by team
SELECT
  t.team_name,
  f.fixture_date,
  f.result,
  f.score
FROM fixture f
JOIN team t ON f.team_id = t.team_id
WHERE f.fixture_status = 'Completed'
ORDER BY f.fixture_date DESC;
