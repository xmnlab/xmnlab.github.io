# Ivan Ogasawara website

Static personal landing page built with [MkDocs](https://www.mkdocs.org/) and a small custom Jinja theme.

## Local development

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
mkdocs serve
```

Build the production site:

```bash
makim pages.build
```

Preview locally with browser auto-open and MkDocs live reload:

```bash
makim pages.preview
```

Run a strict validation build without leaving generated output:

```bash
makim pages.check
```

The generated site is written to `site/` and deployed to GitHub Pages by `.github/workflows/static.yml`.

## Project structure

- `.makim.yaml` — local task runner commands for build, preview, check, and clean
- `mkdocs.yml` — site configuration, navigation, languages, and UI labels
- `docs/index.md` — landing page content
- `docs/blog/index.md` — blog landing page and manually curated post list
- `docs/blog/posts/` — published Markdown blog posts
- `docs/blog/drafts/` — draft posts excluded from production builds
- `docs/assets/` — CSS and JavaScript
- `docs/images/` — published images
- `theme/` — custom MkDocs/Jinja templates and partials
- `content-templates/blog-post.md` — starter template for new posts
- `TRANSLATING.md` — translation workflow

## Translations

The site is configured for English, Spanish, and Portuguese via `mkdocs-static-i18n`. Missing translated pages fall back to English. See `TRANSLATING.md` for adding or extending languages.

## Blog posts

Create new posts as folders with `index` files:

```bash
cp -R content-templates/blog-post-folder docs/blog/posts/YYYY-slug
```

Edit the front matter and content in:

- `docs/blog/posts/YYYY-slug/index.md` — English
- `docs/blog/posts/YYYY-slug/index.es.md` — Spanish
- `docs/blog/posts/YYYY-slug/index.pt.md` — Portuguese

Then add a link/card to `docs/blog/index.md`, `docs/blog/index.es.md`, and `docs/blog/index.pt.md`. Drafts can live under `docs/blog/drafts/`; production builds exclude that folder.

The language switcher keeps readers on the equivalent blog page/post when a translated or fallback version exists.
