# NgSignalForms

An Angular library providing form field components that work with Angular's signal-based forms.

## Components

This library includes the following form field components:

- `InputText` - Text input field
- `InputEmail` - Email input field
- `InputPassword` - Password input field
- `InputDate` - Date picker field
- `InputTime` - Time picker field
- `Textarea` - Multi-line text area field
- `FieldTemplate` - Base template component for all field types

## Installation

Install the library in your Angular project:

```bash
npm install ng-signal-forms
```

## Usage

Import the components you need in your Angular component:

```typescript
import { Component, signal } from '@angular/core';
import { form, required, email } from '@angular/forms/signals';
import { InputText, InputEmail, FieldParams } from 'ng-signal-forms';

@Component({
  selector: 'app-my-form',
  imports: [InputText, InputEmail],
  template: `
    <form (submit)="onSubmit($event)">
      <lib-input-text [field]="myForm.name" [params]="params()['name']" />
      <lib-input-email [field]="myForm.email" [params]="params()['email']" />
      <button type="submit">Submit</button>
    </form>
  `
})
export class MyFormComponent {
  model = signal({ name: '', email: '' });
  
  params = signal<{ [key: string]: FieldParams }>({
    name: { label: 'Name', placeholder: 'Enter your name' },
    email: { label: 'Email', placeholder: 'Enter your email' }
  });
  
  myForm = form(this.model, (p) => {
    required(p.name, { message: 'Name is required' });
    required(p.email, { message: 'Email is required' });
    email(p.email, { message: 'Enter a valid email address' });
  });
  
  onSubmit(event: Event) {
    event.preventDefault();
    // Handle form submission
  }
}
```

## Building

To build the library, run:

```bash
ng build ng-signal-forms
```

This command will compile your project, and the build artifacts will be placed in the `dist/` directory.

## Running unit tests

To execute unit tests, use the following command:

```bash
ng test
```

## License

MIT
