INSERT INTO sport (sport_name, first_day_of_season, last_day_of_season)
VALUES
  ('Football', '2024-08-01', '2025-05-31'),
  ('Cricket', '2024-04-01', '2024-09-30');

INSERT INTO league (league_name, sport_id, contact_first_name, contact_last_name, contact_tel)
VALUES
  ('Metro Football League', 1, 'Riya', 'Sharma', '555-1001'),
  ('City Cricket League', 2, 'Aman', 'Patel', '555-2002');

INSERT INTO team (team_name, sport_id, league_id, league_division)
VALUES
  ('Falcons FC', 1, 1, 'Division A'),
  ('Harbor United', 1, 1, 'Division B'),
  ('Sunrise CC', 2, 2, 'Premier');

INSERT INTO membership_type (membership_name, subscription_amount)
VALUES
  ('Standard', 120.00),
  ('Junior', 60.00),
  ('Premium', 200.00);

INSERT INTO member (
  membership_type_id,
  first_name,
  last_name,
  address_line1,
  address_line2,
  address_line3,
  post_code,
  home_phone,
  mobile_number,
  date_of_birth,
  subscription_method
)
VALUES
  (1, 'Leah', 'Mendes', '12 Park Ave', 'Sector 5', NULL, '10001', '555-3003', '555-9001', '1998-02-15', 'Card'),
  (2, 'Omar', 'Khan', '44 River Rd', NULL, NULL, '10002', NULL, '555-9002', '2006-10-21', 'Cash'),
  (3, 'Priya', 'Nair', '98 Oak St', 'Block B', 'Unit 3', '10003', '555-3005', '555-9003', '1995-06-01', 'Bank Transfer');

INSERT INTO opponent (opponent_team_name, contact_first_name, contact_last_name, contact_tel, contact_club)
VALUES
  ('Lakeside Rovers', 'Carlos', 'Diaz', '555-4001', 'Lakeside Club'),
  ('Mountain Strikers', 'Nina', 'Lewis', '555-4002', 'Mountain Club');

INSERT INTO fixture (
  team_id,
  opponent_id,
  sport_id,
  captain_member_id,
  fixture_date,
  home_away,
  result,
  score,
  fixture_status
)
VALUES
  (1, 1, 1, 1, '2024-09-12', 'Home', 'Win', '2-1', 'Completed'),
  (2, 2, 1, 3, '2024-10-05', 'Away', 'Loss', '0-1', 'Completed'),
  (3, 1, 2, 2, '2024-07-18', 'Home', 'Pending', 'TBD', 'Scheduled');
