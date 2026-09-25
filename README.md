# IPA Archive — GitHub Pages + Codespaces-ready App Collection

A static web-app example for browsing 20 historical iOS app metadata records.

## Run in GitHub Codespaces

```sh
python3 -m http.server 8080
```

Then open the forwarded port.

## GitHub Pages

This is a static site: publish the repository root (or `/app-collection`) with GitHub Pages.

## Contents

- `index.html` — app catalog UI
- `styles.css` — responsive styling
- `app.js` — search and sorting
- `apps.json` — catalog metadata
- `projects/` — 20 per-app project structures
- `LICENSE` — project license
- `.gitignore` — common ignores
- `serve.sh` — local static server helper

The package intentionally does **not** contain IPA binaries, copyrighted app assets, extracted executables, or proprietary source code. The catalog records are metadata only.
