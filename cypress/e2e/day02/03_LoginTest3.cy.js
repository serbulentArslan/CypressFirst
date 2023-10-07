/// <reference types="cypress" />

describe("Login Menu Test", () => {
    it("Test Case 1", () => {
        cy.visit("http://www.automationpractice.pl/index.php");
        cy.get(".login").click();

        cy.contains("h3[class='page-subheading']", "Create an account");

        cy.contains(
        "#create-account_form > .form_content > .form-group > label",
        "Email"
        );
    });

    it("Test Case 2", () => {
        cy.visit("http://www.automationpractice.pl/index.php");
        cy.get(".login").click();

        //1.yol
        cy.get(":nth-child(1) > label").should("contain", "Email address");

        //2.yol
        cy.get(":nth-child(1) > label").then((emailtext) => {
        expect(emailtext.text()).to.equal("Email address");
        });

        //3.yol
        cy.get(":nth-child(1) > label")
        .invoke("text")
        .then((emailtext2) => {
            expect(emailtext2).to.equal("Email address");
        });
    });
});
