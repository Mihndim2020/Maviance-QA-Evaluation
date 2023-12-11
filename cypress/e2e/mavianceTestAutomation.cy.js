describe("Login page", () => {
  beforeEach(() => {
    cy.visit("https://adminbom.smobilpay.integration.maviance.info/login");
  });

  it("User logs in with a valid username and password", () => {
    // data-test selectors is the best way to go, here I am using ID due to time contraints.
    cy.get("#username").type("vbwebagent");
    cy.get("#password").type("1234.Com");
    cy.get(".MuiGrid-container > :nth-child(3)").click();
    cy.url().should(
      "eq",
      "https://adminbom.smobilpay.integration.maviance.info/"
    );
  });

  it("User navigate to the dashboard when he click on th sign in button", () => {
    // data-test selectors is the best way to go, here I am using ID due to time contraints.
    cy.get("#username").type("vbwebagent");
    cy.get("#password").type("1234.Com");
    cy.get(".MuiGrid-container > :nth-child(3)").click();
    cy.url().should(
      "eq",
      "https://adminbom.smobilpay.integration.maviance.info/"
    );
  });

  it("Should display an error message for Invalid username and password", () => {
    // data-test selectors is the best way to go, here I am using ID due to time contraints.
    cy.get("#username").type("veebwebagent");
    cy.get("#password").type("1234.ddCom");
    cy.get(".MuiGrid-container > :nth-child(3)").click();
    cy.get(".MuiBox-root").should("be.visible");
  });

  it("Displays an error message when the password field is empty", () => {
    // data-test selectors is the best way to go, here I am using ID due to time contraints.
    cy.get("#username").type("vbwebagent");
    cy.get(".MuiGrid-container > :nth-child(3)").click();
    cy.get("#username-helper-text").should("be.visible");
  });

  it("Displays and error message when the username field is empty", () => {
    // data-test selectors is the best way to go, here I am using ID due to time contraints.
    cy.get("#password").type("1234.Com");
    cy.get(".MuiGrid-container > :nth-child(3)").click();
    cy.get("#password-helper-text").should("be.visible");
  });
});
