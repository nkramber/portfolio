# Deploy setup

Status: PR-5 draft. Written 2026-09-13 in ASD-STE100.

This file holds the one-time setup of Google Cloud and Firebase for `natekramber.com`. The session runs each command with the owner account, and it stops when the owner must act (D-79). PR-6 adds the deploy on merge, the domain, and the rollback steps.

## Names

| Item | Preview | Live |
|---|---|---|
| Project | `natekramber-preview` | `natekramber-prod` |
| Workload Identity pool | `github` | `github` |
| Provider | `portfolio-pull-requests` | `portfolio-production` |
| Deploy service account | `hosting-preview@natekramber-preview.iam.gserviceaccount.com` | `hosting-live@natekramber-prod.iam.gserviceaccount.com` |

D-78 approves the service account addresses in this repository. The live provider trusts only the GitHub environment `production` (D-63), and PR-6 tests it.

## Before you start

- Put `~/.nvm/versions/node/v22.23.2/bin` first on the `PATH`.
- Run every command from the repository root.
- Run `npm ci --prefix deploy`. It installs the Firebase CLI of `deploy/package-lock.json` (D-53).
- Run one command at a time, and read its output before the next command.
- Run every step in one shell. Step 1 and step 2 set the shell variables that later commands use.

CAUTION: a project id is global and permanent. If `gcloud projects create` refuses an id, stop and tell the session (D-51, D-56).

CAUTION: copy each command in full. This file has no placeholder to replace. In decktome, a pasted placeholder once wrote over a real value (decktome F-65).

## Step 1: The gcloud configuration

The configuration keeps each command off decktome-prod and every other project (D-52). The variable `CLOUDSDK_ACTIVE_CONFIG_NAME` selects it for this shell alone, so other terminals keep their active configuration.

```sh
gcloud config configurations create natekramber --no-activate
export CLOUDSDK_ACTIVE_CONFIG_NAME=natekramber
gcloud auth login
gcloud config list --format='value(core.account)'
```

The last command must print the account that owns decktome-prod. This file does not name the account (hard rule 10). If `gcloud auth list` already shows that account, `gcloud config set account` with its address replaces `gcloud auth login`.

Every later `gcloud` command names its project with `--project`, so the configuration cannot change its target (D-54). Before each step, run this check:

```sh
echo "$CLOUDSDK_ACTIVE_CONFIG_NAME $(gcloud config list --format='value(core.account)')"
```

The output must show `natekramber` and the owner account.

## Step 2: The Firebase CLI login

The Firebase CLI keeps its own sign-in, and its default account can differ from the owner account. Each Firebase command below names the owner account with `--account`, so the default account of the CLI does not change.

```sh
OWNER_ACCOUNT=$(gcloud config list --format='value(core.account)')
npm exec --prefix deploy -- firebase login:list
```

The list must include the owner account. If it does not, run `npm exec --prefix deploy -- firebase login:add` first.

## Step 3: The two projects

```sh
gcloud projects create natekramber-preview --name="natekramber preview"
gcloud projects create natekramber-prod --name="natekramber prod"
```

Neither project gets a billing account (D-34).

## Step 4: The APIs of the preview project

Enable the APIs of the preview project first, because this step can fail.

```sh
gcloud services enable iam.googleapis.com iamcredentials.googleapis.com sts.googleapis.com cloudresourcemanager.googleapis.com firebase.googleapis.com firebasehosting.googleapis.com --project=natekramber-preview
```

CAUTION: no primary source confirms that a project with no billing account can enable these APIs (read 2026-09-13). If the command asks for a billing account, stop and tell the session. D-34 and D-35 then conflict, and the owner decides.

## Step 5: Firebase in the preview project

```sh
npm exec --prefix deploy -- firebase projects:addfirebase natekramber-preview --account "$OWNER_ACCOUNT"
npm exec --prefix deploy -- firebase hosting:sites:list --project natekramber-preview --account "$OWNER_ACCOUNT"
```

The list must show a default site. If it shows no site, stop and tell the session. With no default site, a deploy fails with "Could not determine the default site for the project." (firebase-tools 15.30.0).

If `projects:addfirebase` returns 403, open the Firebase console once with the owner account. Then run the command again (decktome `docs/setup-gcp.md`, 2026-09-07).

## Step 6: The preview deploy account

```sh
gcloud iam service-accounts create hosting-preview --display-name="Hosting preview deploy" --project=natekramber-preview
gcloud projects add-iam-policy-binding natekramber-preview --member="serviceAccount:hosting-preview@natekramber-preview.iam.gserviceaccount.com" --role="roles/firebasehosting.admin" --condition=None
```

`roles/firebasehosting.admin` is the least role for a channel deploy and a channel delete (Google Cloud IAM docs, read 2026-09-13). M-1 records the role set that the deploy needed.

