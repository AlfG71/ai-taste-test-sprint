# AI Taste Test Sprint (2 Weeks)

A pragmatic 2-week experiment to evaluate **AI-for-product** fit via a small, source-cited Document Q&A feature with basic guardrails and evals.

## Goals
- Build a minimal **Doc Q&A** feature: upload PDF → chunk → embed → retrieve → answer with **citations**.
- Add **guardrails**: prompt-injection filter, PII redaction, timeouts/retries, rate limiting.
- Create **lightweight evals**: a small test set to track answer quality and citation correctness.
- Capture **metrics**: latency, token/cost estimates, top failure modes.
- Produce a **case study** you can show to clients.

## Stack (suggested)
- **Backend**: Node.js (TypeScript), Express, vector DB (pgvector or Qdrant) — start with an in-memory store for week 1 if needed.
- **LLM**: OpenAI-compatible API (swap as needed later).
- **Frontend**: React (Vite), simple chat UI + file upload.
- **Storage**: Local dev folder or S3-compatible bucket for file uploads (dev only).

> You can swap Node for Python (FastAPI) if preferred. Files below are language-agnostic.
> Start with the plan in `docs/sprint-plan.md` and create issues from `issues.csv` (GitHub Issues import).

## Repo Structure
```
.
├─ docs/
│  ├─ sprint-plan.md
│  ├─ evals.md
│  └─ architecture.md
├─ .github/
│  ├─ ISSUE_TEMPLATE/
│  │  ├─ bug_report.yml
│  │  └─ feature_request.yml
│  └─ workflows/
│     ├─ ci.yml
│     └─ codeql.yml
├─ app-placeholder/
│  ├─ README.md
│  └─ package.json
├─ issues.csv     (Import via GitHub: Issues → ⋯ → Import)
└─ LICENSE        (MIT)
```

## Quick Start
1. Create a new GitHub repo and push these files.
2. Import issues: In the repo, go to **Issues** → **⋯ (top right)** → **Import** and upload `issues.csv`.
3. Enable **CodeQL** under **Security** if not auto-enabled by `codeql.yml`.
4. Start Week 1 Day 1 from `docs/sprint-plan.md`.

## Deliverable by Day 14
- Working doc Q&A demo with citation callouts.
- Evals report (win/lose cases, quality metrics).
- Short case study (what you built, impact, limits, next steps).

---

**Note**: This repo is a scaffold; swap tools/libraries to fit your preferences.
