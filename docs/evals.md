# Evals Guide

## Test Set
- Build 20–30 Q/A pairs grounded in your PDFs.
- Include: fact lookups, multi-hop questions, and trick questions that tempt hallucinations.

## Metrics
- **Answer correctness**: exact match or semantic similarity (e.g., cosine > threshold).
- **Citation correctness**: all citations reference chunks that actually contain the answer.
- **Latency**: p50/p95 end-to-end.
- **Costs**: estimated per 100 queries.

## Harness (pseudo)
1. For each test case: run retrieval; call the model; parse citations.
2. Score: (correct?, citation_correct?).
3. Aggregate and write a small report (JSON/CSV).

## Failure Modes to Track
- Over/under-chunking; missed context.
- Prompt injection via PDF contents or user prompts.
- Ambiguity: multiple possible answers not handled.
- Tool errors: timeouts, rate limits, retries.
