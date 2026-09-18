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

The backend exposes all routes under the `/api` prefix. Health check:

```
GET /api
```

## Scripts

| Script          | Purpose                          |
| --------------- | -------------------------------- |
| `backend build`  | Compile the NestJS API           |
| `frontend build` | Build the React + Tailwind app   |
| `docker compose up --build` | Build and run everything |