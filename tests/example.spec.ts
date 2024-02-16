import { test, expect } from './axe-test';

const url = 'https://react-bootstrap.netlify.app/docs/components/progress/';
test('example using custom fixture', async ({ page, makeAxeBuilder }) => {
  await page.goto(url);

  const accessibilityScanResults = await makeAxeBuilder()
      // Automatically uses the shared AxeBuilder configuration,
      // but supports additional test-specific configuration too
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .include('body')
      .analyze();

      createHtmlReport({
        accessibilityScanResults,
        options: {
          projectKey: 'axe-audit',
          outputDir: 'reports/axe-audit',
          reportFileName: `${url.split('//')[3]}.html`,
        },
      });
      
  expect(accessibilityScanResults.violations).toEqual([]);
});
