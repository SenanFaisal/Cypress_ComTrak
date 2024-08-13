import PoolBuilderSelectors from '../../../Selectors/PoolBuilderSelectors.js'

class ExistingNameCheck {
  //Verify the pool with existing name cannot be created
  ExistingPoolNameCheck() {
    cy.visit('https://comtrak.qa.dmclinical.com/')
    cy.origin('https://comtrak.qa.dmclinical.com/',

      { args: PoolBuilderSelectors },
      ({ DRP_Leads, TXT_PoolName, Pool_Name, BTN_Create, TXT_Description, Description, BTN_Continue1, BTN_Continue2, DRP_IntendedStudy, IntendedStudy, BTN_Review, Verify_Name, Verify_Description, Verify_State1, Verify_State2, Verify_Status, Verify_Age, Verify_Study, BTN_Cross, BTN_SaveDraft, BTN_Drafts, BTN_Published, BTN_CreatePool, EYE_ReviewPool }
      ) => {
        let storedValue
        cy.wait(5000)
        cy.contains(' Sign In').click()
        cy.wait(5000)
        cy.get(DRP_Leads).click()
        cy.wait(2000)
        cy.contains('Patient Pool Builder ').click()
        cy.wait(2000)
        cy.get(BTN_Create).click()
        cy.wait(2000)
        cy.get(TXT_PoolName)
          .type('Auto-qa Test 929')
        cy.get(TXT_Description)
          .type(Description)
        cy.get(BTN_Continue1).click()
        cy.wait(5000)


        cy.get('div.stat-card.muted.gray-border > div > h2').then(($el) => {
          storedValue = $el.text();
          cy.log(storedValue);
        });

      })
  }
}
export default new ExistingNameCheck