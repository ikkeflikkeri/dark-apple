<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Do and don't

| Rule | Why |
|---|---|
| Only the repository owner (`ikkeflikkeri`) merges pull requests. | The owner decides what ships. |
| Never commit a `.env` file. Add new variables to `.env.example` with a safe placeholder. | A pushed secret is public forever, even after deletion. |
| No AI attribution in commits or pull requests: no `Co-Authored-By` naming an AI, no "Generated with" line. | Commits are the human contributor's record. A hook and CI enforce this. |

## Imitate

Read one of these and copy its shape before writing a new one.

| Writing | Copy the shape of |
|---|---|
| Page (route `/`) | `src/app/page.tsx` |
| Root layout, fonts, metadata | `src/app/layout.tsx` |

## Verify before reporting done

Run these. Do not report work done on the basis that it looks right.

```
npm run lint
npx tsc --noEmit
[OWNER: how do you run tests? No test script or runner exists yet.]
```

CI does not exist yet, so these checks are the only gate.
