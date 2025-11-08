# GitHub Pages Deployment Setup

This document describes the GitHub Actions workflow for deploying the demo application to GitHub Pages.

## Workflow Overview

The deployment workflow (`.github/workflows/deploy-demo.yml`) consists of four jobs:

1. **Test**: Runs unit tests to ensure code quality
2. **E2E**: Runs end-to-end tests using Playwright
3. **Build**: Builds both the library and demo application
4. **Deploy**: Deploys the demo application to GitHub Pages

## Triggering the Workflow

The workflow is triggered by:
- Push events to the `main` branch
- Manual workflow dispatch from the Actions tab

## GitHub Repository Configuration

To enable GitHub Pages deployment, configure the following in your GitHub repository settings:

### Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Build and deployment**, select:
   - **Source**: GitHub Actions

This allows the workflow to deploy to GitHub Pages using the `deploy-pages` action.

## Base URL Configuration

The demo application is configured to use the base URL `/ng-signal-forms-components/` to match the GitHub Pages URL structure. This is set in the workflow using an environment variable `BASE_HREF` and applied during the build with the `--base-href` flag.

If you fork this repository, you'll need to update the `BASE_HREF` environment variable in the workflow file to match your repository name.

## Manual Deployment

You can manually trigger a deployment:

1. Go to the **Actions** tab in your repository
2. Select the "Deploy Demo to GitHub Pages" workflow
3. Click **Run workflow**
4. Select the branch (typically `main`)
5. Click **Run workflow**

## Viewing the Deployed Demo

Once deployed, the demo will be available at:
https://bastienmoulia.github.io/ng-signal-forms-components/

## Troubleshooting

### Workflow Fails on Test Job
- Check the test logs in the Actions tab
- Run tests locally with `npm test`
- Fix any failing tests before pushing

### Workflow Fails on E2E Job
- Check the E2E test logs in the Actions tab
- Run E2E tests locally with `npm run e2e`
- Review the Playwright report artifact in the Actions tab for detailed test results
- Fix any failing E2E tests before pushing

### Workflow Fails on Build Job
- Ensure both the library and demo app build successfully locally
- Run `npm run build -- ng-dynamic-signal-form` followed by `npm run build -- demo --base-href /ng-signal-forms-components/`
- Check for any build errors in the Actions logs

### Deployment Succeeds but Site Shows 404
- Verify GitHub Pages is enabled in repository settings
- Ensure the source is set to "GitHub Actions"
- Check that the workflow completed successfully
- It may take a few minutes for the deployment to be live
