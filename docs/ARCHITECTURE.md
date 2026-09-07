# APRON architecture

Air Norte crew ops API. Portfolio study — simulated OCC feed.

```
[ Expo RN / PWA ]  --JWT-->  [ NestJS :3001 ]
                                  |
                                  +-- in-memory store (default)
                                  +-- Postgres (DATABASE_URL)
```

## Modules

| Surface | Responsibility |
|---|---|
| `AuthController` | login, `/me`, JWT access + refresh |
| `OpsController` | today, flights, status machine, notices, duty, fleet, audit |
| `HealthController` | `/health` `/ready` for ECS |
| `Store` | source of truth + append-only audit |
| `PostgresStore` | optional pool when `DATABASE_URL` is set |

## Status machine (dispatch / admin only)

```
scheduled → briefed | delayed | cancelled | boarding
briefed   → boarding | delayed | cancelled
boarding  → airborne | delayed | cancelled
delayed   → briefed | boarding | cancelled
airborne  → arrived
arrived   → ∅
cancelled → ∅
```

Crew may read their own legs and ACK notices. They cannot mutate status.

## Demo accounts

Password for all: `norte-line`

- `crew@norteair.pt` — Inês Carvalho, PIC
- `dispatch@norteair.pt` — Rui Almeida, OCC desk

## Run

```bash
cd apps/api && npm install && npm run start:dev
docker compose -f infra/docker-compose.yml up --build
```
