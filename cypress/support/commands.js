// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
require('cypress-xpath');

// Custom Command For Click
Cypress.Commands.add('Click', (locator) => {
    cy.log('------ Click : ' + locator + ' ------')
    cy.xpath(locator).scrollIntoView()
    cy.xpath(locator).click({ multiple: true })
  })
  
  // Custom Command For Enter Text
  Cypress.Commands.add('EnterText', (locator, text) => {
    cy.log('------ Enter Text : ' + locator + ' ------')
    cy.xpath(locator).scrollIntoView()
    cy.xpath(locator).type(text).should('have.value', text)
  })