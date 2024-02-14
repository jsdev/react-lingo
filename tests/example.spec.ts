import { test, expect } from './axe-test';

test('example using custom fixture', async ({ page, makeAxeBuilder }) => {
  await page.goto('https://playwright.dev');

  const accessibilityScanResults = await makeAxeBuilder()
      // Automatically uses the shared AxeBuilder configuration,
      // but supports additional test-specific configuration too
      .include('body')
      .analyze();

  expect(accessibilityScanResults.violations).toEqual([]);
});
