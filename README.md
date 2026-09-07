# APRON — Air Norte crew ops

Portfolio piece for a Portugal-remote fullstack brief: NestJS + TypeScript + PostgreSQL + Docker + React Native, delivered as a working PWA.

Independent design study. Not affiliated with Boeing, TAP, or any airline.

## Live

- Brand + deck + Motionsites plate ship from `apps/web/dist`
- Deck: `/app`
- Exact replica: `/skyelite`

```
crew@norteair.pt
dispatch@norteair.pt
password: norte-line
```

Dispatch can move flight status. Crew can acknowledge notices.

## Motionsites

- Seed: **skyelite-hero** (SkyElite Private Jets)
- Exact replica first: `/skyelite` — Inter, `#202A36`, CloudFront jet, Start / Story / Rates / Benefits / FAQ
- Product restyle after the plate: `/` (Air Norte brand) and `/app` (ops deck)

## Repo

```
apps/web       Static PWA (SkyElite replica + APRON + deck) + Vite source
apps/api       NestJS + Swagger + JWT + Postgres adapter
apps/mobile    Expo / React Native shell over the same DTOs
packages/shared  Zod + types
infra          docker-compose + schema.sql + AWS sketch
docs           ARCHITECTURE.md + SYSTEM-DESIGN.md + brand lock
```

## Run locally

```bash
# static PWA
npx serve apps/web/dist

# API + Postgres
cd infra && docker compose up --build
# http://localhost:3001/api/health
# http://localhost:3001/api/docs

# React Native
cd apps/mobile && npx expo start
```

## Why this product

The brief is backend-heavy and the company is shipping its first mobile app. APRON is a crew/duty companion — roster, duty window, trip brief, tail status, ack — not a passenger booking clone.
