# ng-dynamic-signal-form

Dynamic, signal-driven Angular form field components with a consistent template wrapper and a growing catalogue of HTML input types. This repository contains:

- The component library: `ng-dynamic-signal-form`
- A demo application showcasing all field types

> Built for Angular v21 RC using standalone components, signals-based form state (`@angular/forms/signals`), and strict TypeScript.

## Features

- 20+ input/select/textarea field components (text, email, date, time, number, checkbox, radio, range, file, color, month, week, datetime-local, search, tel, url, hidden, password, select, textarea)
- Unified field template (`NgdsfFieldTemplate`) for label, placeholder and custom projected content
- Strongly typed field enum (`NgdsfFieldType`) and params interfaces for per-field configuration
- Signal-centric integration: each field receives a `() => FieldState` accessor for reactive state
- Standalone, tree-shakeable Angular components (no NgModules)
- Library build & demo app build via standard Angular CLI

## Live Demo

https://bastienmoulia.github.io/ng-dynamic-signal-form/

## Installation (library)

The package is not yet published to npm (version `0.0.1`). To consume directly from source:

```bash
git clone https://github.com/bastienmoulia/ng-dynamic-signal-form.git
cd ng-dynamic-signal-form
npm install
ng build ng-dynamic-signal-form
```

Then reference the dist output (`dist/ng-dynamic-signal-form`) or use a workspace project reference.

## Quick Usage

Import the components you need (they are standalone) and define your form params:

```ts
import { Component } from '@angular/core';
import { NgdsfFields, NgdsfFieldType, NgdsfFormParams } from 'ng-dynamic-signal-form';

@Component({
  selector: 'example-form',
  imports: [NgdsfFields],
  template: `
    <form>
      <ngdsf-fields [params]="params" [form]="formSignal" />
    </form>
  `,
})
export class ExampleFormComponent {
  params: NgdsfFormParams = {
    username: { type: NgdsfFieldType.InputText, label: 'Username', placeholder: 'Your name' },
    email: { type: NgdsfFieldType.InputEmail, label: 'Email' },
  };
  // formSignal: define using @angular/forms/signals API
  formSignal = /* your form signal */ null as any;
}
```

Each concrete field component (e.g. `NgdsfInputText`) accepts:

```ts
params = {
	label?: string;
	placeholder?: string;
	disabled?: boolean;
	readonly?: boolean;
	className?: string;
	// plus field‑specific extras like minlength, maxlength, pattern etc.
};
```

## Public API Surface

Exported from `projects/ng-dynamic-signal-form/src/public-api.ts`:

- `NgdsfFields` – orchestrates rendering based on a form signal structure
- `NgdsfFieldTemplate` – wrapper/template component
- All individual field components: `NgdsfInputText`, `NgdsfInputEmail`, `NgdsfInputDate`, ... `NgdsfTextarea`, `NgdsfSelect`
- `NgdsfFieldType` enum & associated interfaces

## Development

Install dependencies and start the demo:

```bash
npm install
npm start
```

Navigate to `http://localhost:4200/`.

### Library Build (watch)

```bash
npm run build-lib
```

### Full Build

```bash
npm run build
```

### Testing

#### Unit Tests

```bash
npm test
```

The setup uses Angular CLI & Vitest for unit tests.

#### End-to-End Tests

```bash
npm run e2e
```

E2E tests use Playwright. For more information, see the [e2e/README.md](./e2e/README.md).

Additional E2E commands:

- `npm run e2e:ui` - Run tests in interactive UI mode
- `npm run e2e:headed` - Run tests in headed mode (see browser)
- `npm run e2e:report` - View test report

## Publishing to npm

### Prerequisites

Before publishing, ensure:

1. You have an npm account with publishing permissions
2. You are logged in to npm: `npm login`
3. The package version is updated in `projects/ng-dynamic-signal-form/package.json`
4. All tests pass: `npm test`
5. The library builds successfully: `ng build ng-dynamic-signal-form`
6. Peer dependencies match your target Angular version

### Version Management

Update the version following [Semantic Versioning](https://semver.org/):

- **Patch release** (0.0.X): Bug fixes, minor improvements
- **Minor release** (0.X.0): New features, backward compatible
- **Major release** (X.0.0): Breaking changes

```bash
cd projects/ng-dynamic-signal-form
npm version patch  # or minor, or major
```

### Build and Publish

1. **Build the library**

```bash
ng build ng-dynamic-signal-form
```

2. **Verify the build output**

```bash
cd dist/ng-dynamic-signal-form
ls -la  # Check that all files are present
cat package.json  # Verify package.json is correct
```

3. **Test the package locally (optional but recommended)**

```bash
npm pack
# This creates a .tgz file you can install in another project
```

4. **Publish to npm**

```bash
npm publish --access public
```

For a dry run without actually publishing:

```bash
npm publish --dry-run
```

### Post-Publishing

After publishing:

1. Verify the package on npm: https://www.npmjs.com/package/ng-dynamic-signal-form
2. Create a GitHub release with release notes
3. Update the README with the new version number
4. Tag the release in git:

```bash
git tag -a v0.0.2 -m "Release version 0.0.2"
git push origin v0.0.2
```

### Automated Publishing (Future)

Consider setting up automated publishing using GitHub Actions:

```yaml
# .github/workflows/publish.yml
name: Publish to npm

on:
  release:
    types: [published]

jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '20'
          registry-url: 'https://registry.npmjs.org'
      - run: npm ci
      - run: npm test
      - run: ng build ng-dynamic-signal-form
      - run: cd dist/ng-dynamic-signal-form && npm publish --access public
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

### Troubleshooting

**Package name already exists:**

- Choose a unique package name in `package.json`
- Or request ownership of the existing package from npm support

**Authentication errors:**

- Run `npm login` and verify your credentials
- Ensure your npm account has 2FA configured if required

**Version conflicts:**

- Ensure you've bumped the version number
- You cannot republish the same version

**Missing files in package:**

- Check the `files` array in `package.json`
- Verify `.npmignore` is not excluding necessary files

## Accessibility

This library is built with accessibility in mind, following WCAG 2.1 guidelines and implementing appropriate ARIA patterns. For detailed accessibility information, best practices, and testing guidelines, see [ACCESSIBILITY.md](./ACCESSIBILITY.md).

## Deployment

See `DEPLOYMENT.md` for GitHub Pages workflow details. The demo app is built with a base href of `/ng-dynamic-signal-form/`.

## Contributing

1. Fork & clone
2. Create a feature branch
3. Add/modify components (keep them standalone & signal-based)
4. Add unit tests (`*.spec.ts` alongside component) & ensure `npm test` passes
5. Open a pull request

### Guidelines

- Prefer signals over RxJS for local component state
- Keep components focused; avoid large multipurpose components
- Use `input()` functions instead of decorators
- Avoid `@HostBinding` / `@HostListener`; use `host` metadata if needed

## License

MIT
