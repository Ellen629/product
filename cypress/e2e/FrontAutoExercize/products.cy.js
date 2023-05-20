import { moreUserInfo } from "../../pages/autoExercise/accountInfo";
import { registration } from "../../pages/autoExercise/signUp";
import { Product} from "../../pages/autoExercise/allProducts";
import { shopping} from "../../pages/autoExercise/carts"
import { inputs, addToCart, personalInfo, product } from "../../utils/data";

let numberCountPolo, number;

describe("Product info", () => {
    beforeEach(() => {
        cy.visit(Cypress.env("globalUrl") + "products");
      })
    it("Verify the UI of the CATEGORY", () => {        
        Product.getCategory().should("contain", "Category");
        Product.getWomenAccordion().click();
        Product.getContentOfWomen().then(($el)=>{
            expect($el).to.contain(product.dress)
            expect($el).to.contain(product.tops)
            expect($el).to.contain(product.saree)
        });
        Product.getMenAccordion().click();
        Product.getContentOfMen().then(($el)=>{
            expect($el).to.contain(product.tshirts)
            expect($el).to.contain(product.jeans)
        }) 
        Product.getKidsAccordion().click();
        Product.getContentOfKids().then(($el)=>{
            expect($el).to.contain(product.dress)
            expect($el).to.contain(product.tops_shirts)
        })   
    })
    it("Check the search functionality", () => {
        Product.getSearch().type("Blue Top");
        Product.getSearchSubmit().click();
        shopping.getItems().should("contain", "Blue Top");
    })
    it("Check the quantity of the carts", () => {
        Product.getPolo().invoke('text').then(($el)=>{
            numberCountPolo = $el.replace('(',"");           
        })   
    })
   it.skip("Compare the qunatity of the searched products", () => {
    cy.get('.brands-name > .nav > :nth-child(1) > a').click()
    cy.get('.product-overlay').each(($el, index, $list) => {
        expect($list).to.have.length(number)
    });
   }) 
    it('Verify scroll up button functionality', () => {
        cy.scrollTo('bottom');
        Product.getScrollUp().click().scrollTo('top', {ensureScrollable: false});
    })
   
})
