/// <reference types="cypress" />

describe('Before After',()=> {

    before( () =>{
        cy.log('Her test dosyasindan once bir kere calisir')
    })

    after( () =>{
        cy.log('Her test dosyasindan sonra bir kere calisir ')
    })

    beforeEach( () =>{
        cy.log('Her testten once bir kere calisir')
    })

    afterEach( () =>{
        cy.log('Her testten sonra bir kere calisir')
    })



    it('Test Case 1', ()=> {   

        cy.log('Test Case 1')

    })

    it('Test Case 2', ()=> {   

        cy.log('Test Case 2')

    })


})