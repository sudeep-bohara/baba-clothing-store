# Security — Baba Clothing Concept

**Status:** rules for the Stage 1 concept, with the Stage 2 requirements the PRD defines.

## 1. What this repository is

A static design concept. It has no server, database, authentication, payment path or analytics.
That removes most attack surface, but the rules below still apply so the codebase can grow into
Stage 2 without inheriting debt.

## 2. Repository rules

- No credentials, API keys, tokens, private keys or `.env` files with real values are committed.
  Only `.env.example` with empty placeholders is tracked.
- `.gitignore` covers `node_modules`, `.next`, build output, local env files and editor state.
- Keep the repository private unless the brand owner authorizes otherwise.
- Grant collaborators the minimum permission their role needs.
- Do not commit private business information, owner correspondence or unapproved assets.

## 3. Application rules (as implemented)

- No `dangerouslySetInnerHTML` anywhere; no untrusted HTML is rendered.
- All catalogue and copy content is authored in this repository, not user-supplied. If Stage 2
  accepts user input (search terms, form fields), it must be validated and length-limited
  server-side and escaped on output.
- `localStorage` holds only sample bag lines. Each line is re-validated against the catalogue on
  read; unknown slugs, malformed entries and non-numeric quantities are discarded, and
  quantities are clamped. Storage failures (private modes, quota) are caught so the bag still
  works in memory.
- The only outbound links are the verified Instagram account and the skip-to-content anchor; all
  `target="_blank"` links carry `rel="noreferrer noopener"`.
- Third-party scripts: none. Fonts are self-hosted at build time, so browsing triggers no request
  to Google or any font CDN.
- Dependencies are pinned with a lockfile and kept minimal (Next, React, Tailwind, Motion,
  Lucide). Run `npm audit` before proposing any dependency change.

## 4. Dependency and build hygiene

```bash
npm ci        # reproducible install from the lockfile
npm audit     # review advisories before releases
npm run build # fails on type or lint errors that block the build
```

Delete unused packages instead of leaving them installed. Do not add a dependency for something
that a few lines of local code can do.

## 5. Stage 2 requirements (not implemented)

- HTTPS everywhere, with secure response headers and a strict Content-Security-Policy.
- Authentication, if accounts are added, through a trusted provider with secure session handling.
- Authorization checks on every protected operation, not just hidden UI.
- Server-side validation for all input; least-privilege database credentials.
- Secrets only in server-side environment variables, never in `NEXT_PUBLIC_*`.
- Payment processing only through an established gateway, supported in the operating market and
  approved by the owner. Never store card numbers, CVV or raw payment credentials. Verify payment
  status server-side, validate webhook signatures and use idempotency keys.
- Logging that excludes personal and payment data.
- Backups, a documented restore test and an incident response process.

## 6. Reporting

This concept has no users and no data, so there is no vulnerability disclosure channel of its
own. Report issues through the repository's private security advisory feature, or to the
maintainer directly. Do not open a public issue for a suspected vulnerability.

Once Baba Clothing operates a real store, the owner must publish a monitored security contact
and a documented response process.
