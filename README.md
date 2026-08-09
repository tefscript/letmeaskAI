# letmeaskAI

A room-based Q&A platform where users can create rooms, submit questions, and get AI-powered answers.

## Tech stack

**Server**
- Fastify
- TypeScript
- Drizzle ORM + SQLite
- Zod
- Docker

**Web**
- React 19
- Vite
- TailwindCSS v4
- TanStack Query
- React Router DOM

## Getting started

**Server**

```bash
cd server
cp .env.example .env
npm install
npm run db:migrate
npm run dev
```

**Web**

```bash
cd web/web
npm install
npm run dev
```

Or run everything with Docker:

```bash
docker-compose up
```
