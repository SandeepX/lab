# Lab Management System

A laboratory management system built with:

- **Backend**: [NestJS](https://nestjs.com/) (TypeScript, ESM)
- **Frontend**: [Vite](https://vite.dev/) + [React](https://react.dev/) + [Tailwind CSS](https://tailwindcss.com/) v4
- **Docker**: Multi-stage images + Docker Compose

## Project Structure

```
lab/
├── backend/          # NestJS API
│   ├── src/          # application source
│   └── Dockerfile
├── frontend/         # React + Tailwind CSS app
│   ├── src/          # application source
│   ├── nginx.conf    # SPA + /api proxy config
│   └── Dockerfile
├── docker-compose.yml
└── .env.example
```

## Run with Docker (production)

```bash
docker compose up --build
```

- Frontend: http://localhost:8080
- Backend API: http://localhost:3000/api
- PostgreSQL: bundled in the `db` service (internal network only)

### Default login

| Field    | Value            |
| -------- | ---------------- |
| Email    | admin@lab.local  |
| Password | admin123         |

A default admin user is seeded automatically on first startup (only when the
`users` table is empty). Change the password before going to production.

## Run locally (development)

```bash
# Backend (terminal 1)
cd backend
npm install
npm run start:dev

# Frontend (terminal 2)
cd frontend
npm install
npm run dev
```

The frontend dev server proxies `/api` requests to `http://localhost:3000`.

## API

The backend exposes all routes under the `/api` prefix.

| Endpoint        | Method | Auth    | Description                      |
| --------------- | ------ | ------- | -------------------------------- |
| `/api`          | GET    | –       | Health check                     |
| `/api/auth/login` | POST  | –       | Login, returns JWT + user        |
| `/api/auth/me`  | GET    | Bearer  | Returns the authenticated user   |

## Auth flow

1. `POST /api/auth/login` with `{ "email", "password" }` → `{ accessToken, user }`
2. Send the token as `Authorization: Bearer <token>` for protected routes
3. The frontend stores the token in `localStorage` and attaches it automatically
4. Unauthenticated or expired tokens are redirected to `/login`

## Scripts

| Script          | Purpose                          |
| --------------- | -------------------------------- |
| `backend build`  | Compile the NestJS API           |
| `frontend build` | Build the React + Tailwind app   |
| `docker compose up --build` | Build and run everything |