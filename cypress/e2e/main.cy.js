import loginData from "../fixtures/loginData";
import loginSelectors from "../../selectors/loginSelectors";
import CreateAssetSelectors from "../../selectors/createAssetSelectors";
import CreateAssetData from "../fixtures/createAssetData";

const { Email_Id, Password_Id } = loginData;

describe("Innova Inspection App", () => {

  beforeEach(() => {

    cy.session([Email_Id, Password_Id], () => {
      cy.visit("https://black-sky-03aa5f910.5.azurestaticapps.net/");
      cy.EnterText(loginSelectors.TXT_Email, loginData.Email_Id);
      cy.wait(2000);
      cy.Click(loginSelectors.BTN_Next);
      cy.wait(2000);
      cy.Click(loginSelectors.DRP_AuctionCompany);
      cy.Click(loginData.Auction_Company);
      cy.EnterText(loginSelectors.TXT_Password, loginData.Password_Id);
      cy.Click(loginSelectors.BTN_Login);
      cy.wait(2000);
      cy.xpath("//h1").should("contain", "Work Orders");
      cy.wait(2000);
    });
  });
  
  it("TC-01 - Verify the Homepage", () => {
    cy.visit("https://black-sky-03aa5f910.5.azurestaticapps.net/dashboard", {
      failOnStatusCode: false,
    });
    cy.xpath("//h1").should("contain", "Work Orders");
    cy.wait(2000);
  });

  it("TC-02 - Create Asset from In Progress Screen", () => {
    cy.visit("https://black-sky-03aa5f910.5.azurestaticapps.net/dashboard", {
      failOnStatusCode: false,
    });
    cy.Click(CreateAssetSelectors.Shadow_Card);
    cy.Click(CreateAssetSelectors.BTN_Plus);
    cy.Click(CreateAssetSelectors.DRP_SelectType);
    cy.Click(CreateAssetData.Select_Description);
    cy.EnterText(
      CreateAssetSelectors.TXT_SerialNumber,
      CreateAssetData.SerialNumber
    );
    cy.EnterText(
      CreateAssetSelectors.TXT_StockNumber,
      CreateAssetData.StockNumber
    );
    cy.EnterText(
      CreateAssetSelectors.TXT_AssetNumber,
      CreateAssetData.AssetNumber
    );
    cy.Click(CreateAssetSelectors.BTN_Create);
    cy.xpath("//h1").should("contain", "Work Orders");
  });
});
