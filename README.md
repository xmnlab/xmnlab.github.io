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
mkdocs build --strict
```

The generated site is written to `site/` and deployed to GitHub Pages by `.github/workflows/static.yml`.

## Project structure

- `mkdocs.yml` — site configuration, navigation, languages, and UI labels
- `docs/index.md` — landing page content
- `docs/assets/` — CSS and JavaScript
- `docs/images/` — published images
- `theme/` — custom MkDocs/Jinja templates and partials
- `TRANSLATING.md` — translation workflow

## Translations

The site is configured for English, Spanish, Portuguese, French, and Italian via `mkdocs-static-i18n`. Missing translated pages fall back to English. See `TRANSLATING.md` for adding or extending languages.
