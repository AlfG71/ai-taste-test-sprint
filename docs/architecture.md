# Architecture (High-Level)

```
Client (React)
  ├─ Upload PDF(s)
  ├─ Chat UI (stream)
  └─ Show citations (click to highlight)

API (Node/Express or FastAPI)
  ├─ /upload: parse → chunk → embed → store vectors
  ├─ /query: retrieve top-k → compose prompt → call LLM → return answer + citations
  ├─ /feedback: store thumbs up/down, freeform notes
  └─ Middleware: rate limiting, input sanitizer, timeouts

Vector Store
  ├─ id, doc_id, chunk_id, text, embedding
  └─ similarity search (cosine)

Logs & Evals
  ├─ request_id, latency, token usage
  └─ eval harness outputs
```

**Guardrails**
- Input: sanitize, limit max tokens, strip markdown links if needed.
- Output: enforce citations; reject answers without sources; redact PII if required.
- Infra: timeouts, retries with jitter, request size limits.
