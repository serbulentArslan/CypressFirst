/// <reference types="cypress" />

context("My Second Test", () => {
  //describe yerine context kullanilabilir

  beforeEach("Her testten once calisacak", () => {
    cy.visit('/');
  });

  it("URL Test", () => {
    cy.url().should('include','google')
    cy.url().should('eq','https://www.google.com/')

  });

  it("Title Test", () => {
    cy.title().should('include','Google')
    cy.title().should('equal','Google')

  });

  it("Search Test", () => {
    cy.get('#APjFqb').type('Cypress.io{enter}')
    //get(): locate aliyoruz
    //type(): metin gonderme
    //{enter}: enter islemi
    

  });

  it.skip('Search Test', ()=> {
    cy.get('#APjFqb', {timeout: 3000}).type('Cypress.io{enter}')

  })

  //it.only
  it('Click', ()=> {
    cy.get(':nth-child(1) > .gb_E').click()
  })

});
