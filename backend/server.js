const express = require('express');
const { query } = require('./db');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/api/sports', async (req, res) => {
  const { rows } = await query('SELECT * FROM sport ORDER BY sport_name');
  res.json(rows);
});

app.get('/api/leagues', async (req, res) => {
  const { rows } = await query(
    `SELECT l.league_id, l.league_name, l.contact_first_name, l.contact_last_name, l.contact_tel,
            s.sport_name
     FROM league l
     JOIN sport s ON l.sport_id = s.sport_id
     ORDER BY l.league_name`
  );
  res.json(rows);
});

app.get('/api/teams', async (req, res) => {
  const { rows } = await query(
    `SELECT t.team_id, t.team_name, t.league_division, s.sport_name, l.league_name
     FROM team t
     JOIN sport s ON t.sport_id = s.sport_id
     JOIN league l ON t.league_id = l.league_id
     ORDER BY t.team_name`
  );
  res.json(rows);
});

app.get('/api/members', async (req, res) => {
  const { rows } = await query(
    `SELECT m.member_id, m.first_name, m.last_name, m.mobile_number,
            mt.membership_name, m.subscription_method
     FROM member m
     JOIN membership_type mt ON m.membership_type_id = mt.membership_type_id
     ORDER BY m.last_name, m.first_name`
  );
  res.json(rows);
});

app.get('/api/opponents', async (req, res) => {
  const { rows } = await query(
    `SELECT opponent_id, opponent_team_name, contact_first_name, contact_last_name, contact_tel, contact_club
     FROM opponent
     ORDER BY opponent_team_name`
  );
  res.json(rows);
});

app.get('/api/fixtures', async (req, res) => {
  const { rows } = await query(
    `SELECT f.fixture_id, f.fixture_date, f.home_away, f.result, f.score, f.fixture_status,
            t.team_name, o.opponent_team_name, s.sport_name,
            m.first_name || ' ' || m.last_name AS captain
     FROM fixture f
     JOIN team t ON f.team_id = t.team_id
     JOIN opponent o ON f.opponent_id = o.opponent_id
     JOIN sport s ON f.sport_id = s.sport_id
     LEFT JOIN member m ON f.captain_member_id = m.member_id
     ORDER BY f.fixture_date DESC`
  );
  res.json(rows);
});

app.get('/api/membership-types', async (req, res) => {
  const { rows } = await query(
    `SELECT membership_type_id, membership_name, subscription_amount
     FROM membership_type
     ORDER BY subscription_amount DESC`
  );
  res.json(rows);
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(port, () => {
  console.log(`API server running on port ${port}`);
});
