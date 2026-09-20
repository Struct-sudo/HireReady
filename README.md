# HireReady

AI-powered career assistant that helps job seekers improve their applications by comparing their CV with a specific job description.

## Product Overview

**HireReady** is built for all job seekers — students, graduates, and working professionals.

Main journey:

**Upload CV → Add Job Description → Analyze → Improve → Prepare → Apply**

## Problem It Solves

Many job seekers use the same CV for different jobs without knowing whether their skills and experience match what the employer is looking for.

They struggle to:
- Identify the skills employers are looking for
- Recognize gaps in their CV
- Know which parts of their CV need improvement
- Present their experience effectively
- Write a good cover letter
- Prepare for job interviews

HireReady helps job seekers understand how their CV fits a specific job, improve their application, and prepare for the interview.

## Key Features (MVP)

### Must Have
1. **Upload CV** — Upload existing CV (education, work experience, skills, certifications, projects, achievements). Review extracted info before continuing.
2. **Add Job Description** — Provide JD to extract required/preferred skills, experience, education, responsibilities, and qualifications.
3. **CV & Job Analysis (core)** — Compare CV vs JD. Show:
   - Strong matches (e.g. Python, Git, relevant projects)
   - Areas to improve (e.g. SQL not clearly shown, vague contribution descriptions)
   - Explanations, not just a score.
4. **CV Improvement Suggestions** — Specific before/after rewrites with why. E.g.:
   - Current: `Worked on software projects.`
   - Suggested: `Developed Python applications and used Git for version control.`
   - Rule: never invent experience, skills, or achievements.

### Should Have
5. **Tailored CV** — Job-targeted version highlighting relevant experience/skills, truthful, reviewable.
6. **Cover Letter** — Personalized from CV + JD + relevant skills/experience, editable.

### Nice to Have
7. **Interview Preparation** — Text-based Q&A generated from job + JD + user background, with answer feedback. No video simulation in MVP.

### Application Workspace
One place to access: CV analysis, strengths, gaps, suggestions, tailored CV, cover letter, interview prep.

## How It Works

Using the Junior Data Analyst example:

1. **Step 1 — Upload CV:** User uploads CV.
2. **Step 2 — Add Job Description:** User pastes JD.
3. **Step 3 — Analyze:** HireReady identifies:
   - Strong matches: Excel, Data analysis, Problem solving
   - Gaps: SQL not clearly shown, Power BI missing, experience needs detail
4. **Step 4 — Improve CV:** Review and accept specific suggestions.
5. **Step 5 — Create application:** Generate tailored CV + personalized cover letter.
6. **Step 6 — Prepare for interview:** Practice role-specific questions.

## Out of Scope for MVP

Job searching, automatic applications, LinkedIn integration/profile optimization, AI video interviews, job recommendations, courses, application tracking, salary predictions, marketplace, social/community features.

## Project Structure

```
.
├── README.md
└── goks/
    └── HireReady — Product Requirements Document (PRD).md
```

See the full PRD in `goks/HireReady — Product Requirements Document (PRD).md` for details.

## Status

Initial version — PRD + README only. No implementation yet.
