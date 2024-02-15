import { checkA11y } from 'cypress-axe-core';

describe('Cypress Accessibility Audit', () => {
  before(() => {
    cy.visit( Cypress.env('url') ); // Use environment variable for URL
  });

  it('should have accessible content', () => {
    // Audit entire page
    cy.checkA11y();

    // OR: Audit specific elements (e.g., main content area)
    // cy.get('#main-content').checkA11y();

    // Assert based on violations (example using shouldFailFn)
    // cy.on('axe.run', (failures) => {
    //   const criticalViolations = failures.filter(v => v.impact === 'critical');
    //   expect(criticalViolations.length).toBe(0);
    // });
  });
});