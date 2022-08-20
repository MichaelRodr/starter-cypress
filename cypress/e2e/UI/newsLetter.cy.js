describe("News letters component", () => {
  const REGEX =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  before("Open browser", () => {
    cy.visit("https://lilab.pe/culture");
  });

  it("Validation email NewsLetter", () => {
    cy.get("#email")
      .type("testautomation@test.io")
      .contains("testautomation@test.io");
  });
});
