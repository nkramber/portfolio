# Deploy setup

Status: PR-5 draft. Written 2026-09-13 in ASD-STE100.

This file holds the one-time setup of Google Cloud and Firebase for `natekramber.com`. The owner runs each command, because the session creates no cloud resource (D-34). PR-6 adds the deploy on merge, the domain, and the rollback steps.

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

CAUTION: a project id is global and permanent. If `gcloud projects create` refuses an id, stop and tell the session (D-51, D-56).

CAUTION: copy each command in full. This file has no placeholder to replace. In decktome, a pasted placeholder once wrote over a real value (decktome F-65).

## Step 1: The gcloud configuration

The configuration keeps each command off decktome-prod and every other project (D-52).

```sh
gcloud config configurations create natekramber
gcloud auth login
gcloud config list --format='value(core.account)'
```

The last command must print the account that owns decktome-prod. This file does not name the account (hard rule 10).

Every later `gcloud` command names its project with `--project`, so the active project cannot change its target (D-54). Before each step, run this check:

```sh
gcloud config configurations list --filter=is_active=true --format='value(name,properties.core.account)'
```

The output must show `natekramber` and the owner account.

## Step 2: The Firebase CLI login

```sh
npm exec --prefix deploy -- firebase login:list
```

The output must show the owner account. If it shows another account, run `npm exec --prefix deploy -- firebase login` first.

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
npm exec --prefix deploy -- firebase projects:addfirebase natekramber-preview
npm exec --prefix deploy -- firebase hosting:sites:list --project natekramber-preview
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
npm exec --prefix deploy -- firebase projects:addfirebase natekramber-prod
npm exec --prefix deploy -- firebase hosting:sites:list --project natekramber-prod
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
```

The first command must print `ACTIVE` and the condition of step 7. The second command must print nothing. No account of the preview project can hold a role in the live project (D-56, G-10).
