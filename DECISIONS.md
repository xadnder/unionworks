# Decision record

*Why the system is the way it is. Add new decisions at the bottom. Don't edit a past decision when it changes: add a new one that supersedes it, and mark the old one "Superseded by D-n".*

---

### D-1 · 2026-11-22 · Static site on GitHub Pages, built by Jekyll

**Decision:** Use GitHub Pages' built-in Jekyll, with no build step on anyone's computer.

**Why:** Free hosting; GitHub builds on every push; Jekyll gives shared templates (one header, footer and menu for every page) and data files, which plain HTML can't. The maintainers aren't developers, so "edit a file on GitHub, wait a minute" is the whole workflow.

**Rejected:** Plain HTML pages (header and menu copied into every page, so they drift); a JavaScript-injected header (breaks without JS, flashes on load); Eleventy or other generators (need Node and a GitHub Actions workflow, which is more to maintain for no gain at this size).

**Cost:** No double-click preview; local preview needs Ruby. Accepted.

### D-2 · 2026-11-22 · Content in `_data/`, layout in templates

**Decision:** Every word, link and photo address lives in a YAML file in `_data/`; page files hold layout only.

**Why:** Normalize data once: each fact has one home (the phone number is used in four places but written once). Editing content can't break layout.

### D-3 · 2026-11-22 · Hot-link photos, PDFs and unbuilt pages from ofnhp.aft.org

**Decision:** Don't copy assets into the repo; link to their live addresses.

**Why:** Requested by Joshua. One source of truth for documents (contracts especially, where a stale copy is worse than none). Keeps the repo small.

**Cost:** If ofnhp.aft.org renames or deletes a file, this site breaks silently (see BRIEF.md, Known limits).

### D-4 · 2026-11-22 · Menus built on `<details>`/`<summary>`

**Decision:** Dropdowns and the phone menu are native disclosure elements; JavaScript only adds "one open at a time" and Escape/outside-click closing.

**Why:** They work without script, with a keyboard and with screen readers, by default.

### D-5 · 2026-11-22 · Brand colors with two readability shades

**Decision:** Use the style guide's Local Colors, plus a darker red (#C42420) for small red text and a deep charcoal (#2E2F31) for headings and the footer. Cerulean never carries text on white.

**Why:** Measured contrast: white on OFNHP Red is 4.46:1 (WCAG needs 4.5:1 for normal text; red is used only behind large/bold type); Cerulean on white is 2.5:1. The shades are the same hues, not new colors.

### D-6 · 2026-11-22 · Logo shown through a crop window

**Decision:** Display the live logo file through a CSS crop (`.logo-crop`) instead of hosting a trimmed copy.

**Why:** The live file is 1000×165 with the mark in the middle third. Cropping by CSS keeps D-3 (single source) and shows the mark at its true proportions; `flex: none` stops the header from squeezing it.

### D-7 · 2026-11-22 · Homepage news is hand-curated (3 cards)

**Decision:** The homepage shows three hand-written news cards from `_data/home.yml`, plus "All news →" to the live site.

**Why:** No feed is available to read automatically (BRIEF.md, Known limits), and hand-written summaries end on a full sentence, which fixes the live site's mid-sentence truncation.

**Revisit if:** the live site gains an RSS/JSON feed, or news gets updated more often than someone will edit the file.

### D-8 · 2026-11-27 · Public-domain stock photos allowed when the live site has none

**Decision:** When a story on ofnhp.aft.org has no photo, the homepage may use a **public-domain** image from Wikimedia Commons, hot-linked from upload.wikimedia.org. First use: the Mark O. Hatfield U.S. Courthouse for the Kaiser injunction story.

**Why:** Requested by Joshua; a card without a photo breaks the news row. Public domain only: confirm the license on the file's Commons page and note it beside the photo in `_data/home.yml` (no attribution is legally required, but the note keeps the record).

**Narrows D-3** (hot-link from ofnhp.aft.org), which still applies to everything else.

**Watch:** The image describes a place, not an event. Its alt text says what the building is, never that something happened there unless the story says so.
