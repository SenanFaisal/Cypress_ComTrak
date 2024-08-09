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
import "cypress-real-events";
import 'cypress-wait-until';

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

// cypress/support/commands.js
Cypress.Commands.add('setAuthToken', (token) => {
  window.localStorage.setItem('jwtToken', token);
})

// cypress/support/commands.js
Cypress.Commands.add('setSessionId', (sessionId) => {
  cy.setCookie('sessionId', sessionId);
})

// cypress/support/commands.js
Cypress.Commands.add('setSessionCookies', (cookies) => {
  cookies.forEach((cookie) => {
    cy.setCookie(cookie.name, cookie.value, { domain: cookie.domain, secure: true });
  })
})

Cypress.Commands.add('setSessionStorage', (cookies) => {
  cookies.forEach((cookie) => {
    // cy.setCookie(cookie.name, cookie.value, { domain: cookie.domain, secure: true });
    window.sessionStorage.setItem(cookie.name, cookie.value, { domain: cookie.domain, secure: true })
  })
})

// cypress/support/commands.js
Cypress.Commands.add('overrideWindowOpen', () => {
  cy.window().then((win) => {
    cy.stub(win, 'open').callsFake((url) => {
      win.location.href = url;
    })
  })

  // custom command for sign up
  Cypress.Commands.add('signUp', () => {
  })
})