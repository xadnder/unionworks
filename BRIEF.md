# Project brief: OFNHP website prototype

*What this system is. Expected to go stale; update it when the system changes. How we work is governed by the charter (CHARTER.md, Order of the Azure Button), not by this file. Where they disagree on WHAT, DECISIONS.md wins.*

Last updated: 2026-11-22

## Purpose

Prove out a member-first website for OFNHP (AFT Local 5017, ~7,000 nurses and health professionals in Oregon and SW Washington) while the real site stays on AFT's StateWeb platform at ofnhp.aft.org.

Members come to the site for four jobs: **find my contract, report unsafe staffing, find my steward, file a grievance.** Everything on the homepage is arranged around getting them to those in one tap, on a phone, at the end of a shift.

## Scope

**Rebuilt here:** the homepage, `/staffing/` (Report Unsafe Staffing) and `/contracts/` (Find My Contract).

**Not rebuilt (linked to the live site):** every other page, every photo, every PDF, the grievance form, the steward roster, membership signup, news articles.

## How it fits together

```
GitHub repo ──push──▶ GitHub Pages runs Jekyll ──▶ static site at <user>.github.io/<repo>/
                                                     │
            _data/*.yml (words, links) ──────────────┤  templates read the data;
            _layouts + _includes (frames) ───────────┤  pages hold layout only
            assets/ (css, js) ───────────────────────┘
                                                     │
                     photos, PDFs, other pages ◀─────┘  hot-linked from ofnhp.aft.org
```

- **Content lives in `_data/`.** Pages contain layout only, so an editor changes words without touching HTML. Each fact (phone number, a form's address, an employer's page) exists in exactly one place.
- **One header, one footer, one menu** (`_includes/`), used by every page. The menu is built from `_data/nav.yml` and placed twice (desktop bar and phone menu) by the template, so the two can't drift apart.
- **Menus work with no JavaScript** (`<details>`/`<summary>`). `assets/js/site.js` adds only conveniences.
- **Links:** our own pages are written `/staffing/` in the data, and `_includes/href.html` adds the baseurl. Outside links (`https://…`) pass through untouched.

## Brand

OFNHP style guide, Local Colors: OFNHP Red #E52B28, Charcoal #58595B, White, Cerulean #00AEEF. Fonts: Oswald (headings), Bebas Neue (short labels, sparingly), Open Sans (body); Kaushan Script unused (reserved for quotations). Two readability shades (#C42420, #2E2F31) are documented at the top of `assets/css/site.css`.

## Known limits (what this system cannot see)

- **News is typed by hand.** The homepage cards don't update when ofnhp.aft.org posts news. The live site has no feed this static site can read, and browsers block a page on github.io from reading another site's pages directly.
- **Hot-linked assets can break silently.** If someone deletes or renames a photo or PDF on ofnhp.aft.org, this site shows a broken image or dead link, and nothing here will notice.
- **The staffing rule for Kaiser inpatient Techs, Lab Pros and Pros is unconfirmed.** `_data/staffing.yml` copies the live page's 2024 notice (they use ADO). Confirm before anyone relies on it.
- **Not tested with a real Jekyll build before the first push.** The templates were rendered with LiquidJS in Jekyll-compatible mode and checked at desktop and phone widths. The first GitHub Pages build is the real test; check the Actions tab.
- **Not the live site.** Members don't know this exists. It is a prototype and a reference for the StateWeb version (see the StateWeb kit and setup guide from 2026-11-22).

## Related work

- StateWeb kit (CSS + sidebar blocks + ADO page body) that brings the same design to ofnhp.aft.org itself, with a setup guide for the communications person.
- Usability & aesthetics review of ofnhp.aft.org (2026-11-22), which motivated this.
