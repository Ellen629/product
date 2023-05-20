/// <reference types="cypress-downloadfile"/>

import { moreUserInfo } from "../../pages/autoExercise/accountInfo";
import { registration } from "../../pages/autoExercise/signUp";
import { Product} from "../../pages/autoExercise/allProducts";
import { shopping} from "../../pages/autoExercise/carts";
import {login} from "../../pages/autoExercise/login";
import { loginData, inputs, validLogin, addToCart, personalInfo} from "../../utils/data";
import { message } from "../../utils/messages";


describe("download file", () => {
    beforeEach(() => {
        cy.visit(Cypress.env("globalUrl") + "payment_done");
      })
    it("check file", () => {
        shopping.getFirstCartBtn().click();
        shopping.getModal().should('be.visible');
        shopping.getFirstViewCart().click();
        shopping.getEachProduct().contains('1');
        shopping.getProceedBtn().click();
        shopping.getLoginBtn().click();
        login.getNavLogin().click();
        login.getLoginEmail().type(validLogin.email);
        login.getPassword().type(validLogin.password);
        login.getLoginBtn().click();
        shopping.getNavCart().click();
        shopping.getProceedBtn().click();
        cy.url('includes', 'checkout');
        shopping.getDeliverySubheader().contains(addToCart.deliveryAddText);
        shopping.getBillingSubheader().contains( addToCart.billingAddText);
        shopping.getPlaceOrder().click();
        shopping.getPayBtn().click();
        shopping.getCardName().should('have.attr', inputs.requiredField);
        shopping.getCardName().type(personalInfo.firstName);
        shopping.getPayBtn().click();
        shopping.getCardNumber().should('have.attr', inputs.requiredField);
        shopping.getCardNumber().type(addToCart.validCardNumber);
        shopping.getCVC().type(addToCart.CVC);
        shopping.getExpiryMonth().type(addToCart.expMonth);
        shopping.getExpiryYear().type(addToCart.expYear);
        shopping.getPayBtn().click();
        shopping.getInvoice().click();
        cy.readFile('cypress/downloads/invoice.txt').then((fileContent) => {
            expect(fileContent).to.contain(`Hi ${personalInfo.firstName} ${personalInfo.lastName} Your total purchase amount is 500. Thank you`);
          });
    })
})