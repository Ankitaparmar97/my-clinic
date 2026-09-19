# ⚛️ React + 🟦 TypeScript + ⚡️ Vite

## Publish to GitHub Pages

The site must serve the compiled files from `dist/`. Serving the repository root
loads `/src/main.tsx` directly, which GitHub Pages sends as
`application/octet-stream` and browsers reject as a module.

1. In **GitHub → Settings → Pages**, change **Build and deployment → Source** to
   **GitHub Actions**. Keep the custom domain set to
   `bhavnagardental.pixelavenue.in`.
2. Commit and push `.github/workflows/publish-pages.yml` to `master`.
3. From your terminal, run `gh workflow run publish-pages.yml --ref master`.
   You can also run **Publish GitHub Pages** manually from the Actions tab.
4. When the workflow finishes, verify that the live page loads a
   `/assets/*.js` script rather than `/src/main.tsx`.

This workflow only runs when manually started. It builds with `npm ci` and
`npm run build`, then publishes `dist/` to Pages.

## 🛠️ Makefile Commands

The following make commands help streamline development tasks:

| Command             | Description                                                           |
| ------------------- | --------------------------------------------------------------------- |
| `make up`           | 🚀 Starts the Vite development server.                                |
| `make install`      | 📦 Install dependencies.                                              |
| `make build`        | 🏗️ Builds the project using `tsc` and `vite`.                         |
| `make type-check`   | 🧠 Runs TypeScript type-checking without emitting files.              |
| `make lint`         | 🧹 Lints the codebase with ESLint.                                    |
| `make lint-fix`     | 🛠️ Lints and auto-fixes issues in the codebase.                       |
| `make lint-naming`  | 📁 Checks only file and folder naming conventions using ESLint rules. |
| `make format`       | 🎨 Formats code using Prettier.                                       |
| `make format-check` | 🔎 Checks if code formatting matches Prettier rules.                  |
| `make check`        | ✅ Runs `type-check`, `lint`, `format:check`, and `build`.            |
| `make clean`        | 🧼 Cleans the `dist` folder and `.tsbuildinfo` files.                 |
| `make tidy`         | 🧹 Runs `lint-fix`, `format`, `clean`, and `type-check` sequentially. |