## Step 7: The preview pool and provider

```sh
gcloud iam workload-identity-pools create github --location=global --display-name="GitHub" --project=natekramber-preview
gcloud iam workload-identity-pools providers create-oidc portfolio-pull-requests \
  --location=global \
  --workload-identity-pool=github \
  --display-name="portfolio pull requests" \
  --issuer-uri="https://token.actions.githubusercontent.com" \
  --attribute-mapping="google.subject=assertion.sub,attribute.repository_id=assertion.repository_id,attribute.repository_owner_id=assertion.repository_owner_id,attribute.event_name=assertion.event_name" \
  --attribute-condition="assertion.repository_owner_id == '190805558' && assertion.repository_id == '1367643959' && assertion.event_name == 'pull_request'" \
  --project=natekramber-preview
```

The condition names the numeric ids of the owner and the repository, as Google advises (D-62). It accepts pull request tokens alone.

The issuer has no trailing slash, as in the README of `google-github-actions/auth` v3.0.0. The Google guide shows a trailing slash (both read 2026-09-13). M-1 tests the form of this file.

## Step 8: The link from the provider to the account

```sh
PREVIEW_NUMBER=$(gcloud projects describe natekramber-preview --format='value(projectNumber)')
echo "$PREVIEW_NUMBER"
gcloud iam service-accounts add-iam-policy-binding hosting-preview@natekramber-preview.iam.gserviceaccount.com \
  --role="roles/iam.workloadIdentityUser" \
  --member="principalSet://iam.googleapis.com/projects/${PREVIEW_NUMBER}/locations/global/workloadIdentityPools/github/attribute.repository_id/1367643959" \
  --project=natekramber-preview
```

Give the printed project number to the session. The preview workflow names it (D-78).

## Step 9: The live project

Run these commands for `natekramber-prod`. No workflow uses them before PR-6.

```sh
gcloud services enable iam.googleapis.com iamcredentials.googleapis.com sts.googleapis.com cloudresourcemanager.googleapis.com firebase.googleapis.com firebasehosting.googleapis.com --project=natekramber-prod
npm exec --prefix deploy -- firebase projects:addfirebase natekramber-prod --account "$OWNER_ACCOUNT"
npm exec --prefix deploy -- firebase hosting:sites:list --project natekramber-prod --account "$OWNER_ACCOUNT"
gcloud iam service-accounts create hosting-live --display-name="Hosting live deploy" --project=natekramber-prod
gcloud projects add-iam-policy-binding natekramber-prod --member="serviceAccount:hosting-live@natekramber-prod.iam.gserviceaccount.com" --role="roles/firebasehosting.admin" --condition=None
gcloud iam workload-identity-pools create github --location=global --display-name="GitHub" --project=natekramber-prod
gcloud iam workload-identity-pools providers create-oidc portfolio-production \
  --location=global \
  --workload-identity-pool=github \
  --display-name="portfolio production" \
  --issuer-uri="https://token.actions.githubusercontent.com" \
  --attribute-mapping="google.subject=assertion.sub,attribute.repository_id=assertion.repository_id,attribute.repository_owner_id=assertion.repository_owner_id" \
  --attribute-condition="assertion.repository_owner_id == '190805558' && assertion.repository_id == '1367643959' && assertion.sub == 'repo:nkramber@190805558/portfolio@1367643959:environment:production'" \
  --project=natekramber-prod
PROD_NUMBER=$(gcloud projects describe natekramber-prod --format='value(projectNumber)')
echo "$PROD_NUMBER"
gcloud iam service-accounts add-iam-policy-binding hosting-live@natekramber-prod.iam.gserviceaccount.com \
  --role="roles/iam.workloadIdentityUser" \
  --member="principalSet://iam.googleapis.com/projects/${PROD_NUMBER}/locations/global/workloadIdentityPools/github/attribute.repository_id/1367643959" \
  --project=natekramber-prod
```

The live condition accepts the OIDC subject of the environment `production` alone (D-63). No real token confirms that subject yet, so PR-6 tests it.

## Step 10: The checks

```sh
gcloud iam workload-identity-pools providers describe portfolio-pull-requests --location=global --workload-identity-pool=github --project=natekramber-preview --format='value(state,attributeCondition)'
gcloud projects get-iam-policy natekramber-prod --flatten='bindings[].members' --filter='bindings.members:natekramber-preview' --format='value(bindings.role)'
gcloud iam workload-identity-pools providers describe portfolio-production --location=global --workload-identity-pool=github --project=natekramber-prod --format='value(state,attributeCondition)'
gcloud iam service-accounts get-iam-policy hosting-preview@natekramber-preview.iam.gserviceaccount.com --project=natekramber-preview --flatten='bindings[].members' --format='value(bindings.role,bindings.members)'
gcloud iam service-accounts get-iam-policy hosting-live@natekramber-prod.iam.gserviceaccount.com --project=natekramber-prod --flatten='bindings[].members' --format='value(bindings.role,bindings.members)'
```

