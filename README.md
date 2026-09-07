# APRON — Norte Air crew ops

Portfolio piece for a Portugal-remote fullstack brief: NestJS + TypeScript + PostgreSQL + Docker + React Native, delivered as a working PWA.

Independent design study. Not affiliated with any airline.

## Motionsites

- Seed: **skyelite-hero** (SkyElite Private Jets)
- Exact replica first: `/skyelite`
- Product restyle: `/` (brand) and `/app` (ops deck)

## Try it

```
crew@norteair.pt
dispatch@norteair.pt
password: norte-line
```

Dispatch can move flight status. Crew can acknowledge notices.

## Repo

```
apps/web       Vite + React source + static dist (SkyElite replica + APRON + deck)
apps/api       NestJS + Swagger + JWT
apps/mobile    Expo RN skeleton over the same DTOs
packages/shared  Zod + types
infra          docker-compose + schema.sql + AWS sketch
docs           ARCHITECTURE.md + SYSTEM-DESIGN.md
```

## Run locally

```bash
# static PWA
npx serve apps/web/dist

# API + Postgres
cd infra && docker compose up --build
# http://localhost:3001/api/health
# http://localhost:3001/api/docs
```

## Why this product

The brief is backend-heavy and the company is shipping its first mobile app. APRON is a crew/duty companion — roster, duty window, trip brief, tail status, ack — not a passenger booking clone and not a NetJets reskin.
