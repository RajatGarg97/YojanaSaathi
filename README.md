# YojanaSaathi

**Find benefits. Get ready. Apply with confidence.**

YojanaSaathi is a government scheme assistance app designed to help beneficiaries discover relevant schemes, understand eligibility, check document readiness, and move toward application through the best available path.

The repository currently contains:

- a newer **Next.js + TypeScript** app foundation that we are actively building on
- the earlier static prototype files kept in the repo as reference during migration

## What The App Does

YojanaSaathi is being built to support these core flows:

- Aadhaar-linked mobile login
- preferred language selection
- optional DigiLocker linking
- scheme discovery across categories like education, health, livelihood, and agriculture
- scheme-level eligibility checks
- document readiness checks with DigiLocker-first sourcing and manual upload fallback
- application routing through:
  - official API
  - assisted automation
  - assisted handoff

## Current Status

The **Next.js app** in this repo is an early full-app foundation, not yet a production system.

What is implemented today:

- responsive login and onboarding flow
- profile switching demo
- branded app shell
- scheme buckets:
  - new schemes
  - schemes applied for
  - benefits already active
- selected-scheme detail view
- mock document vault and readiness logic
- mock DigiLocker-first document fetch behavior
- mock application transitions between scheme states
- language support foundation with English and Hindi copy in key flows

What is still mocked:

- authentication and OTP delivery
- DigiLocker integration
- real government scheme APIs
- real persistence/backend storage
- real application submission to department portals

## Tech Stack

- [Next.js](https://nextjs.org/) 13
- [React](https://react.dev/) 18
- TypeScript
- plain CSS

## Project Structure

```text
app/
  globals.css
  layout.tsx
  page.tsx
components/
  yojana-saathi-app.tsx
lib/
  mock-data.ts
  types.ts
index.html
styles.css
app.js
plan.md
```

Notes:

- `app/`, `components/`, and `lib/` contain the new Next.js app.
- `index.html`, `styles.css`, and `app.js` are the older prototype files retained for reference during migration.
- `plan.md` captures earlier MVP planning context.

## Getting Started

### Prerequisites

- Node.js 16.14+  
  The current setup has been validated against the repo’s pinned Next.js 13 stack.

### Install

```bash
npm install
```

### Run In Development

```bash
npm run dev
```

By default, Next.js starts on port `3000`.

If you want to run on a specific host/port, for example:

```bash
npm run dev -- --hostname 0.0.0.0 --port 4174
```

### Build

```bash
npm run build
```

### Start Production Build

```bash
npm run start
```

### Quality Checks

```bash
npm run typecheck
npm run lint
```

## Product Direction

The product direction has evolved from a household-focused prototype toward a broader **beneficiary-first scheme assistant**.

The next major steps are likely to include:

- real backend and database models
- real session/auth flow
- persistent beneficiary profiles
- live scheme ingestion
- robust eligibility rules engine
- proper document ingestion and verification adapters
- production-grade DigiLocker integration
- activity/history and notifications

## Important Caveats

- This repo is currently a **demo foundation**, not a production-ready public-benefits platform.
- No real beneficiary data is being verified or submitted to government systems from the current implementation.
- Government integrations such as DigiLocker and department submission APIs generally require separate onboarding, credentials, and compliance review.

## Repository Notes

- The newer full-app work is happening on the `full-fledged-app` branch.
- The older prototype was committed on `master` before the migration work began.

## License

This repository is currently marked with the default `ISC` license from `package.json`.
