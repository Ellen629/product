class Carusel {
    visit(endpoint) {
      cy.visit(Cypress.env('globalUrl') + endpoint);
    }
    getItem(){
        return cy.get(".item")
    }
    getTestCaseBtn(){
        return cy.get('.active > :nth-child(1) > .test_cases_list > .btn')
    }
    getAPIsListButton(){
        return cy.get('.active > :nth-child(1) > .apis_list > .btn')
    }
    getSlider(){
        return cy.get('#slider')
    }
  }

  export const carusel = new Carusel();