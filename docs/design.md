# natekramber.com design

Status: **draft 1.** The owner approves draft 1 with the merge of PR-2. No site pull request starts before that merge. Written 2026-09-12 in ASD-STE100.

Draft 1 applies the roadmap answers D-19 to D-43. It supersedes draft 0, which held Phase 0 alone.

2026-09-12 correction pass: PR-4 follows D-46 to D-50. A Lighthouse 13 script replaces Lighthouse CI, and the fixtures plant a heavy script and a duplicate id.
2026-09-12 correction pass (Session 5): PR-1 to PR-4 read merged, and PR-5 names the project and the account of D-51 and D-52.
2026-09-12 correction pass (Session 6): PR-5 and M-1 follow D-53, D-54, D-56 to D-59, D-62, and D-66 to D-68. PR-6 follows D-63. PR-14 applies D-60, and PR-15 applies D-57, D-64, and D-65. The external facts add the research of PR-5.
2026-09-13 correction pass (Session 6): PR-14 no longer waits for a move of the repository (D-69).
2026-09-13 correction pass (Session 6): PR-16 keeps the preview server of the checks in the foreground (D-70), and it comes before PR-14.
2026-09-13 correction pass (Session 7): PR-14 and PR-16 read merged, and PR-15 follows D-71 to D-74.
2026-09-14 correction pass (Sessions 8 and 9): PR-15 and PR-5 read merged, PR-5 follows D-75 to D-81, and M-1 passed (D-80). The external facts add the research of PR-5 and the result of the setup run. The gate of PR-5 marks its ruleset order refuted, because the check joined the ruleset before the merge (D-81).
2026-09-14 correction pass (Session 10): PR-6 follows D-82 to D-85. The session creates the environment and the custom domains, and the owner makes two DNS visits. The external facts add the research of PR-6.
2026-09-14 correction pass (Session 11): PR-6 reads merged, and D-86 records the second DNS visit.
2026-09-14 correction pass (Session 12): M-2 passed (D-88), with the log link of D-87. PR-13 no longer waits for M-2, and the external facts add the research of M-2.
2026-09-14 correction pass (Session 13): PR-7 follows D-89 to D-92, and D-91 closes OQ-5. The external facts add the research of PR-7.
2026-09-14 correction pass (Session 14): PR-7 reads merged, and the Phase 1 gate reads passed. Section 6 closes OQ-5, and D-93 sets how the owner gets a preview address.
2026-09-14 correction pass (Session 15): PR-8 follows D-94 to D-102. The external facts add the research of PR-8.
2026-09-14 correction pass (Session 16): PR-8 reads merged, and the Phase 2 gate reads passed.
2026-09-14 correction pass (Session 17): PR-9 reads merged. PR-10 follows D-111 to D-119, and D-112 changes the fixture build of PR-9. The external facts add the research of PR-10.
2026-09-14 correction pass (Session 18): PR-10 reads merged. The external facts add the `GROUPED` certificates of both custom domains.
2026-09-15 correction pass (Session 19): PR-11 follows D-121 to D-128. D-121 and D-122 add the project name to the screen reader name of each card link, and D-128 limits D-117 to portrait screens. The external facts add the research of PR-11.
2026-09-16 correction pass (Session 20): PR-11 reads merged, and PR-12 follows D-130 to D-132. The external facts add the research of PR-12.
2026-09-16 correction pass (Session 21): PR-12 reads merged, and PR-17 follows D-133 to D-138. PR-17 removes the highlights, the disclosure, and the Links section.
2026-09-16 correction pass (Session 22): PR-17 reads merged, and the Phase 3 gate reads passed. The external facts add the image research of PR-17.
2026-09-16 correction pass (Session 23): PR-13 follows D-139 to D-141. D-141 adds a command to its scope. The external facts add the log research of PR-13.

