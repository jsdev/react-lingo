// import cypress and cypress-axe
import 'cypress-axe'
import { expect } from 'chai'

type AxeFixture = {
  // define the type for the makeAxeBuilder function
  makeAxeBuilder: () => Cypress.Chainable
};

// extend the Cypress.Chainable interface with the axe commands
declare global {
  namespace Cypress {
    interface Chainable {
      injectAxe(): Chainable<Element>
      checkA11y(options?: any, violationCallback?: (violations: any[]) => void, skipFailures?: boolean): Chainable<Element>
      configureAxe(options?: any): Chainable<Element>
    }
  }
}

// create a custom test function that uses the makeAxeBuilder function
export const test = (title: string, fn: (fixture: AxeFixture) => void) => {
  it(title, () => {
    // inject axe-core into the page
    cy.injectAxe()
 // create a function that returns a chainable object with the checkA11y command
 const makeAxeBuilder = () => cy.checkA11y({
  // configure the axe options here
  runOnly: {
    type: 'tag',
    values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']
  },
  //exclude: [['#commonly-reused-element-with-known-issue']]
})
// pass the makeAxeBuilder function to the test function
fn({ makeAxeBuilder })
})
}