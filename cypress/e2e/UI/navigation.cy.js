/**
 * ? Menu navigation and path Test
 */
describe("Verify path navigation home, stories, culture", () => {
  before("Open browser", () => {
    cy.visit("https://www.lilab.pe/home");
  });

  it("Navigate home to stories", () => {
    cy.get(":nth-child(2) > .MuiBottomNavigationAction-label")
      .contains("Success stories")
      .click();
    cy.url().should("include", "/stories");
  });

  it("Navigate stories to culture ", () => {
    cy.get(":nth-child(3) > .MuiBottomNavigationAction-label")
      .contains("Culture")
      .click();
    cy.url().should("include", "/culture");
  });

  it("Navigate culture to home ", () => {
    cy.get(":nth-child(1) > .MuiBottomNavigationAction-label")
      .contains("About us")
      .click();
    cy.url().should("include", "/home");
  });

  after("Test Finished", () => {
    cy.log(" The test is finished, and you can verify the result");
  });
});
