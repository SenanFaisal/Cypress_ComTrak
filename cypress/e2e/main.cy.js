describe("Innova Inspection", () => {
  it("Login to the App", () => {
    cy.visit("https://black-sky-03aa5f910.5.azurestaticapps.net/");
    // cy.xpath('//a[text()="Go to Home"]').click();
    cy.xpath('//input[@id="email"]').type(
      ""
    );
    cy.wait(2000);
    cy.xpath('//button[@type="submit"]').click();
    cy.wait(2000);
    cy.xpath('//span[text()="Select"]').click();
    cy.xpath('//li[text()="dev-db"]').click();
    cy.xpath('//input[@id="password"]').type("");
    cy.xpath('//button[@type="submit"]').click();
    cy.wait(2000);
    cy.xpath('//button[text()="Scheduled"]').click();
    cy.wait(2000);
    cy.xpath('//button[text()="Completed"]').click();
    cy.wait(2000);
    cy.xpath('(//img[@alt="Menu Icon"])[1]').click();
    cy.xpath('//img[@alt="Logout Icon"]').click();
    cy.wait(2000);
  });
});
