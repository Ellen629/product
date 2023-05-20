class Login {
    visit(endpoint) {
      cy.visit(Cypress.env('globalUrl') + endpoint);
    }
    getNavLogin(){
        return cy.get('.shop-menu > .nav > :nth-child(4) > a')
    }
    getLoginTitle(){
        return cy.get('.login-form > h2')
    }
    getLoginEmail(){
        return cy.get('[data-qa="login-email"]')
    }
    getPassword(){
        return cy.get('[data-qa="login-password"]')
    }
    getLoginBtn(){
        return cy.get('[data-qa="login-button"]')
    }
    getNavLogout(){
        return cy.get('.shop-menu > .nav > :nth-child(4) > a')
    }
    getError(){
        return cy.get('.login-form > form > p')
    }
    getNavDeleteAccount(){
        return cy.get('.shop-menu > .nav > :nth-child(5) > a')
    }
  }

  export const login = new Login();