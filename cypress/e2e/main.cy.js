describe('Innova Inspection', () => {
  it('Login to the App', () => {
    cy.visit('https://black-sky-03aa5f910.5.azurestaticapps.net/');
    cy.xpath('//a[text()="Go to Home"]').click();
    cy.xpath('//input[@id="email"]').type('hozefa.tankiwala@matechnologies.net');
    cy.xpath('//button[@type="submit"]').click();
    
  })
})