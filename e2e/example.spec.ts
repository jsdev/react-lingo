// import test and expect from axe-test.ts
import { test, expect } from './axe-test';

test('example using custom fixture', ({ cy, makeAxeBuilder }) => {
  // visit the URL to test
  cy.visit('https://react-bootstrap.netlify.app/docs/components/progress/');

  // use the makeAxeBuilder function to check accessibility
  makeAxeBuilder().then((violations) => {
    // assert that there are no violations
    expect(violations).to.have.length(0);
  });
});