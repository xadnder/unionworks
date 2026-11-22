# OFNHP website (prototype)

A redesigned website for OFNHP (AFT Local 5017), built to test a member-first layout outside AFT's StateWeb platform. It runs on **GitHub Pages** for free.

Photos, documents and most pages stay on the live site, **ofnhp.aft.org**. This repo only adds the pages it redesigns (homepage, Report Unsafe Staffing, Find My Contract) and links to everything else.

- What the system is and how it fits together: **[BRIEF.md](BRIEF.md)**
- Why it's built this way: **[DECISIONS.md](DECISIONS.md)**

---

## Publish it (first time, about 10 minutes)

1. **Upload the files.** On your repo's GitHub page, click **Add file → Upload files**. Drag in *everything inside* the unzipped `ofnhp-site` folder: the files *and* the folders (`_data`, `_includes`, `_layouts`, `assets`, `contracts`, `staffing`). Don't drag the `ofnhp-site` folder itself, or everything ends up one level too deep. Click **Commit changes**.
   - Using git instead? From inside the unzipped folder: `git init`, `git add .`, `git commit -m "First version of the OFNHP site"`, `git branch -M main`, `git remote add origin <your repo's URL>`, `git push -u origin main`.
2. **Set the repo name in `_config.yml`.** Open `_config.yml` on GitHub, click the pencil, and change `baseurl: "/CHANGE-ME-TO-REPO-NAME"` to your repo's name with a slash in front, for example `baseurl: "/ofnhp-site"`. Commit.
   *Why:* GitHub serves the site at `https://<username>.github.io/<repo-name>/`. Without this, the styles and inner pages can't be found.
3. **Turn on Pages.** Repo → **Settings → Pages**. Under *Build and deployment*, set **Source: Deploy from a branch**, **Branch: main**, folder **/ (root)**. Save.
4. **Wait about a minute**, then refresh that Settings → Pages screen. It shows the site's address. Open it.
   - Progress and errors show in the repo's **Actions** tab (a green check means published).

> If the repo is private, GitHub Pages needs a paid plan. Make the repo public, or keep it private and preview locally (below).

---

## Change things

Nearly everything you'd want to change is a list in the **`_data/`** folder, not HTML. Open the file on GitHub, click the pencil, edit, commit. The site rebuilds in about a minute.

| To change… | Edit |
|---|---|
| Banner headline, sentence, or photo | `_data/site.yml` → `hero` |
| Phone, email, office addresses, social links | `_data/site.yml` |
| The four task buttons | `_data/home.yml` → `tasks` |
| Active campaigns (add, retire) | `_data/home.yml` → `campaigns` |
| Homepage news cards | `_data/home.yml` → `news` |
| Get Involved cards, Member resources list | `_data/home.yml` → `involved`, `resources` |
| Staffing forms (which form for which workplace) | `_data/staffing.yml` |
| Employers on Find My Contract | `_data/contracts.yml` |
| The main menu | `_data/nav.yml` |
| Colors, fonts, spacing | `assets/css/site.css` |

**YAML rules that trip people up** (these are the `.yml` files):

- Indentation is meaning. Use spaces, never tabs, and line items up with their neighbours.
- Put text in double quotes. If the text itself contains a double quote, use a curly one (“ ”) instead.
- A line starting with `#` is a note to humans and is ignored.
- If a change breaks the build, the **Actions** tab shows a red ✗ and the live site keeps the last good version. Fix the file or undo the commit.

**Using a photo:** on ofnhp.aft.org, open the photo in Files & Media (or right-click it on a page → *Copy image address*) and paste the address. Wide, landscape photos (1600 px+) work best for the banner. Always fill in `alt` for news photos: describe what's in the picture, not the file name.

---

## Preview on your own computer (optional)

You can skip this; GitHub builds the site for you. To preview before pushing (Linux/macOS, Ruby 3.x installed):

```
gem install jekyll
jekyll serve --baseurl ""
```

Then open http://localhost:4000.

---

## What's here

```
_config.yml          site settings (baseurl!)
_data/               all the words and links (edit these)
_layouts/            page frames: default (header/footer), page (inner pages)
_includes/           header, footer, menu, icons, link helper
assets/css/site.css  all styles, brand tokens at the top
assets/js/site.js    menu niceties only; menus work without it
index.html           homepage (layout only; words come from _data)
staffing/            Report Unsafe Staffing page
contracts/           Find My Contract page
404.html             "page not found", points back to the live site
```

May the builds run green.
