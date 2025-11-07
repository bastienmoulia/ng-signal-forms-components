# ng-signal-forms-components

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

https://bastienmoulia.github.io/ng-signal-forms-components/

## Installation (library)

The package is not yet published to npm (version `0.0.1`). To consume directly from source:

```bash
git clone https://github.com/bastienmoulia/ng-signal-forms-components.git
cd ng-signal-forms-components
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

```bash
npm test
```

The setup uses Angular CLI & Karma for unit tests. (No e2e configured.)

## Publishing (manual)

```bash
ng build ng-dynamic-signal-form
cd dist/ng-dynamic-signal-form
npm publish --access public
```

Ensure peer dependencies match your target Angular version.

## Deployment

See `DEPLOYMENT.md` for GitHub Pages workflow details. The demo app is built with a base href of `/ng-signal-forms-components/`.

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

## Roadmap

- Validation helper components
- Layout utilities (field groups, tabs)
- Accessibility documentation & ARIA patterns
- E2E testing with Playwright
- Publishing the package to npm

## License

MIT
