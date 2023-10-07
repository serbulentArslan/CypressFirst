/// <reference types="cypress" />

describe('Super Domain',()=> {

    it('TC01', ()=> {   

        cy.visit('https://amazon.com');
        //cy.visit('https://google.com'); burada hata aliriz. Ayni testte farkli domaine gecis olmuyor.

        //ama ayni super domaine sahip sitelere gecis yapilabilir 

    })

    it('TC02', ()=> {   

        cy.visit('https://google.com');

    })


})