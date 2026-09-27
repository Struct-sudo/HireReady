# HireReady — Detailed Implementation Plan

Derived from `goks/HireReady — Product Requirements Document (PRD).md`.
Journey: **Upload CV → Add Job Description → Analyze → Improve → Prepare → Apply**
Priority: Must (CV upload, JD input, analysis, strengths/gaps, suggestions) → Should (tailored CV, cover letter) → Nice (interview prep).

---

## Phase 1: Design System & UX Flow

**Goal:** Lock look, components, and screens before building logic.

**Tasks:**
- Map screens: Landing → Upload CV → Review CV → Add JD → Analysis → Suggestions → Workspace → Tailored CV → Cover Letter → Interview Prep
- Define design tokens: color palette (primary/accent/neutral/semantic), typography scale, spacing, radii, shadows, light/dark rules
- Define core components: Button, Input/Textarea, FileDropzone, Card, Tabs, Badge/Tag, Alert, Modal, Skeleton/EmptyState, Markdown renderer
- Define result patterns: `Strong Matches` (Skills you already have / Relevant experience) vs `Areas to Improve` (Skills not shown / Vague experience) with explanations, not just a score
- Wireframes for desktop + mobile, including review-before-continue and review-before-apply gates from PRD
- Accessibility baseline: keyboard nav, focus states, contrast, labels

**Concrete output:**
- `design/tokens.json` + component inventory
- Clickable wireframes for all 10 screens
- UX acceptance: user completes Upload→Analyze in ≤6 steps with no dead ends

---

## Phase 2: Architecture & Technical Decisions

**Goal:** Decide stack and boundaries; make AI behavior testable and safe.

**Decisions to lock:**
- **App type:** Web app (recommended: React/Next.js frontend + Python/Node API). Monorepo with `web/`, `api/`, `prompts/`, `tests/`
- **Storage:** Postgres/SQLite for `applications`; object storage (S3-compatible/local) for CV files; no long-term retention by default
- **AI layer:** LLM API behind a service wrapper (`ai/analyze.py`) with versioned prompts, JSON-schema output, temperature ~0–0.3, timeouts/retries, cost logging
- **CV parsing:** PDF/DOCX → text (e.g. `pypdf`/`mammoth`), 10MB limit, char cap, PII redaction in logs
- **Auth (MVP):** magic-link or session-based; anonymous draft allowed but deletable
- **Environments:** `.env` for keys, `dev/staging/prod`, `/health` endpoint

**Concrete output:**
- `ARCHITECTURE.md` (diagram + decisions + alternatives rejected)
- Runnable skeleton: `web/` + `api/` + `/health` OK, lint/test/CI baseline
- Folder structure agreed and scaffolded

---

## Phase 3: Data Models & API Contracts

**Goal:** Shared types for CV, JD, analysis, and workspace.

**Models:**
- `CV { id, raw_text, education[], experience[], skills[], certifications[], projects[], achievements[] }`
- `JobDescription { id, raw_text, required_skills[], preferred_skills[], experience_reqs, education_reqs, responsibilities[], qualifications[] }`
- `Analysis { strong_matches { skills[], experience[] }, gaps { missing_skills[], vague_experience[] }, explanations[] }`
- `Suggestion { id, target_section, current, proposed, reason, status: pending/accepted/dismissed }`
- `Application { id, cv_id, jd_id, analysis, suggestions[], tailored_cv, cover_letter, interview_session }`

**API (REST):**
- `POST /api/cv/upload` → `CV`
- `POST /api/jd` → `JobDescription`
- `POST /api/analyze { cv_id, jd_id }` → `Analysis`
- `POST /api/suggestions` → `Suggestion[]`, `PATCH /api/suggestions/:id`
- `POST /api/tailored-cv`, `POST /api/cover-letter`, `POST /api/interview/questions`, `POST /api/interview/feedback`
- `GET /api/applications/:id` (workspace aggregate)

**Concrete output:**
- JSON schemas + TypeScript/Python types
- API spec (OpenAPI) + mocked responses
- Validation rules: file types, size, empty JD, over-long inputs

---

## Phase 4: CV Upload (F1) + JD Input (F2)

**Goal:** Reliable inputs with review gates.

**Tasks:**
- FileDropzone: PDF/DOCX/TXT, progress, virus/size checks, text extraction preview
- CV review screen: editable extracted sections before continuing
- JD form: paste + optional file/URL, structured preview (required/preferred skills, experience, education, responsibilities)
- Error/empty states: unsupported file, scanned PDF with no text, JD too short

