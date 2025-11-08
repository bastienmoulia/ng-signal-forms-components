# End-to-End Tests with Playwright

This directory contains end-to-end tests for the ng-signal-forms-components demo application using Playwright.

## Setup

Install Playwright and its dependencies:

```bash
npm install -D @playwright/test
npx playwright install
```

## Running Tests

### Run all tests

```bash
npx playwright test
```

### Run tests in headed mode (see browser)

```bash
npx playwright test --headed
```

### Run tests in UI mode (interactive)

```bash
npx playwright test --ui
```

### Run specific test file

```bash
npx playwright test e2e/form-validation.spec.ts
```

### Run tests in a specific browser

```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

## Test Structure

### `form-validation.spec.ts`

Tests for form validation functionality:
- Field validation rules
- Error message display
- Form submission
- Valid/invalid state handling

### `accessibility.spec.ts`

Tests for accessibility compliance:
- Keyboard navigation
- Screen reader support
- ARIA attributes
- Color contrast
- Semantic HTML structure

## Adding New Tests

1. Create a new `.spec.ts` file in the `e2e` directory
2. Import Playwright test utilities:
   ```typescript
   import { test, expect } from '@playwright/test';
   ```
3. Write your tests using Playwright API
4. Run tests to verify

## Best Practices

### Test Organization

- Group related tests using `test.describe()`
- Use `test.beforeEach()` for common setup
- Keep tests focused and independent
- Use descriptive test names

### Selectors

Prefer stable selectors:
- `page.locator('button[type="submit"]')` - by attribute
- `page.locator('text=Submit')` - by text content
- `page.getByRole('button', { name: 'Submit' })` - by ARIA role
- `page.getByLabel('Email')` - by label

Avoid:
- CSS classes that might change
- Deeply nested selectors
- XPath when possible

### Waiting

Playwright auto-waits for elements, but you can also:
- `await page.waitForSelector('selector')`
- `await page.waitForLoadState('networkidle')`
- `await expect(locator).toBeVisible()`

### Debugging

#### Debug a specific test

```bash
npx playwright test --debug
```

#### View test report

```bash
npx playwright show-report
```

#### Generate trace

```bash
npx playwright test --trace on
```

Then view the trace:

```bash
npx playwright show-trace trace.zip
```

## CI/CD Integration

The Playwright config is set up for CI environments:

- Uses `process.env.CI` to detect CI environment
- Retries failed tests 2 times on CI
- Runs tests serially on CI for stability
- Starts the dev server automatically

### GitHub Actions Example

```yaml
- name: Install dependencies
  run: npm ci

- name: Install Playwright Browsers
  run: npx playwright install --with-deps

- name: Run Playwright tests
  run: npx playwright test

- name: Upload test results
  if: always()
  uses: actions/upload-artifact@v3
  with:
    name: playwright-report
    path: playwright-report/
```

## Configuration

The Playwright configuration is in `playwright.config.ts` at the project root. Key settings:

- **Test directory**: `./e2e`
- **Base URL**: `http://localhost:4200`
- **Browsers**: Chromium, Firefox, WebKit, Mobile Chrome, Mobile Safari
- **Web server**: Automatically starts `npm start` before tests

## Resources

- [Playwright Documentation](https://playwright.dev)
- [Playwright Best Practices](https://playwright.dev/docs/best-practices)
- [Playwright API Reference](https://playwright.dev/docs/api/class-playwright)
- [Accessibility Testing with Playwright](https://playwright.dev/docs/accessibility-testing)
