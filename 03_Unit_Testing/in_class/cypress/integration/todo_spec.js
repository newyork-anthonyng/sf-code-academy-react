describe("Todo list", function() {
  it("should add todo list item", function() {
    cy.visit("localhost:3000");

    cy.get("input")
      .type("Learn react{enter}")

    cy.get("button")
      .click();

    cy.get("li")
      .contains("Learn reactt");
  });
});
