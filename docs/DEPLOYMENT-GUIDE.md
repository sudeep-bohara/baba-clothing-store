# Deployment Guide — Baba Clothing Concept

**Status:** how to run and preview the concept. Production deployment is not authorized.

## 1. Local development

```bash
npm ci
npm run dev        # http://localhost:3000
npm run build      # static export of every route
npm run lint
npm run typecheck
```

Requires Node.js 20 or newer. There are no runtime environment variables in Stage 1; see
[.env.example](../.env.example) for the two optional build-time values.

## 2. Configuration

| Variable | Default | Effect |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | unset | Absolute origin for canonical URLs, Open Graph data, sitemap and robots. When unset, a Vercel deployment uses its own `VERCEL_URL` over HTTPS; anything else falls back to `http://localhost:3000` |
| `NEXT_PUBLIC_ALLOW_INDEXING` | `false` | When `true`, `robots` allows crawling and page metadata switches to `index, follow` |

Both are public by design — they contain no secrets. Never place a real credential in a
`NEXT_PUBLIC_*` variable; anything with that prefix ships to the browser.

## 3. Preview deployment

1. Import the repository into Vercel (or any static host) and keep the framework preset as
   Next.js.
2. Leave `NEXT_PUBLIC_SITE_URL` unset to inherit the deployment's own `VERCEL_URL`, or set it to a
   stable preview origin so canonical URLs and the sitemap survive per-deployment hostnames.
3. Leave `NEXT_PUBLIC_ALLOW_INDEXING` unset (`false`). The concept must not compete with the
   brand's own site in search, and a preview must never read as the official store.
4. Confirm the concept banner, footer disclaimer and `/terms` draft notice are present on the
   deployed build.
5. Check the Open Graph card by pasting a page URL into a link preview inspector.

Vercel deployment protection, if enabled, blocks automated checks. Either generate a protection
bypass secret and use it as an `x-vercel-protection-bypass` header, or scope protection to
production only.

## 4. Rollback

Deployments are immutable. To roll back, promote the previous successful deployment in the
hosting dashboard, or redeploy the earlier commit:

```bash
git revert --no-edit <commit>
git push origin <branch>
```

Static output has no migrations or state, so a rollback is always safe.

## 5. Production launch — requires explicit authorization

Do not perform any of these until the brand owner approves in writing:

1. Replace demonstration photography and copy with owner-supplied assets
   (see [CONTENT-AND-ASSET-GUIDE.md](CONTENT-AND-ASSET-GUIDE.md)).
2. Confirm the domain and that the owner controls the hosting and DNS accounts.
3. Publish reviewed privacy policy and terms, and the shipping, returns, payment and
   cancellation policies that apply.
4. Decide whether Stage 2 (payments, inventory, accounts) is in scope; if so, plan the backend
   and its security review first, per [SECURITY.md](SECURITY.md).
5. Only then set `NEXT_PUBLIC_ALLOW_INDEXING=true`, point `NEXT_PUBLIC_SITE_URL` at the real
   domain, and remove the concept notices.
6. Verify HTTPS, response headers, metadata, social previews and that no development content is
   reachable.

## 6. Ownership

Domain, hosting account, repository and access belong to the brand owner. Access should be least
privilege, and operational responsibility — who deploys, who monitors, who responds to incidents
— must be agreed before launch.
