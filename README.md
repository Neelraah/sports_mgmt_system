# Sports Management System

This repository provides a minimal backend API and front-end UI for managing sports leagues, teams, members, and fixtures based on the supplied ER diagram.

## Database

1. Create a PostgreSQL database.
2. Run the schema and seed scripts:

```bash
psql "$DATABASE_URL" -f database/schema.sql
psql "$DATABASE_URL" -f database/seed.sql
```

The `database/queries.sql` file includes example reporting queries.

## Backend

```bash
cd backend
npm install
DATABASE_URL="postgres://user:password@localhost:5432/sports_mgmt" npm start
```

The API is available at `http://localhost:3000/api`.

## Front-end UI

Serve the `ui` folder with any static server (or open the HTML files directly):

```bash
cd ui
python -m http.server 8080
```

Then open `http://localhost:8080/index.html` in your browser.

If your API runs on another host, update `ui/js/utils.js` with the correct base URL.
