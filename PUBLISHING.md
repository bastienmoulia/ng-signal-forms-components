# Publishing Guide for ng-dynamic-signal-form

This guide provides detailed instructions for publishing the `ng-dynamic-signal-form` library to npm.

## Pre-Publish Checklist

Before publishing a new version, complete this checklist:

- [ ] All unit tests pass (`npm test`)
- [ ] All E2E tests pass (if applicable) (`npm run e2e`)
- [ ] Library builds without errors (`ng build ng-dynamic-signal-form`)
- [ ] Documentation is up to date (README.md, CHANGELOG.md)
- [ ] Version number has been bumped appropriately
- [ ] Peer dependencies are correct for target Angular version
- [ ] You are logged in to npm (`npm whoami`)
- [ ] You have write access to the package on npm

## Version Numbering

Follow [Semantic Versioning](https://semver.org/) (MAJOR.MINOR.PATCH):

### Patch Release (0.0.X)

For backward-compatible bug fixes:

```bash
cd projects/ng-dynamic-signal-form
npm version patch
```

Examples:

- Bug fixes
- Documentation updates
- Performance improvements
- Internal refactoring

### Minor Release (0.X.0)

For new backward-compatible features:

```bash
cd projects/ng-dynamic-signal-form
npm version minor
```

Examples:

- New field components
- New validation helpers
- New layout utilities
- New optional parameters

### Major Release (X.0.0)

For breaking changes:

```bash
cd projects/ng-dynamic-signal-form
npm version major
```

Examples:

- Removing or renaming public APIs
- Changing component signatures
- Updating to new major Angular version
- Removing deprecated features

## Publishing Steps

### 1. Prepare the Release

Update the CHANGELOG.md (if it exists):

```markdown
## [0.0.2] - 2024-12-07

### Added

- NgdsfFieldErrors component for field validation display
- NgdsfFormErrors component for form-level error summary
- NgdsfFieldGroup component for grouping related fields
- NgdsfTabs and NgdsfTabPanel components for tabbed layouts

### Changed

- Updated README with new component documentation

### Fixed

- Minor bug fixes in field template
```

### 2. Update Version

From the project root:

```bash
cd projects/ng-dynamic-signal-form
npm version <patch|minor|major>
cd ../..
```

This updates `package.json` and creates a git tag.

### 3. Build the Library

```bash
ng build ng-dynamic-signal-form --configuration production
```

Verify the build:

```bash
cd dist/ng-dynamic-signal-form
ls -la
```

You should see:

- `package.json` - Package manifest
- `README.md` - Documentation
- `*.d.ts` - TypeScript type definitions
- `esm2022/` - ES2022 modules
- `fesm2022/` - Flattened ES2022 modules

### 4. Test the Package Locally (Optional)

Create a tarball:

```bash
cd dist/ng-dynamic-signal-form
npm pack
```

This creates `ng-dynamic-signal-form-0.0.2.tgz`. Test it in a separate Angular project:

```bash
# In another Angular project
npm install /path/to/ng-dynamic-signal-form-0.0.2.tgz
```

### 5. Dry Run

Test publishing without actually publishing:

```bash
cd dist/ng-dynamic-signal-form
npm publish --dry-run --access public
```

Review the output to ensure all files are included.

### 6. Publish to npm

**For the first time:**

```bash
npm login
# Enter your npm credentials
```

**Publish the package:**

```bash
cd dist/ng-dynamic-signal-form
npm publish --access public
```

The `--access public` flag is required for scoped packages that should be publicly available.

### 7. Verify Publication

1. Check the package page: https://www.npmjs.com/package/ng-dynamic-signal-form
2. Verify the version is correct
3. Check that README is displayed properly
4. Install the package in a test project:

```bash
npm install ng-dynamic-signal-form
```

### 8. Create GitHub Release

1. Go to: https://github.com/bastienmoulia/ng-dynamic-signal-form/releases/new
2. Select the version tag created earlier (e.g., `v0.0.2`)
3. Add release title: `v0.0.2`
4. Add release notes (copy from CHANGELOG.md)
5. Publish the release

### 9. Update Main README

Update the README.md version references if needed:

```markdown
## Installation

\`\`\`bash
npm install ng-dynamic-signal-form@latest
\`\`\`
```

### 10. Commit and Push

```bash
git add .
git commit -m "Release version 0.0.2"
git push origin main
git push --tags
```

## Troubleshooting

### Error: "You do not have permission to publish"

**Solution:**

1. Verify you're logged in: `npm whoami`
2. Check package access on npmjs.com
3. Contact the package owner to grant you access

### Error: "Cannot publish over existing version"

**Solution:**
You need to bump the version number. You cannot republish the same version.

```bash
cd projects/ng-dynamic-signal-form
npm version patch
```

### Error: "Package name too similar to existing package"

**Solution:**
npm may reject packages with names too similar to existing popular packages. Choose a more unique name.

### Missing Files in Published Package

**Solution:**
Check what files are included:

```bash
npm pack
tar -xzf ng-dynamic-signal-form-*.tgz
cd package
ls -R
```

Add files to the `files` array in `ng-package.json` or check `.npmignore`.

### Wrong Angular Version Compatibility

**Solution:**
Update peer dependencies in `package.json`:

```json
"peerDependencies": {
  "@angular/common": "^21.0.0",
  "@angular/core": "^21.0.0"
}
```

## Automated Publishing with GitHub Actions

For automated publishing on release, create `.github/workflows/publish.yml`:

```yaml
name: Publish to npm

on:
  release:
    types: [published]

jobs:
  build-and-publish:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'
          registry-url: 'https://registry.npmjs.org'

      - name: Install dependencies
        run: npm ci

      - name: Run tests
        run: npm test

      - name: Build library
        run: npx ng build ng-dynamic-signal-form --configuration production

      - name: Publish to npm
        run: |
          cd dist/ng-dynamic-signal-form
          npm publish --access public
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

### Setting up NPM_TOKEN

1. Go to https://www.npmjs.com/settings/YOUR_USERNAME/tokens
2. Create a new "Automation" token
3. Copy the token
4. Go to GitHub repository Settings > Secrets > Actions
5. Add a new secret named `NPM_TOKEN` with the token value

## Best Practices

### 1. Maintain a CHANGELOG

Keep a CHANGELOG.md file documenting all changes. Use the [Keep a Changelog](https://keepachangelog.com/) format.

### 2. Write Release Notes

Always write meaningful release notes for GitHub releases. Include:

- What's new
- What changed
- Breaking changes (if any)
- Migration guide (for major versions)

### 3. Test Before Publishing

Always test the package locally before publishing. Install it in a sample project and verify:

- Imports work correctly
- Components render properly
- Types are available
- No console errors

### 4. Follow Semantic Versioning

Strictly follow semantic versioning to avoid breaking user applications:

- MAJOR: Breaking changes
- MINOR: New features, backward compatible
- PATCH: Bug fixes, backward compatible

### 5. Keep Dependencies Updated

Regularly update dependencies, especially security updates. Use:

```bash
npm outdated
npm audit
```

### 6. Deprecate Gradually

When removing features:

1. Mark as deprecated in a minor version
2. Update documentation with migration guide
3. Remove in next major version

```typescript
/**
 * @deprecated Use NgdsfNewComponent instead. Will be removed in v2.0.0
 */
export class NgdsfOldComponent {
  // ...
}
```

## Support and Maintenance

### Long-Term Support (LTS)

Consider providing LTS for major versions:

- Security fixes for 12 months after major release
- Critical bug fixes for 6 months
- New features only in current major version

### Responding to Issues

Monitor GitHub issues and npm issues regularly:

- Respond to bug reports within 48 hours
- Label issues appropriately (bug, feature, question)
- Link PRs to related issues
- Update documentation based on common questions

## Resources

- [npm Publishing Guide](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry)
- [Semantic Versioning](https://semver.org/)
- [Keep a Changelog](https://keepachangelog.com/)
- [Angular Package Format](https://angular.io/guide/angular-package-format)
