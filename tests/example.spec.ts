import { test, expect } from './axe-test';

test('example using custom fixture', async ({ page, makeAxeBuilder }) => {
  await page.goto('https://react-bootstrap.netlify.app/docs/components/progress/');

  const accessibilityScanResults = await makeAxeBuilder()
      // Automatically uses the shared AxeBuilder configuration,
      // but supports additional test-specific configuration too
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .include('body')
      .analyze();

  expect(accessibilityScanResults.violations).toEqual([]);
});