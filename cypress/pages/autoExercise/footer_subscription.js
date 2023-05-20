class Subscription {
    visit(endpoint) {
        cy.visit(Cypress.env('globalUrl') + endpoint);
      }
    getSubscriptionDiv(){
        return cy.get('.footer-widget > .container > .row > .col-sm-3')
    }
    getSubscribeInput(){
        return cy.get('#susbscribe_email')
    }
    getSubscribeBtn(){
        return cy.get('#subscribe')
    }
    getSearchFormText(){
        return cy.get('.searchform > p')
    }
    getSuccessMessage(){
        return cy.get('.alert-success')
    }
    
}

export const subscription = new Subscription();