# 2-Week AI Taste Test Sprint Plan

**Focus**: Document Q&A with citations + basic guardrails and lightweight evals.

## Week 1 — Prototype the core loop
**Day 1**
- Define scope: 1–2 PDF types (e.g., legal agreements). List success criteria (“answers with correct citations 70%+ on 20 Qs”).
- Set up repo, create issues from `issues.csv`, create `env.example` (API keys).
- Choose chunking (e.g., recursive 1k tokens overlap 150) and embedding model.

**Day 2**
- Implement file upload (local dev storage) and PDF parsing pipeline.
- Build chunking + embedding job; store vectors (in-memory or local DB).

**Day 3**
- Implement retrieval endpoint: query → top-k with mmr/rerank (start with cosine top-k=8).
- Draft answer composer prompt with citation formatting requirements.

**Day 4**
- Build the React chat UI: file upload, chat box, streaming responses, citation tooltips.
- Add telemetry logs (latency, token counts).

**Day 5**
- Add simple guardrails: input sanitizer, prompt-injection heuristic, output length limit.
- Start collecting 20–30 Q/A pairs for evals based on your PDFs.

## Week 2 — Quality, guardrails, and demos
**Day 6**
- Implement “groundedness” check: verify citations match retrieved chunks; reject hallucinations.
- Add retry/timeouts + basic rate limiting per IP/user.

**Day 7**
- Build lightweight eval harness: run the 20–30 Qs; score exact-match spans or semantic similarity.
- Track pass@1 and “citation correctness” (% of answers citing the right chunks).

**Day 8**
- UX polish: clickable citations that highlight source passages; empty states & error messages.
- Add transcript export (JSON) and feedback buttons (👍/👎) that log to a file/DB.

**Day 9**
- Cost/latency analysis: measure end-to-end median/95th pctl; estimate monthly costs for N users.
- Write docs: `docs/architecture.md`, update `README.md` with diagrams if helpful.

**Day 10**
- Demo day script + short case study outline (what it does, where it fails, next steps).
- Stretch: add a reranker or tool-use (function calling) for a tiny automation.

## Success Criteria (suggested)
- ≥70% correct answers on eval set with correct citations.
- p95 latency ≤ 6s on typical queries with your chosen model.
- Clear list of top 5 failure modes + mitigation ideas.
