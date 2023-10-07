/// <reference types="cypress" />

describe("School Managament", () => {
  it("", () => {
    cy.visit("https://managementonschools.com/");

    //cy.contains('Login').click()

    //contains('locator', 'text') verilen locateki text içeriyorsa elementi buluyor.
    //cy.contains('.col-sm-2 > .ms-2', 'Login').click()

    //matchCase: false kucuk buyuk harf duyarliligi kapali
    cy.contains("login", { matchCase: false }).click();

    //ASSERT

    //1) have.text
    cy.get(".card-body > .shadow-sm").should("have.text", "Login");
    //locate edilen yerdeki metinde 'Login' yaziyor mu. Var mı?

    //2) cy.url().should()
    cy.url().should("include", "login");

    //3) be.visible
    cy.get(".card-body > .shadow-sm").should("be.visible");

    //4) eq : equals
    cy.title().should("eq", "Managementon Schools");

    //5) include.text
    cy.get(".card-body > .shadow-sm").should("include.text", "Login");

    //Toplam link sayisi dogrulama
    cy.get("li").should("have.length", 26);

    //find(): Belirli bir html seciminin alt elemanlarini bulmak icin
    cy.get("div")
      .find("button[class='fw-semibold btn btn-primary']")
      .should("have.text", "Login");
    //cy.find() seklinde kullanilmaz.

    //within()
    cy.get("div[class='d-grid gap-2 col-6 mx-auto pt-4']").within(() => {
      cy.get("button[class='fw-semibold btn btn-primary']").click();
    });
    /*
        NOT: WebElement leri oncelikle get ile bulacagiz. Eger get() ile bulamazsak find() ile deneyecegiz.
        Onunla da bulamazsak within() ile deneyecegiz.
        */
  });
});