**Concrete output:**
- Working Upload CV + Add JD pages
- Sample fixtures: `fixtures/cv-sample.pdf`, `fixtures/jd-data-analyst.txt` (from PRD §12)
- Tests: parse accuracy, rejection cases, review-edit persistence

---

## Phase 5: Core Analysis Engine (F3)

**Goal:** The core PRD value — explain fit, don't just score.

**Tasks:**
- Prompt v1 `analyze-cv-vs-jd`: input CV JSON + JD JSON → strict JSON `Analysis`
- Rules: cite evidence spans, explain each match/gap, no numeric-only verdict
- Guardrails: low temperature, schema validation, fallback message on low-confidence
- Evals: Junior Data Analyst case must yield Excel/Data analysis/Problem solving as matches; SQL/Power BI/detail as gaps; Software case must yield Python/Git matches, SQL/REST API gaps

**Concrete output:**
- `prompts/analyze-v1.md` + `ai/analyze.py` + eval suite
- Analysis results UI with two groups + explanations
- Pass rate: 100% schema-valid, ≥4/5 manual relevance on fixtures

---

## Phase 6: Suggestions, Tailored CV, Cover Letter (F4/F5/F6)

**Goal:** Actionable improvements without fabrication.

**Tasks:**
- Suggestions prompt: `current → proposed + why`; e.g. `Worked on software projects.` → `Developed Python applications and used Git for version control.`
- Global truthfulness rule in system prompt: **never invent experience, qualifications, skills, achievements**; only rephrase/emphasize evidence from CV
- Tailored CV generator: reorder/highlight relevant skills/experience, improve vague bullets, keep truthful, diff view + download (PDF/MD)
- Cover letter generator: CV + JD + matches → editable draft, regenerate per tone/length
- Accept/dismiss/undo for suggestions; review-before-use gates

**Concrete output:**
- Suggestions list UI, Tailored CV preview + export, Cover Letter editor
- Hallucination tests: injected JD skill not in CV must NOT appear as user experience
- Acceptance: all generated claims traceable to CV spans

---

## Phase 7: Workspace + Interview Prep (F9/F7)

**Goal:** One place to manage the application + text-only prep.

**Tasks:**
- Workspace layout with tabs: Analysis | Strengths | Gaps | Suggestions | Tailored CV | Cover Letter | Interview
- Persistence: autosave draft application, resume after refresh, delete application + files (privacy)
- Interview: question generator from job+JD+CV (behavioral + technical + role-specific), answer box, feedback prompt (structure, relevance, STAR hints), retry
- Explicit non-goals enforced: no video, no job search, no auto-apply, no LinkedIn

**Concrete output:**
- Workspace page aggregating all artifacts
- Interview Q&A + feedback flow working end-to-end
- Tests: state persistence, delete purges files + DB rows

---

## Phase 8: Cross-Cutting — Security, Privacy, Quality, DevOps

**Goal:** MVP-safe and releasable.

**Tasks:**
- Privacy: retention policy (e.g. 30 days), delete-my-data, PII redaction in logs, consent notice
- Security: file-type sniffing, size caps, rate limits on AI endpoints, secrets handling, CORS
- Quality: unit + integration + E2E (Playwright) for Upload→JD→Analyze→Suggest→Tailor→Letter→Interview; prompt regression evals; latency/cost budgets per analyze call
- Observability: structured logs, AI call tracing (prompt version, tokens, cost), error tracking
- Deploy: Dockerfile, staging/prod, backups, rollback plan

**Concrete output:**
- Privacy notice + data-deletion working
- CI green: lint, typecheck, tests, evals
- Staging URL + runbook; E2E video/log for PRD §12 flow

---

## Phase 9: MVP Release & Iteration

**Goal:** Ship Must-have core, measure, then Should/Nice.

**Exit criteria (PRD §11):**
- Must: CV upload, JD input, analysis, strengths/gaps, suggestions — all working
- Should: tailored CV, cover letter
- Nice: interview prep (text)
- Out of scope untouched: job search, auto-apply, LinkedIn, video interviews, recommendations, courses, tracking, salary, marketplace, social

**Concrete output:**
- Tagged `v0.1.0-mvp`, changelog, demo script using Junior Data Analyst journey
- Backlog: analytics on drop-off, suggestion acceptance rate, feedback thumbs on analysis quality

---

**Build order:** 1 → 2 → 3 → 4 → 5 → 6 → 7 → 8 → 9. If time-constrained, ship through Phase 6 + minimal Workspace — that is the PRD core.
