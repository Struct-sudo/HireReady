# HireReady Implementation Plan

Derived from `goks/HireReady — Product Requirements Document (PRD).md`.
Current state: PRD + README only, no code.
Build order follows PRD Section 11 priority: Must (1-5) -> Should (6-7) -> Nice (8).

Main journey: **Upload CV → Add Job Description → Analyze → Improve → Prepare → Apply**

---

## Phase 0: Foundation

**Goal:** Runnable skeleton for the full journey.

**Tasks:**
- Choose stack (e.g. web app + API + LLM API), init repo structure, env config, lint/test baseline
- Define data models:
  - `CV { education, experience, skills, certs, projects, achievements }`
  - `JobDescription { required/preferred skills, experience, education, responsibilities }`
  - `Analysis`, `Application`

**Concrete output:**
- App runs locally, `/health` OK
- Empty pages for each journey step
- Models + storage wired

---

## Phase 1: Feature 1 + 2 — CV Upload & JD Input

PRD refs: Feature 1: Upload CV, Feature 2: Add Job Description.

**Tasks:**
- CV file upload (PDF/DOCX/text) + text extraction + review screen before continuing
- JD paste/upload form + parsing to structured fields

**Concrete output:**
- `Upload CV` page with review-before-continue
- `Add JD` page with extracted requirements display
- Validation + error states (unsupported file, empty JD)
- Test: upload sample CV + Junior Data Analyst JD from PRD Section 12

---

## Phase 2: Feature 3 — Core CV & Job Analysis

PRD refs: Feature 3: CV & Job Analysis — core feature.

**Tasks:**
- Comparison pipeline returning `strong_matches { skills, experience }` + `gaps { missing_skills, vague_experience }` with explanations, not just a score

**Concrete output:**
- `Analyze` action + results view:
  - Skills you already have / Relevant experience
  - Skills not shown / Experience to clarify
- Works on PRD examples: Python/Git vs SQL/REST APIs
- Test: Data Analyst example yields Excel/Data analysis match, SQL/Power BI gap

---

## Phase 3: Feature 4 — Improvement Suggestions + Guardrail

PRD refs: Feature 4: CV Improvement Suggestions. Must Have.

**Tasks:**
- Before/after rewrites with `what + why`
- Accept/dismiss UI
- System guardrail: never invent experience, skills, or achievements

**Concrete output:**
- Suggestions list, e.g. `Worked on software projects.` -> `Developed Python applications and used Git for version control.`
- Review-and-apply flow
- Anti-hallucination tests + prompt constraints

---

## Phase 4: Feature 9 (partial) — Results & Application Workspace

PRD refs: Results & Application Workspace.

**Tasks:**
- Single workspace shell persisting per-application state

**Concrete output:**
- `Workspace` page with tabs: analysis, strengths, gaps, suggestions, tailored CV, cover letter, interview
- State persists across refresh
- MVP core done after this phase (covers Must Have 1-5)

---

## Phase 5: Features 5 + 6 — Tailored CV & Cover Letter

PRD refs: Feature 5: Tailored CV, Feature 6: Cover Letter. Should Have.

**Tasks:**
- Generate truthful tailored CV (highlight/emphasize, no fabrication)
- Cover letter from CV + JD + matches
- Both reviewable/editable, export/copy

**Concrete output:**
- `Tailored CV` preview + edit + download
- `Cover Letter` editor + regenerate
- Truthfulness check passes

---

## Phase 6: Feature 7 — Interview Preparation (text-only)

PRD refs: Feature 7: Interview Preparation. Nice to Have.

**Tasks:**
- `Prepare for Interview` generator (role-specific questions from job + JD + CV)
- Practice answers + feedback suggestions
- Text-based only, no video simulation in MVP

**Concrete output:**
- Question list + answer box + feedback view

---

## Phase 7: MVP Hardening & Release

**Tasks:**
- End-to-end Junior Data Analyst journey test (PRD Section 12 steps 1-6)
- Empty/error states, privacy (CV retention/delete notice — missing in PRD), basic analytics, deploy

**Concrete output:**
- E2E passes, MVP checklist Section 11 items 1-5 green, tagged release

---

**Suggested build order:** 0 → 1 → 2 → 3 → 4 → 5 → 6 → 7. If time-constrained, stop after Phase 4 — that is the PRD core.
