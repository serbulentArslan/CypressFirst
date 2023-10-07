/// <reference types="cypress" />

describe('SuggestedElement',()=> {


    it.only('TC01', ()=> {   

        cy.visit('http://www.google.com');

        cy.get('#APjFqb').type("yahoo")
        cy.wait(2000)

        //1.yol
        //cy.get('#c7mM1c > .wM6W7d > span').contains("finance").click()

        //2. yol


    })

    it.skip('TC01', ()=> {   

        cy.visit('http://www.automationpractice.pl/index.php');

    })


})