Owner decisions live in `docs/decisions.md` (D-#). Open questions live in `docs/questions.md` (OQ-#). The `design-doc-style` skill holds the template of this file (D-10).

## External facts

Each fact below has a source and the date the session read it. Verify a fact again before a pull request depends on it.

- WCAG 2.2 is the W3C Recommendation of 2024-12-12. Source: https://www.w3.org/TR/WCAG22/, read 2026-09-12.
- Core Web Vitals "good": LCP 2.5 s, INP 200 ms, CLS 0.1, at the 75th percentile. Source: https://web.dev/articles/vitals, read 2026-09-12.
- Baseline "Widely available" means 30 months after the date that all core browsers support a feature. Source: https://web.dev/baseline, read 2026-09-12.
- Baseline Widely available on 2026-09-12: container size queries, `:has()`, CSS nesting, subgrid, and the `dvh`, `svh`, and `lvh` units. Source: https://api.webstatus.dev/v1/features/.
- Baseline Newly available on 2026-09-12: `light-dark()`, `text-wrap: balance`, `@starting-style`, the Popover API, and same-document View Transitions. Scroll-driven animations and anchor positioning are Limited.
- Astro 7.0 came out on 2026-06-22. The latest version on 2026-09-12 is 7.3.2, and it needs Node 22.12.0 or newer. Sources: https://astro.build/blog/astro-7/ and https://docs.astro.build/en/install-and-setup/.
- Firebase recommends classic Hosting, not App Hosting, for a static site. Source: https://firebase.google.com/docs/app-hosting/product-comparison, read 2026-09-12.
- The Spark plan of Firebase Hosting includes 10 GB of storage, 360 MB of transfer each day, a custom domain, and SSL. Source: https://firebase.google.com/pricing, read 2026-09-12.
- A custom apex domain on Firebase Hosting needs a TXT record and an A record, and the certificate can take up to 24 hours. Source: https://firebase.google.com/docs/hosting/custom-domain, read 2026-09-12.
- GoDaddy does not permit a CNAME record at the apex. Source: https://www.godaddy.com/help/add-a-cname-record-19236, read 2026-09-12.
- A preview channel expires after 7 days by default. The official GitHub action for previews requires a JSON service account key. Sources: https://firebase.google.com/docs/hosting/manage-hosting-resources and https://github.com/FirebaseExtended/action-hosting-deploy, read 2026-09-12.
- Hosting request logs can go to Cloud Logging, with the request URL, the referrer, and the country of each request. The plan that this link needs is unverified. Source: https://firebase.google.com/docs/hosting/web-request-logs-and-metrics, read 2026-09-12. Resolved 2026-09-14: the Spark plan with no billing account gives the link (D-88).
- A Google Cloud budget sends alerts but does not cap spend. Source: https://docs.cloud.google.com/billing/docs/how-to/budgets, read 2026-09-12.
- Playwright launches Chromium with the sandbox off by default (`chromiumSandbox` defaults to `false`). Source: https://playwright.dev/docs/api/class-browsertype, read 2026-09-12.
- Lighthouse CI 0.15.1 added 12 npm audit advisories, 7 of them high, and Lighthouse 13.4.1 alone audits with 0 (D-50). Source: `npm audit`, run 2026-09-12.
- The Hosting quota page gives the Spark plan 10 GB of transfer each month, and the pricing page gives 360 MB each day. Sources: https://firebase.google.com/docs/hosting/usage-quotas-pricing and https://firebase.google.com/pricing, read 2026-09-12.
- firebase-tools 15.30.0 came out on 2026-09-09 and needs Node 20 or newer. It brings 674 packages, 257 MB, and 9 moderate npm audit advisories. Sources: https://registry.npmjs.org/firebase-tools and `npm audit` in a scratch directory, run 2026-09-12.
- The Firebase CLI uses Application Default Credentials in CI. Public reports show deploys through Workload Identity Federation with service account impersonation, and version 15.22.3 fixed a break of 15.22.2. Direct federated access with no service account is unverified. Sources: https://firebase.google.com/docs/cli and https://github.com/firebase/firebase-tools/issues/10716, read 2026-09-12.
- `roles/firebasehosting.admin` permits both a preview channel deploy and a live release through `firebasehosting.sites.update`. Hosting has no IAM policy on one site. Sources: https://cloud.google.com/iam/docs/roles-permissions/firebasehosting and https://firebase.google.com/docs/reference/hosting/rest/v1beta1/projects.sites, read 2026-09-12.
- The Firebase docs ask for API Keys Viewer (`roles/serviceusage.apiKeysViewer`) for a CLI deploy. The Hosting deploy code of firebase-tools 15.30.0 calls no API Keys endpoint. Source: https://firebase.google.com/docs/projects/iam/roles-predefined-product, read 2026-09-12.
- A preview channel lasts 7 days by default and 30 days at most. No Firebase doc gives the maximum channel count of a site. Source: https://firebase.google.com/docs/hosting/manage-hosting-resources, read 2026-09-12.
- Google Cloud recommends a condition on the numeric GitHub ids `repository_id` and `repository_owner_id`, because a deleted name can go to a new owner. Source: https://docs.cloud.google.com/iam/docs/workload-identity-federation-with-deployment-pipelines, read 2026-09-12.
- A repository that GitHub created after 2026-07-15 gets an immutable OIDC `sub` claim with the owner id and the repository id. Sources: https://docs.github.com/en/actions/reference/security/oidc and https://github.blog/changelog/2026-04-23-immutable-subject-claims-for-github-actions-oidc-tokens/, read 2026-09-12.
- `google-github-actions/auth` v3.0.0 (commit `7c6bc770dae815cd3e89ee6cdf493a5fab2cc093`) runs on Node 24, and its credentials last 5 minutes. Sources: https://github.com/google-github-actions/auth and the GitHub API, read 2026-09-12.
- A pull request from a fork gets a read-only token, so its job gets no `id-token: write` permission. Sources: https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows and https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax, read 2026-09-12.
- An administrator can bypass the protection rules of an environment by default. A workflow that names a missing environment creates it with no protection. Sources: https://docs.github.com/en/actions/reference/workflows-and-actions/deployments-and-environments and https://docs.github.com/en/actions/how-tos/deploy/configure-and-manage-deployments/manage-environments, read 2026-09-12.
- The setting "Require actions to be pinned to a full-length commit SHA" refuses each action with no full SHA, and a reusable workflow can still use a tag. Source: https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository, read 2026-09-12.
- Astro 7 inlines a stylesheet under 4 KB by default (`build.inlineStylesheets: 'auto'`). Source: https://docs.astro.build/en/reference/configuration-reference/#buildinlinestylesheets, read 2026-09-12.
- With `build.inlineStylesheets: 'never'`, Astro sends every project style in an external stylesheet. A `src/pages/404.astro` file builds to `404.html`. Sources: https://docs.astro.build/en/reference/configuration-reference/#buildinlinestylesheets and https://docs.astro.build/en/basics/astro-pages/, read 2026-09-13.
- `astro preview` of Astro 7.3.2 sends `dist/404.html` with the status 404 for a missing address. Source: the installed `dist/core/preview/vite-plugin-astro-preview.js`, read 2026-09-13.
- With `--server-root`, linkinator 8.1.0 reads each location as a glob inside the server root. Given `dist` and `dist/404.html` with no server root, it reported the stylesheet and the home link as broken. Sources: the installed `build/src/options.js` and a local run, 2026-09-13.
- A CSP in a `meta` element ignores `frame-ancestors`. Source: https://www.w3.org/TR/CSP3/, read 2026-09-12.
- The five security audits in Best Practices of Lighthouse 13.4.1 are informative and do not change the score. A CSP block still fails the scored audit `errors-in-console`. Source: the default config of the installed Lighthouse 13.4.1, read 2026-09-12.
- Firebase Hosting overwrites HSTS on `*.web.app`, and a custom domain serves the configured value. Source: https://firebase.google.com/docs/hosting/full-config, read 2026-09-12.
- An HSTS preload removal takes 6 to 12 weeks to reach most Chrome users. Source: https://hstspreload.org/removal/, read 2026-09-12.
- Firebase cannot issue a certificate while other A, AAAA, or CNAME records stay on the host. Source: https://firebase.google.com/docs/hosting/custom-domain, read 2026-09-12.
- Lighthouse 13.4.1 scores the `agentic-browsing` category with `agent-accessibility-tree`, `cumulative-layout-shift`, `llms-txt`, and `webmcp-schema-validity`, and two more WebMCP audits are informative. A 404 for `/llms.txt` makes `llms-txt` not applicable, and a served file with no heading, no link, or under 50 characters fails it. Source: the installed Lighthouse 13.4.1, `core/config/default-config.js` and `core/audits/agentic/llms-txt.js`, read 2026-09-13.
- firebase-tools 15.30.0 is still the latest release, and its `engines.node` accepts Node 20, 22, and 24. Source: https://registry.npmjs.org/firebase-tools, read 2026-09-13.
- `firebase hosting:channel:deploy` creates a missing channel, and each deploy with `--expires` restarts the lifetime. The `--expires` unit `m` means minutes, and `w` fails. Source: firebase-tools 15.30.0 `lib/commands/hosting-channel-deploy.js` and `lib/hosting/expireUtils.js`, read 2026-09-13.
- In a non-interactive shell, `firebase hosting:channel:delete` without `--force` deletes nothing and exits with code 0. With `--force`, a missing channel gives HTTP 404 and exit code 1. Source: firebase-tools 15.30.0 `lib/commands/hosting-channel-delete.js`, read 2026-09-13.
- The Firebase CLI finds `firebase.json` in the current directory or a parent. `npm exec --prefix deploy` runs in the current directory, not in `deploy/`. Sources: firebase-tools 15.30.0 `lib/detectProjectRoot.js` and npm 10.9.8 `libnpmexec/lib/run-script.js`, read 2026-09-13.
- The Firebase CLI reads a `GOOGLE_APPLICATION_CREDENTIALS` file of type `external_account`. A channel deploy also syncs the authorized domains of Identity Toolkit, and `--no-authorized-domains` skips that step. Source: firebase-tools 15.30.0 `lib/requireAuth.js` and `lib/commands/hosting-channel-deploy.js`, read 2026-09-13.
- A Hosting deploy writes `.firebase/hosting.<site>.cache` in the current directory. Source: firebase-tools 15.30.0 `lib/deploy/hosting/hashcache.js`, read 2026-09-13.
- The default Hosting site of a project usually has the project id. The Management API permits `PROJECT_ID-` and five characters when another project has the name. Sources: https://firebase.google.com/docs/hosting/multisites and the Firebase Management API discovery document, read 2026-09-13.
- Firebase Hosting applies the header rules that match, in their order. It sends `max-age=3600` for a static file with no rule, and a new release clears the CDN cache. Sources: https://firebase.google.com/docs/hosting/full-config and https://firebase.google.com/docs/hosting/manage-cache, read 2026-09-13.
- A job that an `if:` condition skips reports "Success" and does not block a merge as a required check. A job that skips because a needed job failed can also let a merge through. Sources: https://docs.github.com/en/actions/how-tos/write-workflows/choose-when-workflows-run/control-jobs-with-conditions and https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/troubleshooting-required-status-checks, read 2026-09-13.
- GitHub treats a Dependabot pull request like a fork pull request. No GitHub doc says whether its job can get `id-token: write`. Source: https://docs.github.com/en/code-security/reference/supply-chain-security/troubleshoot-dependabot/dependabot-on-actions, read 2026-09-13.
- `pull-requests: write` alone permits a job to create and edit a pull request comment. Source: https://docs.github.com/en/rest/authentication/permissions-required-for-github-apps, read 2026-09-13.
- `google-github-actions/auth` v3.0.0 (commit `7c6bc770dae815cd3e89ee6cdf493a5fab2cc093`) is still the latest version, and its input `workload_identity_provider` needs `service_account`. Source: https://github.com/google-github-actions/auth, read 2026-09-13.
- The README of the auth action gives the issuer `https://token.actions.githubusercontent.com`, and the Google guide gives the same URL with a trailing slash. M-1 tests the README form. Sources: https://github.com/google-github-actions/auth/blob/v3.0.0/README.md and https://docs.cloud.google.com/iam/docs/workload-identity-federation-with-deployment-pipelines, read 2026-09-13.
- Google asks for one provider in each pool, a condition on the numeric ids, and the project number in a `principalSet` member. Sources: https://docs.cloud.google.com/iam/docs/best-practices-for-using-workload-identity-federation and the guide above, read 2026-09-13.
- No primary source confirms that a project with no billing account can enable `iamcredentials.googleapis.com` and `sts.googleapis.com`. The Google guide asks the reader to verify the billing account first. Source: the guide above, read 2026-09-13.
- On 2026-09-14, the projects `natekramber-preview` and `natekramber-prod` enabled `iam`, `iamcredentials`, `sts`, `cloudresourcemanager`, `firebase`, and `firebasehosting` with no billing account. `firebase projects:addfirebase` returned no 403, and each default Hosting site got the project id. Source: the setup run of `docs/deploy.md`, 2026-09-14.
- Browsers ignore `X-Frame-Options` when an enforced CSP has `frame-ancestors`. Source: https://www.w3.org/TR/CSP3/, section 6.4.2.2, read 2026-09-13.
- `default-src 'none'` also blocks fonts and a web app manifest. A self-hosted font then needs `font-src 'self'`, which revises D-57. Source: https://www.w3.org/TR/CSP3/, section 6.8.3, read 2026-09-13.
- firebase-tools 15.30.0 has no command for a custom domain. The Hosting API v1beta1 creates one with `projects.sites.customDomains.create`, and `redirectTarget` makes the domain answer with a 301. Sources: firebase-tools 15.30.0 `lib/commands/index.js` and the Hosting API v1beta1 discovery document, read 2026-09-14.
- A call to the Hosting API with a user token returns 403 without the header `x-goog-user-project`. Sources: https://docs.cloud.google.com/docs/authentication/rest and a local call, 2026-09-14.
- For `natekramber.com`, the Hosting API asked for the A record `199.36.158.100` and the TXT record `hosting-site=natekramber-prod`. For `www`, it asked for a CNAME to `natekramber-prod.web.app`. Each domain also got a DNS challenge at `_acme-challenge`. Source: the Hosting API v1beta1, read 2026-09-14.
- `firebase deploy --only hosting` releases the new version to the live channel at once. With `--json`, the output names the version as `sites/SITE/versions/ID`. Source: firebase-tools 15.30.0 `lib/deploy/hosting/release.js` and `lib/command.js`, read 2026-09-14.
- firebase-tools 15.30.0 has no rollback command. `hosting:clone` with an earlier version of the same site releases that version again, and the release history of the console has a "Roll back" action. Sources: firebase-tools 15.30.0 `lib/commands/hosting-clone.js` and https://firebase.google.com/docs/hosting/manage-hosting-resources, read 2026-09-14.
- A browser that stored an HSTS policy gives no way past a certificate error on that host. Source: RFC 6797, sections 8.4 and 12.1 (https://www.rfc-editor.org/rfc/rfc6797), read 2026-09-14.
- The A records of `natekramber.com` serve a GoDaddy Website Builder page, and GoDaddy documents the parking addresses `3.33.130.190` and `15.197.148.33`. Sources: https://www.godaddy.com/help/park-a-domain-registered-with-godaddy-23936 and `curl`, read 2026-09-14.
- No REST field creates an environment with the administrator bypass off, but the read response of the environment holds `can_admins_bypass`. Sources: the GitHub REST API description and `gh api repos/nkramber/portfolio/environments/production`, read 2026-09-14.
- A job that names an environment gets the OIDC subject `repo:OWNER@OWNER_ID/REPO@REPO_ID:environment:NAME` for a push and for a run by hand. The branch rule of the environment fails a job on a refused ref. Sources: https://docs.github.com/en/actions/reference/security/oidc and https://docs.github.com/en/actions/reference/workflows-and-actions/deployments-and-environments, read 2026-09-14.
- Only `CERT_ACTIVE` and `CERT_EXPIRING_SOON` give a custom domain its SSL coverage. `CERT_PROPAGATING` means that Hosting has the certificate and sends it to its CDN. A `TEMPORARY` certificate covers a domain until Hosting makes a more permanent certificate. `HOST_MISMATCH` means that the domain points to a host other than Hosting. Source: the Hosting API v1beta1 discovery document, revision 20260830, read 2026-09-14.
- Both certificates of PR-6 went from `CERT_PROPAGATING` to `CERT_ACTIVE` while the A records still pointed to GoDaddy. So the certificate step needs no change of host. Source: the Hosting API v1beta1, read at 15:54 and 15:58 UTC on 2026-09-14.
- GoDaddy locks the A records of a domain that connects to another site. The Remove action above the DNS records table removes that connection. Source: https://www.godaddy.com/help/remove-a-connection-from-my-domain-32079, read 2026-09-14.
- The HSTS preload list holds neither `natekramber.com` nor `www.natekramber.com`, so the `preload` directive of the GoDaddy header had no effect. Source: https://hstspreload.org/api/v2/status, read 2026-09-14.
- `SiteConfig.cloudLoggingEnabled` of the Hosting API v1beta1 controls the request logs of a site, and `sites.updateConfig` sets it. A call with no `updateMask` changes `max_versions` alone. Source: the Hosting API v1beta1 discovery document, revision 20260830, read 2026-09-14.
- A Hosting request log entry has the resource type `firebase_domain` and the log `webrequests`. Its `httpRequest` holds `requestUrl`, `referer`, `remoteIp`, `status`, and `userAgent`. Its `jsonPayload` holds `remoteIpCountry` and `remoteIpCity`. An entry usually shows within 30 minutes. Source: https://firebase.google.com/docs/hosting/web-request-logs-and-metrics, read 2026-09-14.
- Cloud Logging takes in 50 GiB for each project each month at no cost, and the `_Default` bucket keeps logs for 30 days. Sources: https://cloud.google.com/products/observability/pricing and https://docs.cloud.google.com/logging/quotas, read 2026-09-14.
- No primary source says whether the Hosting log link needs a billing account. The Firebase FAQ says that Google Cloud features are not available on the Spark plan. The Firebase help for the link names only a free 50 GB and an optional Blaze upgrade. Sources: https://firebase.google.com/support/faq and https://support.google.com/firebase/answer/9748636, read 2026-09-14.
- A Cloud Billing account on a Spark project upgrades the project to the Blaze plan at once. Source: https://firebase.google.com/docs/projects/billing/firebase-pricing-plans, read 2026-09-14.
- On 2026-09-14, the Hosting log link worked on `natekramber-prod` with no billing account. A test visit showed in Cloud Logging about 11 minutes after the request. Source: M-2 (D-88).
- Baseline Widely available on 2026-09-14: `font-display`, WOFF2, `unicode-range`, `font-variation-settings`, `clamp()`, `oklch()`, `color-mix()`, `:focus-visible`, `text-underline-offset`, and `rel=preload`. Sources: https://api.webstatus.dev/v1/features and https://cdn.jsdelivr.net/npm/web-features/data.json, read 2026-09-14.
- `light-dark()` is Baseline Newly available. `text-wrap: pretty` and the descriptors `ascent-override`, `descent-override`, and `line-gap-override` are Limited. Source: https://api.webstatus.dev/v1/features, read 2026-09-14.
- `font-src` also governs a font preload. A same-origin font preload still needs `crossorigin`, or the browser ignores the preload. Sources: https://www.w3.org/TR/CSP3/ and https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/rel/preload, read 2026-09-14.
- `font-display: optional` waits 100 ms at most and never swaps, so it causes no layout shift. When the font arrives late, that page view keeps the fallback font. Source: https://web.dev/articles/font-best-practices, read 2026-09-14.
- In Lighthouse 13.4.1, `font-display-insight` fails only on `block`, `fallback`, or `auto`, and its weight is 0. A font that the CSP blocks fails `inspector-issues` in Best Practices. Source: the installed `lighthouse` package, read 2026-09-14.
- A link that differs from its text by color alone fails WCAG 1.4.1. An underline on hover or focus alone does not fix it. Source: https://www.w3.org/WAI/WCAG22/Techniques/failures/F73, read 2026-09-14.
- The Latin variable WOFF2 files of Instrument Sans and Martian Mono weigh 53,648 bytes together. Atkinson Hyperlegible Next and Mono weigh 51,748 bytes, and IBM Plex Sans and IBM Plex Mono weigh 78,288 bytes. Sources: Fontsource 5.3.0 on https://cdn.jsdelivr.net and IBM Plex on https://www.npmjs.com, read 2026-09-14.
- Geist and Geist Mono weigh 52,528 bytes, and Inter and JetBrains Mono weigh 88,660 bytes. Every font family above uses the SIL Open Font License 1.1. Sources: the same packages and the GitHub license API, read 2026-09-14.
- Desktop Chromium zooms a page from 25 to 500 percent, and desktop Firefox zooms up to 500 percent. Firefox on Android stops at 400 percent. Sources: `third_party/blink/common/page/page_zoom.cc` of Chromium and `modules/libpref/init/StaticPrefList.yaml` of Firefox, read 2026-09-14.
- WCAG 1.4.4 passes when text can grow to 200 percent through at least one text scaling mechanism of the browser. Failure F94 is text that viewport units size. Source: https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html, read 2026-09-14.
- `text-decoration-thickness` is Baseline Widely available since 2023-09-04, and `overflow-wrap` since 2021-04-02. Sources: https://cdn.jsdelivr.net/npm/web-features/data.json and https://api.webstatus.dev/v1/features, read 2026-09-14.
- Astro 7.3.2 has a fonts API, but its `Font` component writes a `style` element, and the CSP of D-57 blocks that element. Source: the installed `astro/components/Font.astro`, read 2026-09-14.
- `hyphens: auto` is Baseline Widely available since 2026-03-18, `overflow-wrap: anywhere` since 2024-09-14, and `scroll-margin-block` since 2024-03-20. Source: web-features 3.38.0 (https://cdn.jsdelivr.net/npm/web-features/data.json), read 2026-09-14.
- `overflow-wrap: break-word` does not narrow the minimum width of an inline-block, but `anywhere` does. Source: the responsive audit of PR-7 in Chromium 153, 2026-09-14.
- An `em` in a media query counts the initial font size of the browser, never a declaration of the page. Source: https://www.w3.org/TR/mediaqueries-4/, section 1.3, read 2026-09-14.
- An `em` in a container query counts the computed font size of the query container. Source: https://www.w3.org/TR/css-contain-3/, section 5.1, read 2026-09-14.
- Paint Timing counts an element as paintable only when the element and each ancestor have a used opacity above 0. Source: https://w3c.github.io/paint-timing/, read 2026-09-14.
- The LCP algorithm skips a text node with an opacity of 0 or less, unless the text has a shadow or a stroke. Source: https://w3c.github.io/largest-contentful-paint/, read 2026-09-14.
- Lighthouse 13.4.1 weights the performance metrics as FCP 10, LCP 25, TBT 30, CLS 25, and SI 10. Source: the installed `core/config/default-config.js`, read 2026-09-14.
- In the SEO category of Lighthouse 13.4.1, `is-crawlable` weighs 93/23, and nine audits weigh 1 each, among them `document-title`, `meta-description`, and `canonical`. So one failed audit of weight 1 gives about 0.92. Source: the same file, read 2026-09-14.
- axe-core 4.13.0 tags `region`, `landmark-one-main`, `page-has-heading-one`, and `heading-order` as `best-practice`, so a scan by WCAG tags never runs them. Lighthouse still scores `landmark-one-main` and `heading-order`. Sources: `axe.getRules()` of the installed axe-core and the Lighthouse default config, read 2026-09-14.
- WCAG 2.2.2 applies to motion that starts automatically, lasts more than five seconds, and shows in parallel with other content. WCAG 2.3.3 Animation from Interactions is level AAA. Sources: https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html and https://www.w3.org/TR/WCAG22/, read 2026-09-14.
- The individual transform properties `translate`, `scale`, and `rotate` are Baseline Widely available since 2025-02-05. Baseline lists `meta name="theme-color"` as Limited, and `color-scheme` as Widely available since 2024-08-03. Source: https://api.webstatus.dev/v1/features, read 2026-09-14.
- Google Search takes a favicon in BMP, GIF, ICO, PNG, JPEG, PPM, or TIFF, and no SVG. It recommends a square icon larger than 48 by 48 pixels. Source: https://developers.google.com/search/docs/appearance/favicon-in-search, updated 2026-08-28, read 2026-09-14.
- Safari 26.0 supports an SVG file for each icon, the favicon included. Source: https://webkit.org/blog/17333/, read 2026-09-14.
- The page of PR-8 has a PNG icon link and then an SVG icon link. The full Chromium build 1243 in new headless mode requested `/favicon.svg` alone, and no `/favicon.ico`. Source: a local run of the PR-8 build with a request log, 2026-09-14.
- `overflow: clip` is Baseline Widely available since 2025-03-12, and the interaction media queries `hover` and `pointer` since 2021-06-11. Source: https://api.webstatus.dev/v1/features, read 2026-09-14.
- Astro 7.3.2 keeps the collection config in `src/content.config.ts`, and `astro/zod` exports zod v4. The image components write no style attribute while `image.responsiveStyles` keeps its default, `false`. Sources: the installed `dist/zod.js` and `dist/core/config/schemas/defaults.js`, and the PR-9 scratch builds, read 2026-09-14.
- In Astro 7.3.2, the Container API is still `experimental_AstroContainer`. `astro build` and `astro preview` take `--outDir`, and `--ignore-lock` starts a second preview server in the foreground alone. Sources: the installed `dist/container/index.js`, `dist/cli/flags.js`, and `dist/cli/preview/index.js`, read 2026-09-14.
- Astro puts CSS that several pages share into a separate chunk. So a component that one page uses adds a second stylesheet to that page. Source: https://docs.astro.build/en/guides/styling/, read 2026-09-14.
- Playwright 1.63.0 accepts a list of web servers in its config. Source: the installed `lib/common/index.js`, read 2026-09-14.
- In axe-core 4.13.0, `nested-interactive` and `summary-name` carry the tag `wcag2a`. A link inside `summary` fails `nested-interactive`, and an empty `summary` fails `summary-name`. Sources: `axe.getRules()` and a local Chromium run, 2026-09-14.
- `::details-content` and the `name` attribute of `details` are Baseline Newly available, since 2025-09-16 and 2024-09-03. Baseline lists `interpolate-size` and `hidden="until-found"` as Limited. Source: https://api.webstatus.dev/v1/features, read 2026-09-14.
- In Chromium 153, the accessibility tree names each card toggle "Highlights of <title>", so the space before the hidden title survives. A trailing space inside a visually hidden span does not: the tree holds "Status:" alone. Source: `Accessibility.getFullAXTree` on the PR-9 fixture build, 2026-09-14.
- LinkedIn asks for a share image of 1200 by 627 pixels or more, with a ratio of 1.91:1. The file must be 5 MB or less. Source: https://www.linkedin.com/help/linkedin/answer/a521928, read 2026-09-14. The X card docs moved to docs.x.com, and the research found no card page there, so the rules of X stay unverified.
- The HTML Standard says that a `footer` alone is sufficient for a short list of links, and that a `nav` is usually unnecessary. Source: https://html.spec.whatwg.org/multipage/sections.html, read 2026-09-14.
- The GOV.UK pattern for a page-not-found page uses the heading "Page not found" and two lines about the address. It asks for no blame of the reader, no "404", and no "oops". Source: https://design-system.service.gov.uk/patterns/page-not-found-pages/, read 2026-09-14.
- sharp 0.35.4 is an optional dependency of Astro 7.3.2, and a build-time image takes its fonts from the build machine. Sources: `package-lock.json` and a test render of the PR-8 research, 2026-09-14.
- With `font-display: optional` and no preload, the mono face of the fixture cards rendered in 1 of 3 first visits with no network throttling. With a preload, it rendered in 3 of 3. Source: a local run of the PR-9 fixture build in Chromium build 1243 at 390 by 844 pixels, 2026-09-14 (D-111).
- On the DevTools "Slow 4G" profile with a 4 times CPU slowdown, both faces used the fallback face on each first visit. The mono preload did not change that result. Source: the same run (D-111).
- The decktome repository is public, and `https://decktome.com` answers 200. The decktome D-310 still reads "No public sign-up". Sources: `gh repo view`, `curl`, and the decktome `docs/decisions.md`, read 2026-09-14.
- The decktome D-577 of 2026-09-07 names the product "Deck Tome", in two words, and corrects its D-556. Source: the decktome `docs/decisions.md` on `main`, read 2026-09-14.
- The decktome decision register holds 721 unique decision ids, from D-1 on 2026-08-23 to D-727 on 2026-09-14. Source: `grep` on the decktome `docs/decisions.md`, read 2026-09-14.
- A certificate of the type `GROUPED` is the standard certificate for Spark plan custom domains. A `TEMPORARY` certificate covers a domain while Hosting creates a more permanent certificate. Source: the Hosting API v1beta1 discovery document, revision 20260830, read 2026-09-14.
- At 04:11 UTC on 2026-09-15, both custom domains read `CERT_ACTIVE` with the type `GROUPED` and an expiry of 2026-12-13. So Hosting replaced the temporary certificates of PR-6. Source: the Hosting API v1beta1 calls of `docs/deploy.md`.
- WCAG 2.4.4 Link Purpose (In Context) is level A. Its sufficient techniques include C7, CSS that hides a part of the link text. H80, the link text with the heading before it, is an advisory technique alone. Source: https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context.html, updated 2026-05-18, read 2026-09-15.
- WCAG 2.4.9 Link Purpose (Link Only) is level AAA. WCAG 2.5.3 Label in Name is level A, and its Understanding page calls a name that starts with the visible label a best practice. Sources: https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-link-only.html and https://www.w3.org/WAI/WCAG22/Understanding/label-in-name.html, read 2026-09-15.
- The Chromium 153 accessibility tree and the name code of Playwright 1.63.0 give the same link names. A visually hidden span that starts with a comma gives "Source on GitHub , Deck Tome", with a space before the comma. An inline-block span gives the same space, and a span that starts with a space gives a clean name. Source: a scratch page with the `.visually-hidden` rules of the site, 2026-09-15 (D-122).
- The What You Carry repository is public, with no description and no homepage, and its `main` is `a4bf6d6`. Its `README.md` calls the game "a solo third-person dungeon crawler for Steam" (line 3). Sources: `gh repo view nkramber/what-you-carry` and `git show`, read 2026-09-15.
- `https://www.linkedin.com/in/nate-kramber` answered 999 to a GET with the default `curl` agent and with a browser agent. A HEAD with a browser agent answered 405. The LinkedIn `robots.txt` prohibits every automated access without the permission of LinkedIn. Sources: `curl` and https://www.linkedin.com/robots.txt, read 2026-09-16.
- linkinator 8.1.0 has the flags `--skip`, `--status-code "CODE:ACTION"` with the actions ok, warn, skip, and error, `--retry`, `--retry-errors`, and `--user-agent`. Source: `npx linkinator --help`, read 2026-09-16.
- The GitHub schedule event can come late under load, and the high load times include the start of every hour. A scheduled workflow runs on the newest commit of the default branch. GitHub stops a scheduled workflow after 60 days with no activity in a public repository. Source: https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows, read 2026-09-16.
- On 2026-09-16, `make link-check` read 13 links of the live site, and each one answered 200. The site has four outbound addresses: `decktome.com` and three GitHub addresses. The run skipped the LinkedIn address. Source: a local run.
- `image()` of Astro 7.3.2 takes an SVG file. It reads the width and the height from the file or from its `viewBox`. The `Image` component then renders a plain `img` with the file untouched. It writes `width`, `height`, `loading`, and `decoding`, and no `style` attribute. Source: the installed `astro` package and two scratch builds, read 2026-09-16.
- The `Picture` component fails a build on an SVG, because sharp refuses that file. The HTML still gets `source` addresses for files that never exist. An ESM import of an SVG renders an inline `svg` element, and that element can hold a `style` element, which the CSP of D-57 blocks. Source: the same reads, 2026-09-16.
- A browser keeps the colors of an `img` in every scheme. The fixture logo measures 6.49:1 against the light page, 2.81:1 against the dark page, and 3.10:1 on forced black. Source: the accessibility audit of PR-17, 2026-09-16.
- The Hosting request log of `natekramber-prod` reads with the gcloud configuration `natekramber`, on a project with no billing account. Each entry holds `httpRequest.requestUrl`, `.referer`, `.userAgent`, and `.status`, with `jsonPayload.remoteIpCountry` and `.remoteIpCity`. Source: `gcloud logging read`, 2026-09-16.
- The `_Default` log bucket of `natekramber-prod` keeps 30 days and has no Log Analytics. Source: `gcloud logging buckets describe`, 2026-09-16.
- Cloud Logging gives 50 GiB of ingestion for each project each month at no charge, and the default retention of 30 days costs nothing. Source: https://cloud.google.com/products/observability/pricing, read 2026-09-16.
- A Cloud Logging filter reads `=~` and `!~` as RE2 patterns, and `(?i)` makes a pattern ignore letter case. Source: two test reads of the live log, 2026-09-16.
- gcloud 533.0.0 has no `saved-queries` command group. The Logging API v2 holds `projects.locations.savedQueries`, and a saved query needs a `displayName` and a `visibility` of `PRIVATE` or `SHARED`. Source: the v2 discovery document, revision 20260818, read 2026-09-16.
- On 2026-09-15 the live site answered 901 requests. 580 of them were a 404 scan for addresses such as `/wp-admin/install.php` and `/.env`. 155 were a 200 answer for a page address. 30 of those came from a self-declared machine, and 35 more from one agent of 2019 with a false referrer. Every referrer named this same site or a spam address. Source: a read of the request log, 2026-09-16.
- The What You Carry workflow `bit-identity.yml` runs on each pull request and each push to `main`. It has a Linux, a Windows, and a macOS job, and a job that compares the three hashes. Its workflow `night.yml` runs at 08:07 UTC, with 5,000 seeds for each of two bots and a reachability sweep of 100,000 seeds. Source: What You Carry `main` at `a4bf6d6`, read 2026-09-15.

## 1. Thesis

The site shows the work of Nate Kramber on one page at `natekramber.com` (D-3, D-4). It is for peers and the curious, and it makes no hard sell (D-19). A visitor on any screen reads the headline and a short bio, opens each card in place, and follows a link out (D-20 to D-23). The site ships no client JavaScript, and it follows the system color scheme (D-27, D-33).

The plan puts the checks and a live placeholder first, then the design, then the page, then the cards. A live placeholder finds the domain, certificate, and deploy problems early, while nothing depends on them (D-40). The checks come before the page, so every page change passes them from its first commit (G-3, D-38). Each card comes from one component and one data entry, so a new project costs one entry and its images (D-2).

## 2. Tenets

`CLAUDE.md` quotes the tenets in full, and this file cites their ids. The order is T-1 Responsive first, T-2 Accessible, T-3 Simple and readable code, T-4 Fast, T-5 Document everything, and T-6 No attribution (D-39).

## 3. Guardrails

Every pull request keeps each guardrail. Only an owner decision changes a guardrail.

1. **G-1. No sideways scroll.** No layout scrolls sideways at any width from 320 CSS pixels up (T-1).
2. **G-2. One card for every project.** Every project card comes from one component and one data entry. No project gets its own layout code (D-2).
3. **G-3. A new check passes on its own pull request.** A pull request that creates a check passes that check. A planned check names the pull request that creates it.
4. **G-4. Pinned actions.** Every GitHub Action pins a commit SHA, with its tag in a comment (D-16).
5. **G-5. Zero client JavaScript.** The built site ships no script, unless a decision names the script and its purpose (D-33).
6. **G-6. Baseline Widely available.** Every essential feature is Baseline Widely available. A Newly available feature adds polish alone, with a fallback (D-32).
7. **G-7. The budget holds.** Every site pull request stays inside the performance budget of D-37, and CI enforces it.
8. **G-8. WCAG 2.2 level AA.** The axe scan passes on each page and on the fixture cards (T-2, D-38, D-133).
9. **G-9. No deploy key.** Every deploy authenticates through Workload Identity Federation. No service account key lives in the repository or in its secrets (D-35).
10. **G-10. Only `main` deploys.** Only a merge to `main` reaches production (D-35).
11. **G-11. Every card fact has a source.** Each fact on a card comes from its repository or from the owner. The site copy invents no metric (hard rule 9).

## 4. Roadmap

Each entry has an id (PR-# or M-#), a status, a scope, exit tests, and a gate. It ends with a plain-English paragraph. An M-# entry is a measurement: it changes no site code, and its result goes into `docs/decisions.md`.

### Phase 0: Foundation

#### PR-1: Repository foundation

Status: merged as #1, `dcd98e6`, on 2026-09-12. Gitar approved it with no finding, and `verify:docs` became a required check after the merge.

Scope: `CLAUDE.md`, the `AGENTS.md` symlink, the rule files, six skills, four agents, the registers, draft 0 of this file, the session handoff, the STE checker, the `verify:docs` job, Dependabot, and the license (D-5 to D-18).

Exit tests:

- `make verify` passes on the branch.
- The `verify:docs` job passes on the pull request.
- Gitar reviews the pull request, and every finding has its answer (D-5).

Gate: the owner merges PR-1. Then `verify:docs` joins the `main` ruleset as a required check (D-11).

> *In plain English:* the repository has no rules and no plan today. This change writes both before any site code. It changes no site, so it cannot break one.

#### PR-2: Roadmap draft 1

Status: merged as #2, `60048ba`, on 2026-09-12. Gitar approved it with no finding.

Scope:

- D-19 to D-43 in `docs/decisions.md`. OQ-1 and OQ-2 closed, and OQ-3 to OQ-5 added, in `docs/questions.md`.
- Draft 1 of this file: the external facts, the guardrails, the phases, and the sequence.
- Tenet T-6 narrowed to match D-26, and the voice of the `copy-editor` agent set by D-28.

Exit tests:

- `make verify` passes on the branch.
- Gitar reviews the pull request, and every finding has its answer (D-5).

Gate: the owner merges PR-2. The merge approves draft 1, and PR-3 can start.

> *In plain English:* the answers to the roadmap questions live in the conversation alone today. This change writes them down as decisions and turns them into an ordered plan. It changes no site.

### Phase 1: Stack, checks, and first deploy

Phase gate: `natekramber.com` serves the placeholder page over HTTPS, each merge to `main` deploys it, and every site check is a required check. Passed 2026-09-14: PR-6 put the page on the domain (D-86), and M-2 closed the phase (D-88).

#### PR-3: Astro scaffold and placeholder page

Status: merged as #3, `4aacda4`, on 2026-09-13 UTC. Gitar approved it after one finding, and `verify:site` became a required check after the merge.

Scope:

- An Astro 7 project with npm and static output (D-30, D-41). `.nvmrc` pins the Node LTS version that the session verifies on the day.
- A placeholder page with the headline of D-29 and the two links of D-20 (D-40, D-41).
- A `verify:site` job that builds the site, and `make verify` runs the same build.
- The npm ecosystem in `.github/dependabot.yml` (D-16).
- `.claude/rules/site.md` for the files in `src/`: the code rules of D-31 to D-33.
- The build, local server, and screenshot commands in `CLAUDE.md`.

Out of scope:

- The site checks. PR-4 holds them.
- The design tokens and the fonts. PR-7 holds them.

Exit tests:

- `npm run build` passes, and the built HTML holds no `script` element (G-5).
- The `verify:site` job passes on the pull request.
- The placeholder page shows no sideways scroll at 320 CSS pixels, by hand.

Gate: the owner merges PR-3. Then `verify:site` joins the `main` ruleset as a required check.

> *In plain English:* the repository holds no site today. This change adds the smallest real page and the tools that build it. Nothing is live yet, so nothing can break for a visitor.

#### PR-4: Site checks

Status: merged as #4, `1942877`, on 2026-09-13 UTC. Gitar approved it after one finding, and the four `verify:site-*` checks became required checks after the merge.

Scope: the four checks of D-38, each as a `verify:site-*` job and a `make` target.

- Responsive tests: Playwright loads the page at each width of the `responsive-qa` skill. A test fails on sideways scroll, and each run saves a screenshot for each width.
- Accessibility scan: axe checks the page for WCAG 2.2 AA in the light and the dark scheme, with every card closed and open.
- Lighthouse budget: a script runs Lighthouse 13 three times and fails when a median breaks the budget of D-37 and D-48 (D-50).
- HTML validation with `html-validate`, and an internal link and anchor check with `linkinator` (D-46, D-47).

Exit tests:

- Each check passes on the placeholder page.
- Each check fails on a fixture with one planted defect. The defects: a wide element, a missing alt text, a heavy script, a duplicate id, and a broken anchor.
- `make verify` runs all four checks.

Gate: each check joins the `main` ruleset after its first green run (D-11, D-38).

> *In plain English:* today nothing stops a change that breaks the layout on a phone or hurts accessibility. This change adds four automatic checks, and it proves that each check can fail. The page itself does not change.

#### PR-14: Agentic browsing in the Lighthouse budget

Status: merged as #7, `28dbda2`, on 2026-09-13 UTC. Gitar approved it with no finding.

Scope:

- An `agentic-browsing` floor of 0.95 in `lighthouse-budget.json` (D-60).
- The budget script reads that category like the other four categories.
- The self-test plants a bad `llms.txt` in a fixture site of its own. It checks the exact failure line of each planted defect.

Exit tests:

- `make lighthouse` passes on the placeholder page, and its output lists `agentic-browsing`.
- The budget fails on a planted defect that lowers `agentic-browsing`, and the output names the category (G-3).
- The self-test still fails on the planted heavy script.

Gate: the owner merges PR-14.

> *In plain English:* Lighthouse gives five scores today, and the budget checks only four of them. This change adds the missing score, so the budget checks every score, as the owner asked.

#### PR-15: Stylesheet file and placeholder 404 page

Status: merged as #9, `d59be43`, on 2026-09-13 UTC. Gitar approved it with no finding.

Scope:

- `build.inlineStylesheets: 'never'` in `astro.config.mjs`, so the page loads its CSS from a file (D-57).
- A minimal `src/pages/404.astro`: one short line and a link home, in the style of the placeholder (D-64, D-74).
- One layout component, `src/layouts/Placeholder.astro`, for the head and the styles of both pages (D-73).
- The responsive tests, the axe scan, the HTML validation, and the link check also load the 404 page (D-71, G-1, G-8).
- `make no-inline-style-check` with a self-test, in the `verify:site` job (D-72).

Out of scope:

- The CSP header. PR-5 holds `firebase.json`.
- The final words of the 404 page. PR-8 holds them.
- The Lighthouse budget on the 404 page. The budget stays on the home page (D-71).

Exit tests:

- `make no-inline-style-check` passes on the build, and its self-test finds both planted defects (D-72, G-3).
- `dist/_astro/` holds the stylesheet.
- `dist/404.html` exists and holds no script (G-5).
- The responsive tests, the axe scan, the HTML validation, and the link check pass on both pages (D-71).
- The Lighthouse budget still holds on the home page (G-7).
- The `copy-editor` agent reviews the words of the 404 page (D-28).

Gate: the owner merges PR-15.

> *In plain English:* the page keeps its styles inside the HTML today, and a missing address shows the generic error page of the host. This change moves the styles into a file, so a strict security policy can permit them. It also adds a short page for a missing address, and a check that keeps styles out of the HTML.

#### PR-16: Foreground preview server for the checks

Status: merged as #8, `162ec5b`, on 2026-09-13 UTC. Gitar approved it with no finding.

Scope:

- `ASTRO_PREVIEW_BACKGROUND` in the web server environment of `playwright.config.ts`, with a comment that names the Astro source (D-70).

Out of scope:

- The `make preview` target. An agent can still run that server in the background.

Exit tests:

- `make verify` passes in an agent shell with no extra variable.
- No `astro preview` process stays on port 4321 after the run.
- The `verify:site-responsive` and `verify:site-a11y` jobs still pass in CI.

Gate: the owner merges PR-16.

> *In plain English:* in a coding-agent shell, the local checks fail today, because Astro moves its preview server into the background. This change keeps that server in the foreground for the checks. CI does not change.

#### PR-5: Google Cloud projects, Hosting configuration, and previews

Status: merged as #10, `4d36b43`, on 2026-09-14 UTC. Gitar approved it after one finding, and `verify:site-preview` became a required check before the merge (D-81). The projects `natekramber-prod` (number 321332406577) and `natekramber-preview` (number 573927778532) exist since 2026-09-14 (D-51, D-56, D-79). The owner account of decktome-prod owns both through a gcloud configuration named `natekramber` (D-52). D-53, D-54, D-56 to D-59, D-62, and D-75 to D-80 answer the design questions of PR-5, and PR-15 shipped its site code first (D-65).

Scope:

- `docs/deploy.md` with the setup commands. The session runs them with the owner account, and it stops when the owner must act (D-79).
- The commands create two dedicated projects on the Spark plan (D-56).
- Each project gets its own Workload Identity Federation pool. The preview provider trusts only pull request tokens of this repository (D-35, D-62).
- They also create one deploy service account in each project, with the least role that a Hosting deploy needs (G-9). The preview account gets no role in `natekramber-prod` (D-56).
- `firebase.json`: the build directory, the custom 404 page, the cache headers, and the security headers of D-57 and D-58. The repository has no `.firebaserc`, and each command names its project (D-54).
- `deploy/package.json` and its lockfile hold the Firebase CLI alone, with a Dependabot entry for `/deploy` (D-53).
- A preview workflow: each pull request deploys its build to a preview channel of `natekramber-preview` through Workload Identity Federation (D-35, D-56).
- A separate job posts the preview URL as one pull request comment, and it updates that comment on each push (D-66).
- Each preview deploy sets `--expires 30d`, and a job deletes the channel when its pull request closes (D-67).
- A header check in the preview workflow. It compares each header of the preview URL with `firebase.json`, and a Playwright test fails on any console error (D-59).

Out of scope:

- The deploy on merge, the domain, and the HSTS check on the live domain. PR-6 holds them.

Exit tests:

- M-1 passes on this pull request, or the owner decides the next step (D-35).
- The repository and its secrets hold no service account key (G-9).
- No service account of `natekramber-preview` holds a role in `natekramber-prod` (D-56, G-10).
- The header check passes on the preview URL, and it fails on one planted wrong header (D-59, G-3).
- A Dependabot pull request can still merge while `verify:site-preview` skips on it (D-68).

Gate: M-1 has a result in `docs/decisions.md`, and the owner merges PR-5. Then `verify:site-preview` joins the `main` ruleset (D-11, D-68). Refuted 2026-09-14: the check joined the ruleset before the merge of #10, right after its first green run (D-81).

> *In plain English:* the site has no home in Google Cloud today. This change writes the setup steps and the host settings. Each change gets its own preview address in a separate project, without a stored key, so a preview can never reach the live site.

#### M-1: Keyless preview deploy

Status: passed on #10 on 2026-09-14 (D-80). The deploy needed `roles/firebasehosting.admin` alone, and the header check passed on the preview URL.

Scope: the preview workflow of PR-5 runs `firebase hosting:channel:deploy` on `natekramber-preview` with the credentials of Workload Identity Federation (D-56). The official GitHub action needs a JSON key, so it stays out (read 2026-09-12).

Exit tests:

- The workflow prints a preview URL, and the URL serves the build of the pull request.
- The workflow uses no JSON key.
- The header check of D-59 passes on the preview URL.
- The result names the least role set that the deploy needed. The Firebase docs ask for API Keys Viewer, but the Hosting deploy code of firebase-tools 15.30.0 calls no API Keys endpoint (read 2026-09-12).

Gate: a pass keeps the preview workflow. A fail removes the workflow, and the owner chooses between a scoped key and no previews (D-35).

> *In plain English:* nobody knows yet whether the Firebase tool accepts a deploy without a stored key. This test answers that before the live site depends on it.

#### PR-6: Deploy on merge and the domain

Status: merged as #12, `af04c17`, on 2026-09-14 UTC. Gitar approved it with no finding. The first run of `deploy.yml` released the placeholder page with no manual step. Both certificates read `CERT_ACTIVE` at 15:58 UTC, and both domains read `HOST_ACTIVE` by 16:30 UTC after the second DNS visit (D-86). The owner opened the site on a phone, and `make preview-check` passed on `https://natekramber.com` at 17:04 UTC, with the HSTS header of D-58. No run tested the exit test of D-63 yet.

Scope:

- A deploy workflow that runs on each push to `main` and by hand, through Workload Identity Federation (D-35, D-84, G-10). Its job uses the environment `production` (D-63).
- The environment `production` accepts the `main` branch alone, and no administrator can bypass it. The session creates it, and the owner clears the bypass before the first run of the workflow (D-63, D-85).
- The live service account trusts only the OIDC subject of the environment `production` (D-62, D-63).
- The custom domains `natekramber.com` and `www.natekramber.com`, created through the Hosting API. `www` redirects to the apex with a 301 (D-41, D-82).
- Two DNS visits at GoDaddy by the owner (D-82, D-83). The first adds three TXT records, and the second changes the A record and the `www` CNAME after both certificates are active.
- The environment, the domains, the DNS records, and the rollback steps in `docs/deploy.md`.

Exit tests:

- A merge to `main` deploys the placeholder page with no manual step.
- `https://natekramber.com` answers with a valid certificate, and `www` redirects to it.
- The response holds every header that `firebase.json` sets.
- The HSTS header of `https://natekramber.com` reads `max-age=31536000; includeSubDomains` (D-58).
- A workflow run outside the environment `production` gets no token for the live service account (D-63).
- The owner opens the site on a phone.

Gate: the placeholder page is live at `natekramber.com` (D-40).

> *In plain English:* the domain points nowhere today. This change puts the placeholder page on the real address, and each approved change then goes live on its own. The certificate can take up to a day, so the plan does this early.

#### M-2: Request logs on the Spark plan

Status: passed on 2026-09-14 (D-88). The Spark project with no billing account sends the request logs. The entry of a test visit held the URL, the referrer, and the country.

Scope: link Firebase Hosting to Cloud Logging on the Spark project. Make one test visit, then read its log entry. The plan that this link needs is unverified (read 2026-09-12). Resolved 2026-09-14: the Spark plan with no billing account gives the link (D-88).

Exit tests:

- The log entry holds the request URL, the referrer, and the country.
- The project still has no billing account (D-34).

Gate: a pass unblocks PR-13. A fail goes to the owner: the Blaze plan, or no visit counts (D-36).

> *In plain English:* the plan counts visits from the host's own logs, with no script on the page. This test checks that the free plan gives those logs.

### Phase 2: The page

Phase gate: the page shell passes every site check, and the owner approves it on a preview address or on a phone. Passed 2026-09-14: every site check passed on #17, and the owner merged it after the phone check (D-102).

#### PR-7: Design tokens, fonts, and accent color

Status: merged as #15, `a865051`, on 2026-09-14 UTC. Gitar approved it with no finding. The owner picked the fonts and the accent from the preview page (D-89, D-91), and OQ-5 closed. `make verify` passed: every Lighthouse category read 1, the first load weighed 38,974 bytes, the median LCP was 1,052 ms, and the CLS was 0. The owner checked the preview on an iPhone 16 Pro (D-93). After the deploy, `make preview-check` passed on `https://natekramber.com`.

Scope:

- A private preview page with three font pairings and three accent colors, in light and dark, at phone and desktop widths (D-42). The owner picks, and OQ-5 closes.
- The design tokens as CSS custom properties: color for each system scheme, a fluid type scale, and spacing (D-27, D-31).
- The two picked fonts, self-hosted as WOFF2 files, with a fallback stack (D-27).
- Base styles for text, links, focus indicators, and reduced motion (T-2).

Exit tests:

- Every text and control color meets WCAG contrast in the light and the dark scheme (G-8).
- The fonts keep the page inside the budget of D-37 (G-7).
- Every site check passes.

Gate: OQ-5 has its answer in `docs/decisions.md`, and the owner merges PR-7.

> *In plain English:* the page has no look today. This change lets the owner choose the fonts and the color from real examples. It then sets them once, so every later part of the page uses the same values.

#### PR-8: Page shell

Status: merged as #17, `ec0d764`, on 2026-09-14 UTC. Gitar approved the last head with no finding, and D-94 to D-102 answer its design questions. The owner checked the preview on a phone, which led to D-102. After the deploy, `make preview-check` passed on `https://natekramber.com`.

Scope:

- The hero with the headline of D-29 and the links of D-20, and the About section (D-21). The Links section at the end of the page waits for the project cards (D-102).
- The About text from an owner interview (D-94). Until OQ-3 closes, the section holds no text and stays off the page.
- The page title, the meta description, a canonical address, the Open Graph tags, and the share image of D-97 (D-41).
- The icons of D-96, and a CSP with no `data:` in `img-src`.
- `make images`: a script draws the share image and the PNG icons in the Chromium build of Playwright. The PNG files stay in git (D-96, D-97).
- The 404 page keeps the words of D-74 in the new layout (D-98).
- The hero motion of D-95 in CSS, off under reduced motion (D-27).
- An axe scan of the page structure with best-practice rules such as `landmark-one-main` and `region` (G-8). A planted fixture proves that the scan can fail (G-3).

Out of scope:

- The project cards. Phase 3 holds them.
- A web app manifest and `theme-color`. Baseline lists both as Limited (G-6), and `default-src 'none'` blocks a manifest.

Exit tests:

- The page has one `h1`, one `main`, and a landmark for each section (G-8). The structure scan passes on both pages and fails on its fixture.
- The headline shows no sideways scroll and no clipped text at every width (G-1).
- Under `prefers-reduced-motion: reduce`, the hero does not move, and the keyframes change `translate` alone (D-95).
- At the first frame of the rise, the 404 page does not scroll (D-95).
- The share image and each icon serve from the address in the head (D-96, D-97).
- Every site check passes, and the built page holds no script (G-5).

Gate: the owner approves the shell on a preview address and merges PR-8.

> *In plain English:* the live page shows a placeholder today. This change builds the real top of the page, a place for the bio, and the links at the end. It adds an icon and a share card but no script, so the page stays fast.

### Phase 3: Project cards

Phase gate: both cards pass every site check, and the owner approves the text of each card. Passed 2026-09-16: the owner approved each card and merged PR-11 (#22). PR-17 then changed the shape of every card (D-133).

#### PR-9: Project schema and card component

Status: merged as #18, `1bced52`, on 2026-09-15 UTC. Gitar approved it with no finding, and D-103 to D-110 answer its design questions. D-112 changes its fixture build in PR-10.

Scope:

- A content collection `projects` in `src/content.config.ts`, with one JSON file for each project in `src/content/projects/` (D-2).
- A strict schema with the fields of D-22. An unknown field fails the build.
  - A title of 40 characters or less, and a pitch of 140 characters or less.
  - Up to 3 links, each with an optional note such as "Invite only" (D-24).
  - A status of D-105, up to 6 stack tags, and up to 5 highlights.
  - An optional screenshot with alt text, and an order number (D-23).
- One card component, `src/components/ProjectCard.astro`, with its own scoped styles (D-104). The title, the pitch, the status, the tags, and the links always show, and a "Highlights" disclosure opens the rest (D-107, G-5).
- A status badge beside the title (D-109), and stack tags in hairline outlines (D-108).
- A CSS panel with the project name, 36rem wide at most, for a card with no screenshot (D-40, D-106, D-110).
- A Projects section on the home page, sorted by order, that stays off the page while the collection has no entry. PR-10 adds the first entry.
- Two fixture entries in `tests/fixtures/projects/`, built into `dist-fixture/` for the responsive and the accessibility tests alone (D-103). They hold the longest title and the most tags that the schema allows. Each fixture build keeps its own content cache, so the site build never reuses a fixture entry. Revised in part by D-112 on 2026-09-14: a fixture build loads the fixture entries alone.
- `make content-selftest`: a planted entry with no pitch must fail the build (G-3).

Out of scope:

- Real project entries. PR-10 and PR-11 hold them.
- A height animation on open. It needs a Limited feature (G-6).

Exit tests:

- `make content-selftest` passes: the build fails on the planted entry with no pitch.
- The card opens and closes with a mouse, a touch, and the keyboard (D-23). The fixture page holds no script and no inline style (G-5, D-72).
- The fixture cards show no sideways scroll and no clipped text at every width, closed and open (G-1).
- The axe scan passes on the fixture cards, closed and open, in both schemes (G-8).
- `dist/` holds no fixture entry, and a responsive test checks it.

Gate: the owner merges PR-9.

> *In plain English:* the page has no project cards today. This change builds the one card that every project uses, and tests it with made-up projects that never reach the live site. A new project then needs only its facts and an image (G-2).

#### PR-10: Deck Tome card

Status: merged as #19, `0f983bb`, on 2026-09-15 UTC. Gitar approved the last head with no finding, and D-111 to D-120 answer its design questions. The owner approved the words of the card (D-113 to D-116) and skipped the phone check (D-120). After the deploy, `make preview-check` passed on `https://natekramber.com`.

Scope: one project entry through the `add-project` skill (D-2, D-24).

- The name is "Deck Tome", and the order number puts the card first (D-24, D-43).
- The links go to `decktome.com` and the public repository, with the "Invite only" label (D-24, D-116).
- The pitch, the three highlights, and the three stack tags of D-113 to D-115. One highlight describes how the owner directs AI coding agents (D-26).
- The card shows the placeholder image until OQ-4 closes (D-40).
- When a screenshot shows card art, the card carries the fan content line of Wizards of the Coast. The session verifies the current text of that policy first (D-41).
- The first card makes the page longer. So the Links section of D-21 returns at the end of the page, with the line of D-101 (D-102).
- The home page preloads the mono face of the card (D-111).
- A fixture build loads the fixture cards alone, and the home page tests open every card (D-112).
- While the home page shows cards, the hero leaves room for the Projects heading on the first screen (D-117).
- The footer heading takes the body size and the muted color, and the footer adds no space above its line (D-118).
- In every card, a note that moves under its link stays close to that link (D-119).

Exit tests:

- The owner approves the pitch and the highlights.
- Each fact on the card has a source in the pull request text (G-11).
- The font test finds two font preloads on the home page and one on the 404 page, and one request for each face (D-111).
- The home page shows no sideways scroll and no clipped text at each width with every card open (G-1, D-112).
- The Projects heading shows on the first screen at five screen sizes, and the 404 hero keeps the full height (D-117).
- The footer heading is smaller than a card title, and the footer adds no space above its line (D-118).
- At 320 px with 200 percent text, each note sits near its own link, not midway to the next link (D-119).
- Every site check passes.

Gate: the owner merges PR-10.

> *In plain English:* the page lists no projects today. This change adds Deck Tome, the live project, as the first card. The profile links return to the end of the page.

#### PR-11: What You Carry card

Status: merged as #22, `c272a86`, on 2026-09-16 UTC. Gitar approved the last head with no finding, and D-121 to D-129 answer its design questions. The owner approved the words of the card (D-123 to D-126) and skipped the hand checks (D-129). After the deploy, `make preview-check` passed on `https://natekramber.com`.

Scope: one project entry through the `add-project` skill (D-2, D-25).

- The order number puts the card second (D-43).
- The card links to the public repository with the label "Source on GitHub" and no note, like the Deck Tome card (D-25, D-116).
- The card does not mention Steam or any release plan (D-25).
- The status badge shows that the game is in development, and the card shows the placeholder image until OQ-4 closes (D-40).
- The pitch, the two highlights, and the three stack tags of D-123 to D-126. No highlight describes the AI coding agents.
- Each card link holds the project name as hidden text, so two cards can share the visible label "Source on GitHub" (D-121, D-122). This change applies to every card (G-2).

Out of scope:

- A badge that keeps "In development" whole at 200 percent text on a 320 px screen (D-127).
- A hero rule that shows the Projects heading on the first screen of a landscape phone (D-128).

Exit tests:

- The owner approves the pitch and the highlights.
- Each fact on the card has a source in the pull request text (G-11).
- The name of each fixture card link reads "<label> (<title>)", with no extra space (D-121, D-122).
- Every site check passes.

Gate: the owner merges PR-11.

> *In plain English:* the page shows one project after PR-10. This change adds the game as the second card. It says nothing about release plans that the owner did not announce. Each card link also gives a screen reader the name of its project.

#### PR-17: Card shape, images, and the page end

Status: merged as #24, `eb1dccf`, on 2026-09-16 UTC. Gitar approved it with no finding, and D-133 to D-138 answer its design questions. The responsive audit and the accessibility audit found no defect that the owner did not accept. After the deploy, `make preview-check` passed on `https://natekramber.com`.

Scope: the card component, the project schema, and the end of the home page.

- A card loses its highlights and its disclosure. It shows the title, the pitch, the status, the tags, the links, an optional logo, and an optional screenshot (D-133).
- The schema loses the `highlights` field. It gains an optional `logo` beside the optional `screenshot` (D-133).
- A card with no image shows no image, and the placeholder panel leaves the site (D-134).
- No card describes the AI coding agents, so the Deck Tome highlights leave the site (D-135).
- The Links section at the end of the home page leaves the site, with its heading and its line (D-136).
- The page keeps at least 4rem of space below the last card (D-137).
- A card draws each screenshot in a 16 by 10 frame, and a taller image shows its top (D-138).
- The fixture cards, the responsive tests, and the accessibility tests follow the new card.

Out of scope:

- The logo files and the screenshot files. OQ-8 and OQ-4 hold them.

Exit tests:

- The build fails on an entry that holds a `highlights` field (G-3, D-103).
- Each card shows every fact with no click, and the built page holds no `details` element.
- The home page holds no footer, and the hero keeps both profile links.
- The page keeps at least 4rem below the last card at each width (D-137).
- Every site check passes, and the first load stays inside the cap of D-48.

Gate: the owner merges PR-17.

> *In plain English:* a card hides most of its words behind a click today, and the page repeats the profile links at its end. This change shows each project in one block, with room for a logo and a picture, and it ends the page after the projects.

### Phase 4: Launch and upkeep

Phase gate: the owner signs off M-3. That sign-off is the launch.

#### PR-12: Weekly outbound link check

Status: merged as #23, `3ca291e`, on 2026-09-16 UTC. Gitar approved it with no finding. After the merge, run 35064260365 of `links.yml` started by hand. It read 13 links of the live site, each one at 200, and its self-test failed on the planted dead link.

Scope: a scheduled workflow checks every outbound link of the live site once a week, and the owner can start it by hand (D-16, D-131).

- `.github/workflows/links.yml`: the job `links:outbound` at 09:17 UTC each Monday, and a run by hand.
- `make link-check`: linkinator crawls `https://natekramber.com` and follows each link that it finds.
- The check skips every `linkedin.com` address, and a comment gives the reason (D-130).
- A dead link fails the run. The workflow opens no issue, and it needs no write permission (D-132).
- `make link-selftest`: a planted page with one dead address proves that the check can fail (G-3).

Out of scope:

- The internal links of the build. `make html-check` keeps them (D-47).
- The outbound links of the documents. The check reads the site alone.

Exit tests:

- `make link-check` passes on the live site.
- The self-test fails on the planted dead address, and its output names that address (G-3).

Gate: the owner merges PR-12.

> *In plain English:* a project can move or go offline without notice. This check finds a dead link within a week, so no visitor finds it first.

#### PR-13: Visit counts

Status: in progress. D-139 to D-141 answer its design questions.

Scope: `docs/analytics.md` with a saved Cloud Logging query that counts page views and referrers from the Hosting request logs (D-36). D-141 adds `make visits` and `scripts/visits.sh`, which widens the scope past the documents.

Exit tests:

- The query returns the visits of one known day.
- The site still ships no script and sets no cookie (G-5).

Gate: the owner merges PR-13.

> *In plain English:* the owner cannot see visit counts today. This change gives a saved query over the host's own logs. The page stays free of trackers and cookies.

#### M-3: Launch audit

Status: planned.

Scope: run the `responsive-auditor` agent, the `accessibility-auditor` agent, and Lighthouse against `https://natekramber.com`. The owner checks the site on a real phone and a real desktop.

Exit tests:

- Each agent report holds no defect of high severity.
- Lighthouse on the live site meets the budget of D-37.
- The owner records the phones and the browsers of the hand check.

Gate: the owner signs off, and the result goes into `docs/decisions.md`.

> *In plain English:* the automatic checks run on a local build. This audit checks the real site on real devices before the owner calls it done.

### Later

These items have no id yet. Each one gets an entry when it starts.

- Real screenshots for both cards (OQ-4).
- The terminal-rpg card, through the `add-project` skill, when the project has something to show (D-2).

## 5. Sequence

One owner runs the sequence in strict order. A step starts only when the gate of the step before it holds.

1. PR-1, the repository foundation. Gate: the merge, then `verify:docs` becomes a required check.
2. PR-2, roadmap draft 1. Gate: the merge approves draft 1.
3. PR-3, the Astro scaffold and the placeholder page. Gate: `verify:site` becomes a required check.
4. PR-4, the site checks. Gate: each check becomes a required check.
5. PR-16, the foreground preview server for the checks (D-70).
6. PR-14, agentic browsing in the Lighthouse budget.
7. PR-15, the stylesheet file and the placeholder 404 page (D-65).
8. PR-5, the Google Cloud projects, the Hosting configuration, and previews. Gate: M-1 has a result.
9. M-1, the keyless preview deploy. It runs on the pull request of PR-5.
10. PR-6, the deploy on merge and the domain. Gate: the placeholder page is live.
11. M-2, the request logs on the Spark plan. Gate: the result is in `docs/decisions.md`.
12. PR-7, the design tokens, the fonts, and the accent color. Gate: OQ-5 closes.
13. PR-8, the page shell. Gate: the owner approves it on a preview address.
14. PR-9, the project schema and the card component.
15. PR-10, the Deck Tome card. Gate: the owner approves the card text.
16. PR-11, the What You Carry card. Gate: the owner approves the card text.
17. PR-12, the weekly outbound link check.
18. PR-17, the card shape, the images, and the page end. Gate: the owner merges it.
19. PR-13, the visit counts. It runs only when M-2 passes.
20. M-3, the launch audit. Gate: the owner signs off.

## 6. Open questions

`docs/questions.md` holds the register. OQ-3 blocks the About text of PR-8. OQ-4 blocks nothing at launch. OQ-5 closed with D-91 on 2026-09-14.
