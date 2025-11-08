import { test, expect } from '@playwright/test';

test.describe('Form Validation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display form fields', async ({ page }) => {
    // Check that main form elements are visible
    await expect(page.locator('input[type="text"]').first()).toBeVisible();
    await expect(page.locator('input[type="email"]')).toBeVisible();
    await expect(page.locator('input[type="password"]')).toBeVisible();
  });

  test('should show validation errors when fields are touched and empty', async ({ page }) => {
    // Focus and blur email field to trigger touched state
    const emailInput = page.locator('input[type="email"]');
    await emailInput.click();
    await emailInput.blur();

    // Check for validation error
    await expect(page.locator('text=Email is required')).toBeVisible();
  });

  test('should show email format validation error', async ({ page }) => {
    // Enter invalid email
    const emailInput = page.locator('input[type="email"]');
    await emailInput.fill('invalid-email');
    await emailInput.blur();

    // Check for format validation error
    await expect(page.locator('text=Enter a valid email address')).toBeVisible();
  });

  test('should show password validation errors', async ({ page }) => {
    // Enter short password
    const passwordInput = page.locator('input[type="password"]');
    await passwordInput.fill('short');
    await passwordInput.blur();

    // Check for password validation error
    await expect(
      page.locator('text=/Password must be at least 8 characters/')
    ).toBeVisible();
  });

  test('should clear validation errors when valid input is provided', async ({ page }) => {
    // Focus and blur email field to show error
    const emailInput = page.locator('input[type="email"]');
    await emailInput.click();
    await emailInput.blur();

    // Enter valid email
    await emailInput.fill('user@example.com');
    await emailInput.blur();

    // Error should not be visible
    await expect(page.locator('text=Email is required')).not.toBeVisible();
  });

  test('should enable submit button when form is valid', async ({ page }) => {
    // Fill all required fields with valid data
    await page.locator('input[type="email"]').fill('user@example.com');
    await page.locator('input[type="password"]').fill('Password123');
    await page.locator('input[type="date"]').fill('2024-12-31');
    await page.locator('input[type="time"]').fill('14:30');
    await page.locator('select').selectOption('us');
    await page.locator('textarea').fill('Test message');

    // Submit button should be enabled (assuming it exists)
    const submitButton = page.locator('button[type="submit"]');
    await expect(submitButton).toBeEnabled();
  });

  test('should submit form with valid data', async ({ page }) => {
    // Fill all required fields
    await page.locator('input[type="email"]').fill('user@example.com');
    await page.locator('input[type="password"]').fill('Password123');
    await page.locator('input[type="date"]').fill('2024-12-31');
    await page.locator('input[type="time"]').fill('14:30');
    await page.locator('select').selectOption('us');
    await page.locator('textarea').fill('Test message');

    // Listen for console logs
    const consolePromise = page.waitForEvent('console', (msg) =>
      msg.text().includes('Logging in with:')
    );

    // Submit form
    await page.locator('button[type="submit"]').click();

    // Wait for console log
    const consoleMsg = await consolePromise;
    expect(consoleMsg.text()).toContain('Logging in with:');
  });
});
