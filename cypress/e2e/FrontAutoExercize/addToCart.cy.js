import { moreUserInfo } from "../../pages/autoExercise/accountInfo";
import { registration } from "../../pages/autoExercise/signUp";
import { Product} from "../../pages/autoExercise/allProducts";
import { shopping} from "../../pages/autoExercise/carts";
import {login} from "../../pages/autoExercise/login";
import { loginData, inputs, validLogin, addToCart, personalInfo} from "../../utils/data";
import { message } from "../../utils/messages";

describe("Add carts to the basket", () => {
    beforeEach(() => {
        cy.visit(Cypress.env("globalUrl"));
      })
    it("Verify the UI of the Cart", () => {       
        shopping.getTitle().contains(addToCart.title);
        shopping.getFirstCartImg();
        shopping.getFirstCarth2()
            .should('have.css', 'color', inputs.buttonColor);
        shopping.getFirstCartTitle()
            .should('have.css', 'color', inputs.addCartTitlecolor);
        shopping.getFirstCartBtn()
            .and('have.css', 'background-color', inputs.addCartBtnColor);
        shopping.getFirstCartViewProduct()
            .contains(addToCart.viewProductText)
            .should('have.css', 'color', inputs.viewProductColor);
    })
    it("Check the quantity of the carts", () => {
        shopping.getCartsQty();
    })
    it("Verify that in the beginning the Cart section is empty", () => {
        shopping.getNavCart().click();
        cy.url('includes', 'view_cart');
        shopping.getEmptyCart().contains(addToCart.emptyCart)
    })
    it("Verify Add to Cart functionality", () => {
        shopping.getFirstCartBtn().click();
        shopping.getModal().should('be.visible');
    })
    it("Verify the content of the modal", () => {
        shopping.getFirstCartBtn().click();
        shopping.getModal()
            .should('be.visible')
            .find('.icon-box')
            .should('exist');
        shopping.getModal()
            .should('be.visible')
            .find('.modal-title')
            .should('exist');
        shopping.getModal()
            .should('be.visible')
            .find('.modal-body > :nth-child(2)')
            .should('exist');
        shopping.getModal()
            .should('be.visible')
            .find('.modal-footer > .btn')
            .should('exist')
    })
    
    it("Verify that clicking on the Continue Shopping button, the modal closes", () => {
        shopping.getFirstCartBtn().click();
        shopping.getModal().should('be.visible');
        shopping.getContinueShopping().click();
        shopping.getModal().should('not.be.visible');
    })

    it("Verify View Product button functionality", () => {
        shopping.getFirstCartViewProduct().click();
        cy.url('includes', 'product_details/1')
    })
    it("Verify View Cart button functionality", () => {
        shopping.getFirstCartBtn().click();
        shopping.getModal().should('be.visible');
        shopping.getFirstViewCart().click();
        cy.url('includes', 'view_cart');
    })
    it("Verify that clicking on the Add to cart, the quantity of the product increases", () => {
        shopping.getFirstCartBtn().click();
        shopping.getModal().should('be.visible');
        shopping.getFirstViewCart().click();
        shopping.getEachProduct().contains('1');
    })
    it("Verify that clicking on X, the product is removed from the Cart", () => {
        shopping.getFirstCartBtn().click();
        shopping.getModal().should('be.visible');
        shopping.getFirstViewCart().click();
        cy.url('includes', 'view_cart');
        shopping.deleteProduct().click();
        cy.get('#cart_info').should('not.contain', '#product-1');
    })
    it("Verify Proceed button functionality", () => {
        shopping.getFirstCartBtn().click();
        shopping.getModal().should('be.visible');
        shopping.getFirstViewCart().click();
        cy.url('includes', 'view_cart');
        shopping.getEachProduct().contains('1');
        shopping.getProceedBtn().click();
        shopping.getModal().should('be.visible');
    })
    it("Verify Login functionality of the modal", () => {
        shopping.getFirstCartBtn().click();
        shopping.getModal().should('be.visible');
        shopping.getFirstViewCart().click();
        cy.url('includes', 'view_cart');
        shopping.getEachProduct().contains('1');
        shopping.getProceedBtn().click();
        shopping.getModal().should('be.visible');
        shopping.getLoginBtn().click();
        login.getNavLogin().click();
        login.getLoginEmail().type(validLogin.email);
        login.getPassword().type(validLogin.password);
        login.getLoginBtn().click();
        cy.url('includes', 'account_created')
    })
    it.only("Verify Proceed checkout", () => {
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
        cy.url('includes', 'payment_done');
        shopping.getPlacedOrderText().should('contain', message.placedOrder)
    })
    
})