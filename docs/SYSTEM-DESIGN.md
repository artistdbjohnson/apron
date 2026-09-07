# APRON system design

Written for the hiring manager who asked for reliability, security, and scale.

## Domain

Air Norte is a fictional Portuguese ACMI / bizav operator. APRON is the first crew mobile product. OCC still lives in email + PDF. The app is the phone-shaped edge of the same roster.

Seeded stations: OPO, LIS, FAO, FNC. 7 Sep 2026 duty day.

## Reliability

- Flight status is a finite state machine. Illegal transitions 401 with a reason, never a silent overwrite.
- Audit log is append-only. Dispatch can read it.
- `/health` and `/ready` are separate so an ECS target group can drain.
- Memory store is intentional for the demo. Schema in `infra/schema.sql` is the production shape.

## Security

- JWT access 12h, refresh 7d. Secret from env.
- Role checks on every mutation. Dispatch/admin write. Crew read + ack.
- No real PII. Seeded PT names only.
- Login is email + shared demo password. Production would be argon2 + IdP (Entra / Cognito) and device binding.

## Scale (what we would do on AWS)

See `infra/aws.md`. First launch: ECS Fargate + RDS Postgres + ALB. Roster-change fanout later via SQS, not a websocket mesh.

What we will not pretend to have built: a real EASA FTL engine, live ADS-B, NOTAM ingestion, Kafka.

## Offline contract

PWA caches last `/today` payload. Writes (status, ack) require a network. No write queue in v0 — ramp wifi is bad, silent write queues on duty data are worse.
