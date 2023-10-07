/// <reference types="cypress" />

describe('Login Test',()=> {

    it('Pozitive Test', ()=> {   

        const username = "AdminTeam15"
        const password = "AdminTeam15"

        cy.visit("https://managementonschools.com/");
        cy.get('.col-sm-2 > .ms-2').click()

        cy.get('#username').type(username)
        cy.get('#password').type(password)
        cy.get('.d-grid > .fw-semibold').click()

        cy.get('.justify-content-center > :nth-child(2)').should('be.visible')
        cy.url().should('include', 'admin')
        cy.get('.justify-content-center > :nth-child(2)').should('contain', 'AdminTeam15')


    })

    

    


})