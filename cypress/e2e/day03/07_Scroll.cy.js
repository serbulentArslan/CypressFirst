/// <reference types="cypress" />

describe('Scroll',()=> {

    it('Scrollintoview', ()=> {   

        cy.visit('https://amazon.com');

        cy.get(':nth-child(1) > .navFooterLine > a').scrollIntoView({duration: 5000})
        //locate edilen yer sayfanin en ustunde olacak sekilde scroll eder
        //duration: verilen surede scroll yapar

        cy.scrollTo(0,0)
        //verilen kordinatlara scroll yapar 0,0 sayfanin en basi

        cy.scrollTo(0, 500)

        cy.scrollTo(0, -500)



    })


})