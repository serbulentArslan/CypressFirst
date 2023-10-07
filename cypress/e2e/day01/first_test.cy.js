/// <reference types="cypress" />


describe('My First Test',()=> {
    //describe: test tanımı
    //describe ve it mochadan geliyor.


    it('URL Test', ()=> {   

        cy.visit('https://www.google.com')

        cy.url().should('include','google')
        //should assert islemi icin kullanilir

    })

    it('Title Test', ()=> {   
        
        cy.visit('https://google.com')

        cy.title().should('include','Google')

        cy.title().should('eq','Google')

        


    })

})