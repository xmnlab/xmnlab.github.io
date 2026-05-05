# Translating the site

This site uses MkDocs with [`mkdocs-static-i18n`](https://ultrabug.github.io/mkdocs-static-i18n/) for static, reviewable translations.

## Current language targets

- English (`en`) — default, built at `/`
- Spanish (`es`) — built at `/es/`
- Portuguese (`pt`) — built at `/pt/`
- French (`fr`) — built at `/fr/`
- Italian (`it`) — built at `/it/`

When a translated page is missing, the plugin falls back to the English source and the theme shows a notice.

## Add or update a translation

The project uses the suffix structure. To translate the home page, copy the English file and translate it:

```bash
cp docs/index.md docs/index.es.md   # Spanish example
```

Then edit the copied file. Keep the HTML structure, ids, form fields, links, and image paths intact, and translate only the visible text and metadata.

For other languages, use the configured locale suffix:

```bash
cp docs/index.md docs/index.pt.md
cp docs/index.md docs/index.fr.md
cp docs/index.md docs/index.it.md
```

## Add another language

1. Add a new entry under `plugins.i18n.languages` in `mkdocs.yml`.
2. Add the same locale under `extra.languages` so it appears in the language switcher.
3. Add UI labels under `extra.ui.<locale>`.
4. Create translated Markdown files such as `docs/index.de.md`.

## About automatic translation

Automatic online translation is intentionally not run during the GitHub Pages build. Free web translation services and unofficial plugins can be rate-limited, change behavior, or send page content to third-party services during CI.

Recommended workflow:

1. Generate a draft translation with your preferred tool outside CI.
2. Save it as `docs/index.<locale>.md`.
3. Review names, testimonials, form labels, calls to action, and links manually.
4. Run `mkdocs serve` or `mkdocs build --strict` before publishing.

If you still want a runtime machine-translation option, evaluate a plugin such as `mkdocs-google-translate` separately and enable it only after confirming the privacy and reliability trade-offs are acceptable.
