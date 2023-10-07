/// <reference types="cypress" />

describe("Navigation", () => {
  it("Back, Forward, Refresh", () => {
    cy.visit("https://www.managementonschools.com");

 
    cy.get(".col-sm-2 > .ms-2").click();

    cy.wait(2000);


    cy.go("back");
    //cy.go(-1) back ile ayni islemi yapar 1 ise forward ile aynidir.

    cy.wait(2000)

    cy.go('forward')

    cy.wait(2000)

    cy.reload()


  });


  it.only("Chaing Navigation", () =>{

    cy.visit("https://www.managementonschools.com");

 
    cy.get(".col-sm-2 > .ms-2").click();


    cy.go("back").go("forward").go(-1).go(1)

    cy.reload(true)
    //cy.reload(true) sayfayi hafizadan degil yeniden yukler


  })
});
