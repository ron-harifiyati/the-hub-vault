# The Hub Vault — Design Spec
**Date:** 2026-04-05
**Status:** Approved

---

## Purpose

A static, multi-platform tutorial site that teaches non-technical facilitators and students across all innovation hubs in Zimbabwe how to use GitHub as a professional digital filing system — for storing, versioning, and sharing Keynote presentations and reports. It bridges all hubs with the Matter Career Readiness Institute (MCRI).

The site IS the manual. Everything on it is instructional — no live data, no backend, no frameworks.

---

## Audience

- **Students:** Non-technical, primarily using iPads, learning Swift/coding basics at innovation hubs
- **Facilitators:** Hub managers running cohorts, reporting to sponsors and MCRI
- **Sponsors / Hire-Ups:** Viewing hub progress passively — no login required

---

## Architecture

**Type:** Static HTML/CSS/JS — zero backend
**Hosting:** GitHub Pages
**Approach:** 5 separate `.html` files (faster per-page load, cleaner on mobile)
**Shared assets:** Single `style.css`, single `main.js`

```
the-hub-vault/
├── index.html                  # Home
├── student-zone.html           # Student Zone
├── facilitator-portal.html     # Facilitator Portal (+ Sponsor subsection)
├── cheat-sheet.html            # Cheat Sheet
├── assets/
│   ├── css/style.css
│   ├── js/main.js
│   └── img/                    # Screenshots/placeholders
├── docs/superpowers/specs/     # This file
└── README.md
```

---

## Visual Design

### Color System

| Token | Dark Mode | Light Mode |
|-------|-----------|------------|
| `--bg-primary` | `#0f0f0f` | `#ffffff` |
| `--bg-secondary` | `#1a1a1a` | `#f5f5f5` |
| `--bg-card` | `#242424` | `#ffffff` |
| `--text-primary` | `#ffffff` | `#111111` |
| `--text-secondary` | `#a0a0a0` | `#555555` |
| `--accent` | `#ff6b2b` | `#e85a1a` |
| `--accent-hover` | `#ff8c55` | `#ff6b2b` |
| `--border` | `#333333` | `#e0e0e0` |

### Typography
- Font: System stack (`-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`)
- Base size: `18px` (large for iPad readability)
- Headings: Bold, orange accent for section labels

### Components
- **Cards:** Rounded (12px), subtle border, generous padding (24px)
- **Buttons:** Min height 48px (tap target), full-width on mobile
- **Step indicators:** Numbered circles in orange
- **Placeholders:** Dashed-border boxes with descriptive text in brackets
- **Tables:** Horizontally scrollable on small screens

---

## Navigation

- **Desktop (>900px):** Full horizontal nav in sticky header
- **Tablet/Mobile (≤900px):** Hamburger icon reveals dropdown nav
- **Theme toggle:** Sun/moon icon button always visible in header (right side)
- **Active state:** Orange underline on current page link
- **No hover-dependent functionality** — all interactions work on tap

### Nav Items
1. Home (`index.html`)
2. Students (`student-zone.html`)
3. Facilitators (`facilitator-portal.html`)
4. Cheat Sheet (`cheat-sheet.html`)

---

## Pages

### 1. Home (`index.html`)
- Hero: Site name + tagline "Your Work. Tracked. Professional. Safe."
- "The Foundation" section with 3 icon cards:
  - The Folder — cloud home for files
  - The Time Machine — version history as backup
  - The Passport — professional identity for MCRI + employers
- "How We Use It" — 3 use cases: Reports, Portfolios, Collaboration
- CTA cards linking to Student Zone and Facilitator Portal

### 2. Student Zone (`student-zone.html`)
- Intro: "Your Digital Journey"
- 4-step visual pipeline with numbered steps:
  1. The Account — professional username, headshot, bio
  2. The Repository — naming, README
  3. The iPad-to-GitHub Pipeline — Export PDF → Save to Files → Upload in Safari
  4. The Commit — writing good commit messages
- Critical callout box: "iPads are wiped every cohort. If it's not on GitHub, it didn't happen."
- Image placeholders at: Share Sheet, Save to Files, GitHub Upload button, Commit message field
- Mini-Challenge checklist (interactive checkboxes)

### 3. Facilitator Portal (`facilitator-portal.html`)
- Intro: "Managing the Hub"
- 4-step guide:
  1. Hub Organization — repo naming table (`[Hub-Name]-Cohort-2026`), public vs private
  2. Reporting Cycle — Friday PDF upload, sharing repo URL vs emailing files
  3. Monitoring Progress — Commits tab, timestamps, student consistency
  4. Feedback — GitHub Issues for student comments
- **Sponsor & Hire-Up subsection** (anchor-linked card):
  - How to navigate the Hub Vault without a GitHub account
  - What to look for: file list, PDF browser preview
  - The Impact statement
- Repo naming table: example names for Zimbabwe hubs

### 4. Cheat Sheet (`cheat-sheet.html`)
- Glossary cards (blunt, plain-English):
  - Repository, Commit, README, History
- iPad Troubleshooting cards:
  - Safari Ghosting, File Size, Login Issues / Recovery Codes

---

## Accessibility & Interaction
- No hover-only states — all interactive elements work on first tap
- Min tap target: 48x48px
- High contrast text on all backgrounds (WCAG AA minimum)
- `prefers-color-scheme` media query sets initial theme; JS toggle overrides and persists via `localStorage`
- All image placeholders have descriptive alt text

---

## Non-Goals
- No user authentication
- No dynamic data or APIs
- No frameworks (React, Vue, etc.)
- No build tools (Webpack, Vite, etc.)
- No live GitHub data embeds
