/// <reference types="cypress" />

describe("HoverOver", () => {
  it("Test Case 1", () => {

    cy.visit("https://amazon.com");

    cy.get('#icp-nav-flyout').trigger("mouseover")
    cy.wait(1500)


    cy.contains("Change country/region.").click()

    cy.get("#icp-dropdown").select("France",{force: true})

  });
});
