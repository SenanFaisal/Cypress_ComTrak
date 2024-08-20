import PoolBuilderSelectors from '../../../Selectors/PoolBuilderSelectors.js'

class PublishPatientPool {
    CreateAndPublishPatientPool() {
      cy.visit('https://comtrak.qa.dmclinical.com/')
      cy.origin('https://comtrak.qa.dmclinical.com/',
  
        { args: PoolBuilderSelectors },
        ({ DRP_Leads, TXT_PoolName, Pool_Name, BTN_Create, TXT_Description, Description, BTN_Continue1, MIN_AgeSlider, MAX_AgeSlider, BTN_Continue2, DRP_IntendedStudy, IntendedStudy, BTN_Review, Verify_Name, Verify_Description, Verify_State1, Verify_State2, Verify_Status, Verify_Age, Verify_Study, BTN_Cross, BTN_SaveDraft, BTN_Drafts, BTN_Published, BTN_CreatePool, EYE_ReviewPool, BTN_ExitDiscard }
        ) => {
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
            .type(Pool_Name)
          cy.get(TXT_Description)
            .type(Description)
          cy.get(BTN_Continue1).click()
          cy.wait(2000)
          cy.contains('Select State').click()
          cy.wait(2000)
          cy.contains('New York').click()
          cy.wait(1000)
          cy.contains('New Jersey').click()
          cy.wait(2000)
          cy.get(MIN_AgeSlider)
            .focus()
            .type('{rightArrow}'.repeat(6))
          cy.get(MAX_AgeSlider)
            .focus()
            .type('{leftArrow}'.repeat(2))
          cy.wait(2000)
          cy.contains('Select Status').click()
          cy.wait(2000)
          cy.contains('Pre Booking').click()
          cy.wait(2000)
          cy.get(BTN_Continue2).contains(' Continue ').click()
          cy.wait(2000)
          cy.get(DRP_IntendedStudy).click({ force: true })
          cy.wait(2000)
          cy.get(IntendedStudy).click({ force: true })
          cy.wait(2000)
          cy.get(BTN_CreatePool).click()
          cy.wait(2000)
          cy.get('tr:nth-child(1) > td:nth-child(3)').should('contain', Pool_Name)
          cy.wait(1000)
          cy.get(EYE_ReviewPool).click()
          cy.get('[id="container "]').should('contain', ' Review Patients Pool ')
          cy.wait(1000)
          cy.get(Verify_Name).should('contain', Pool_Name)
          cy.get(Verify_Description).should('contain', Description)
          cy.get(Verify_State1).should('contain', ' New York ')
          cy.get(Verify_State2).should('contain', ' New Jersey ')
          cy.get(Verify_Status).should('contain', ' Pre Booking ')
          cy.get(Verify_Age).should('contain', '6 years - 98 years')
          cy.get(Verify_Study).should('contain', ' Moderna 1273-P301 ')
          cy.wait(2000)
          cy.get(BTN_Cross).click()
          cy.wait(1000)
        })
    }
}
export default new PublishPatientPool