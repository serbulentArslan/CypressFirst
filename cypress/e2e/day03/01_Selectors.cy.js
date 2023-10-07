/// <reference types="cypress" />

describe('Selectors Examples',()=> {

    it('Css Selectors', ()=> {   

        cy.visit('https://amazon.com');

        // by tag name
        cy.get('input')

        // by id
        cy.get('#twotabsearchtextbox')

        // by class
        cy.get('.nav-search-field ');

        // by attribute name and value
        cy.get("input[type='text']");

        // by 2 attribute
        cy.get("[type='text'][id='twotabsearchtextbox']")


    })



})