/// <reference types="cypress" />

describe('School Managament',()=> {

    it('Login Test', ()=> {   
        cy.visit('https://managementonschools.com/');
        //1.yol
        //cy.get('.col-sm-2 > .ms-2').click()

        //2.yol
        cy.contains('Login').click()
        //DOM'da metni text olarak bulmak icin

        cy.url().should('include','login')

        cy.get('#username').type('AdminTeam15')
        cy.get('#password').type('AdminTeam15')
        cy.get('.d-grid > .fw-semibold').click()
        

    })



})