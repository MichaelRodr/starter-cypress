describe("Validate contact form  data insertion", () => {
  before("Open Browser", () => {
    cy.visit("https://www.lilab.pe/home");
  });

  it("Open Contact Form ", () => {
    cy.get(":nth-child(4) > .MuiBottomNavigationAction-label").click();
    cy.get("#firstname").type("Jesus");
    cy.get("#lastname").type("Valdez");
    cy.get("._x69531038 > ._field-wrapper > #email").type(
      "testautomation@test.io"
    );
    cy.get("#field[2]").type("test.io");
    cy.get("#field[3]").type("Test automated for validation component");
    cy.get();
  });
});
