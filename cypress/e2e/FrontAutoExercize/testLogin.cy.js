import { moreUserInfo } from "../../pages/autoExercise/accountInfo";
import { registration } from "../../pages/autoExercise/signUp";
import { Product} from "../../pages/autoExercise/allProducts";
import { shopping} from "../../pages/autoExercise/carts";
import {login} from "../../pages/autoExercise/login";
import { loginData, inputs, validLogin} from "../../utils/data";
import { message } from "../../utils/messages";

describe("Login", () => {
    beforeEach(() => {
        cy.visit(Cypress.env("globalUrl"));
      })
    it("Verify Login UI", () => {        
        login.getNavLogin().click();
        login.getLoginTitle().should('contain', loginData.title);
        login.getLoginEmail()
            .should('have.attr', 'placeholder', inputs.emailPlaceholder)
            .and('have.css', 'background-color', inputs.backgroundColor);
        login.getPassword()
            .should('have.attr', 'placeholder', inputs.passwordPlaceholder)
            .and('have.css', 'background-color', inputs.backgroundColor);
        login.getLoginBtn()
            .should('contain', loginData.buttonText)
            .and('have.css', 'background-color', inputs.buttonColor);
    })
    it("Verify Login functionality with valid data", () => {
        login.getNavLogin().click();
        login.getLoginEmail().type(validLogin.email);
        login.getPassword().type(validLogin.password);
        login.getLoginBtn().click();
        login.getNavLogout().should('be.visible');
    })
    it("Verify Login functionality by using Enter keyboard", () => {
        login.getNavLogin().click();
        login.getLoginEmail().type(validLogin.email);
        login.getPassword().type(validLogin.password);
        login.getPassword().type("{Enter}");
        login.getNavLogout().should('be.visible');      
    })
    it("Verify Login functionality with invalid email address", () => {
        login.getNavLogin().click();
        login.getLoginEmail().type(`${validLogin.email} test`);
        login.getPassword().type(validLogin.password);
        login.getLoginBtn().click();
        login.getError()
             .should('be.visible')  
             .and('contain', message.wrongEmailOrPass);
    })
    it("Verify Login functionality with invalid password", () => {
        login.getNavLogin().click();
        login.getLoginEmail().type(validLogin.email);
        login.getPassword().type(`${validLogin.password} 44`);
        login.getLoginBtn().click();
        login.getError()
             .should('be.visible')  
             .and('contain', message.wrongEmailOrPass);
    })
    it("Verify Login functionality with empty email address field", () => {
        login.getNavLogin().click();
        const emptyEmail = login.getLoginEmail().clear();
        emptyEmail.blur();   
        login.getPassword().type(validLogin.password);
        login.getLoginBtn().click();
        login.getLoginEmail().should('have.attr', inputs.requiredField);
    })
    it("Verify Login functionality with empty password field", () => {
        login.getNavLogin().click();
        login.getLoginEmail().type(validLogin.email);
        const emptyPassword = login.getPassword().clear();
        emptyPassword.blur();
        login.getLoginBtn().click();
        login.getPassword().should('have.attr', inputs.requiredField);
    })
    it("Verify Delete Account functionality", () => {
        login.getNavLogin().click();
        login.getLoginEmail().type(validLogin.email);
        login.getPassword().type(validLogin.password);
        login.getLoginBtn().click();
        login.getNavDeleteAccount().click();
        cy.url("includes", "delete_account");
    })


})