import fs from 'fs';
import { test } from '@playwright/test';
import { createHtmlReport } from 'axe-html-reporter';
import AxeBuilder from '@axe-core/playwright';

test('AccessibilityAudit', async ({ page }) => {
  const route = 'react-bootstrap.netlify.app';
  await page.goto(`https://${route}/docs/components/progress/`);

  const failingTags = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22a', 'wcag22aa'];
  const feedbackTags = ['wcag2aaa', 'best-practice'];
  const allTags = failingTags.concat(feedbackTags);
  const results = await new AxeBuilder({ page })
    .withTags(allTags)
    .include('main')
    .analyze();

  if (results.violations.length) {
    const violationsByTag = {};
    const warnings = {}
  
    results.violations.forEach(violation => {
      violation.tags.forEach(tag => {
        if (!allTags.includes(tag)) return;
        if (!violationsByTag[tag]) {
          violationsByTag[tag] = [];
        }
        violationsByTag[tag].push(violation);
        Object.keys(violationsByTag).forEach(tag => {
          if (failingTags.includes(tag)) {
            console.error(`${tag} ${violationsByTag[tag].length} violations`);
            // expect(violationsByTag[tag].length).toEqual([]);
          } else {
            warnings[tag] = violationsByTag[tag];
          }
        })
        if (Object.keys(warnings).length) {
          console.warn(warnings);
        }
      });
    });
  }
  // expect(results.violations).toEqual([]); // 5
  // Generate and save report
  const reportHTML = createHtmlReport({
    results,
    options: {
      projectKey: route.replace(/\s+/g, '-').toLowerCase(),
      doNotCreateReportFile: true, // Prevents file creation
    },
  });

  console.log(reportHTML);

  fs.writeFileSync('reports/your-report.html', reportHTML);
});
