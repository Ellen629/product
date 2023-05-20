class Products {
    visit(endpoint) {
      cy.visit(Cypress.env('globalUrl') + endpoint);
    }
    getCategory(){
        return cy.get('.left-sidebar > h2')
    }
    getWomenAccordion(){
        return cy.get ('[data-parent="#accordian"]').eq(0)
    }
    getContentOfWomen(){
        return cy.get('#Women > .panel-body')
    }
    getMenAccordion(){
        return cy.get ('[data-parent="#accordian"]').eq(1)
    }
    getContentOfMen(){
        return cy.get('#Men > .panel-body')
    }
    getKidsAccordion(){
        return cy.get ('[data-parent="#accordian"]').eq(2)
    }
    getContentOfKids(){
       return cy.get('#Kids > .panel-body')
    }
    getSearch(){
        return cy.get('#search_product')
    }
    getSearchSubmit(){
        return cy.get('#submit_search')
    }
    getPolo(){
        return cy.get('.nav > :nth-child(1) > a > .pull-right')
    }
    getScrollUp(){
        return cy.get('#scrollUp')
    }
  }
  
  export const Product = new Products();