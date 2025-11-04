# NgSignalFormsComponents

This project demonstrates the usage of the `ng-signal-forms` library, which provides form field components for Angular's signal-based forms.

## Project Structure

This monorepo contains:

- **ng-signal-forms** - An Angular library with reusable form field components (located in `projects/ng-signal-forms/`)
- **Demo Application** - A demo application showing how to use the library components

## Library: ng-signal-forms

The library includes form field components that work seamlessly with Angular's signal-based forms:

- InputText
- InputEmail  
- InputPassword
- InputDate
- InputTime
- Textarea
- FieldTemplate (base component)

See the [library README](projects/ng-signal-forms/README.md) for detailed usage instructions.

## Building the Library

To build the library:

```bash
ng build ng-signal-forms
```

## Development server

To start a local development server for the demo app, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Building

To build the demo application:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests, use the following command:

```bash
ng test
```

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
