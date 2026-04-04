# 🗄️ The Hub Vault

> A professional resource site bridging Zimbabwe's innovation hubs with the Matter Career Readiness Institute (MCRI).

## What It Is

The Hub Vault is a static tutorial website that teaches facilitators and students at innovation hubs across Zimbabwe how to use GitHub as a professional digital filing system — for Keynote presentations, weekly reports, and student portfolios.

The site itself is the manual. Everything on it is instructional. No logins, no backend, no frameworks.

## Who It's For

- **Students** — learning to build a GitHub profile and upload their work
- **Facilitators** — managing hub repositories and running weekly reporting cycles
- **Sponsors & Hire-Ups** — observing hub progress without needing a GitHub account

## Pages

| Page | File | Purpose |
|------|------|---------|
| Home | `index.html` | What is GitHub and why it matters |
| Student Zone | `student-zone.html` | 4-step iPad-to-GitHub pipeline |
| Facilitator Portal | `facilitator-portal.html` | Hub management, reporting, monitoring + Sponsor view |
| Cheat Sheet | `cheat-sheet.html` | Glossary and iPad troubleshooting |

## Tech Stack

- Pure HTML, CSS, JavaScript — zero dependencies, zero build tools
- No frameworks, no npm, no configuration needed
- Light/dark mode with `localStorage` persistence
- Responsive: full nav on desktop, hamburger on tablet/mobile

## Deploying to GitHub Pages

1. Push this repository to GitHub
2. Go to **Settings → Pages**
3. Under **Source**, select `main` branch and `/ (root)`
4. Tap **Save** — your site will be live at `https://[username].github.io/the-hub-vault/`

## Adding Screenshots

Image placeholders are marked throughout the site with:
```
[IMAGE: descriptive caption]
```
Replace each placeholder `<div class="img-placeholder">` with an `<img>` tag pointing to your screenshot file in `assets/img/`.

---

Built for Zimbabwe Innovation Hubs × Matter Career Readiness Institute (MCRI)
