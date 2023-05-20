class AddToCart {
    visit(endpoint) {
      cy.visit(Cypress.env('globalUrl') + endpoint);
    }
    getNavCart(){
        return cy.get('.shop-menu > .nav > :nth-child(3) > a')
    }
    getEmptyCart(){
        return cy.get('#empty_cart')
    }
    getTitle(){
        return cy.get(".features_items > h2")
    }
    getItems(){
        return cy.get('.features_items');
    }
    getFirstCart(){
        return cy.get('.features_items > :nth-child(3)');
    }
    getFirstCartImg(){
        return cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > img')
            .should('be.visible')
            .and('have.attr', 'src', '/get_product_picture/1')
    }
    getFirstCarth2(){
        return cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > h2')
            .contains("Rs. 500")
    }
    getFirstCartTitle(){
        return cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > p')
         .contains("Blue Top")
    }
    getFirstCartBtn(){
        return cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn')
        .contains("Add to cart")  
    }
    getFirstCartViewProduct(){
        return cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a')
    }
    getFirstViewCart(){
        return cy.get('.text-center > a').eq(0)
    }
    getContinueShopping(){
        return cy.get('.modal-footer > .btn')
    }
    getEachProduct(){
        return cy.get('.cart_quantity')
    }
    getCartOverlay(){
        return cy.get('.product-overlay').eq(0)
    }
    getModal(){
        return cy.get('.modal-content')
    
    }
    getCartsQty(){
        cy.get('.features_items').find('.col-sm-4').should('have.length', 34)
    }
    deleteProduct(){
        return cy.get('.cart_delete')
    }
    getProceedBtn(){
        return cy.get('.col-sm-6 > .btn')
    }
    getLoginBtn(){
        return cy.get('.modal-body > :nth-child(2) > a > u')
    }
    getAddressDetailsHeader(){
        return cy.get(':nth-child(2) > .heading')
    }
    getAddressDelivery(){
        return cy.get('#address_delivery')
    }
    getDeliverySubheader(){
        return cy.get('#address_delivery > .address_title > .page-subheading')
    }
    getBillingAddress(){
        return cy.get('#address_invoice')
    }
    getBillingSubheader(){
        return cy.get('#address_invoice > .address_title > .page-subheading')
    }
    getPlaceOrder(){
        return cy.get(':nth-child(7) > .btn')
    }
    getPayBtn(){
        return cy.get('[data-qa="pay-button"]')
    }
    getCardName(){
        return cy.get('[data-qa="name-on-card"]')
    }
    getCardNumber(){
        return cy.get('[data-qa="card-number"]')
    }
    getCVC(){
        return cy.get('[data-qa="cvc"]')
    }
    getExpiryMonth(){
        return cy.get('[data-qa="expiry-month"]')
    }
    getExpiryYear(){
        return cy.get('[data-qa="expiry-year"]')
    }
    getInvoice(){
        return cy.get('.col-sm-9 > .btn-default')
    }
    getPlacedOrderText(){
        return cy.get('[data-qa="order-placed"] > b')
    }

    
  
  }
  export const shopping = new AddToCart();