- The first command must print `ACTIVE` and the condition of step 7.
- The second command must print nothing. No account of the preview project can hold a role in the live project (D-56, G-10).
- The third command must print `ACTIVE` and the condition of step 9.
- The last two commands must each print one `roles/iam.workloadIdentityUser` binding to the `principalSet` of the pool in the same project.

## Run record

The session ran every step on 2026-09-14 (D-79). No step needed the owner.

| Item | Preview | Live |
|---|---|---|
| Project number | `573927778532` | `321332406577` |
| Default Hosting site | `https://natekramber-preview.web.app` | `https://natekramber-prod.web.app` |
| Billing account | none | none |
| Step 10 | passed | passed |

- Both projects enabled the six APIs of step 4 with no billing account.
- `firebase projects:addfirebase` returned no 403, and each default Hosting site got the project id.

## Step 11: The environment `production`

The live deploy job runs in the GitHub environment `production`, which accepts the `main` branch alone (D-63, D-85). The session creates it with two API calls:

```sh
echo '{"deployment_branch_policy":{"protected_branches":false,"custom_branch_policies":true}}' | gh api --method PUT repos/nkramber/portfolio/environments/production --input -
gh api --method POST repos/nkramber/portfolio/environments/production/deployment-branch-policies -f name=main -f type=branch
```

Then the owner opens Settings > Environments > production on GitHub. The owner clears "Allow administrators to bypass configured protection rules" and saves the protection rules. No API sets or reads that setting (GitHub REST API description, read 2026-09-14).

## Step 12: The custom domains

The Firebase CLI has no command for a custom domain. The session calls the Hosting API v1beta1 with the owner account. The API returns 403 without the header `x-goog-user-project`.

```sh
TOKEN=$(gcloud auth print-access-token)
BASE=https://firebasehosting.googleapis.com/v1beta1/projects/natekramber-prod/sites/natekramber-prod/customDomains
curl -X POST -H "Authorization: Bearer $TOKEN" -H "x-goog-user-project: natekramber-prod" -H "Content-Type: application/json" "$BASE?customDomainId=natekramber.com" --data '{}'
curl -X POST -H "Authorization: Bearer $TOKEN" -H "x-goog-user-project: natekramber-prod" -H "Content-Type: application/json" "$BASE?customDomainId=www.natekramber.com" --data '{"redirectTarget":"natekramber.com"}'
curl -H "Authorization: Bearer $TOKEN" -H "x-goog-user-project: natekramber-prod" "$BASE/natekramber.com"
curl -H "Authorization: Bearer $TOKEN" -H "x-goog-user-project: natekramber-prod" "$BASE/www.natekramber.com"
```

`www.natekramber.com` sends a 301 redirect to the apex (D-41). Each read gives `requiredDnsUpdates`, `ownershipState`, and `cert.verification.dns`.

## Step 13: The first DNS visit

The GoDaddy page sends HSTS with a `max-age` of two years. A browser with that policy shows a certificate error with no way past it. So the certificate comes first, and the A records change after it (D-82).

The owner adds three TXT records at GoDaddy and removes nothing:

| Type | Name | Value |
|---|---|---|
| TXT | `@` | `hosting-site=natekramber-prod` |
| TXT | `_acme-challenge` | the apex value of `cert.verification.dns` in step 12 |
| TXT | `_acme-challenge.www` | the `www` value of `cert.verification.dns` in step 12 |

Wait until both domains read `OWNERSHIP_ACTIVE` and `CERT_ACTIVE`.

## Step 14: The second DNS visit

The owner changes these records at GoDaddy:

| Action | Type | Name | Value |
|---|---|---|---|
| Remove | A | `@` | `76.223.105.230` |
| Remove | A | `@` | `13.248.243.5` |
| Remove | CNAME | `www` | `natekramber.com` |
| Add | A | `@` | `199.36.158.100` |
| Add | CNAME | `www` | `natekramber-prod.web.app` |

The two A records to remove serve a GoDaddy Website Builder site, not a parking page. If GoDaddy refuses to remove them, the owner first disconnects that site (D-83).

Then check the live domain:

```sh
make preview-check PREVIEW_URL=https://natekramber.com
```

On `natekramber.com`, the header check also compares the HSTS header of D-58.

## Rollback

The Firebase CLI has no rollback command (firebase-tools 15.30.0). Each run of `.github/workflows/deploy.yml` prints the name of its new version. The release history of the site in the Firebase console lists the same versions, and its "Roll back" action releases an earlier version again. `firebase hosting:clone` with the site, an earlier version, and the live channel does the same from the CLI.
