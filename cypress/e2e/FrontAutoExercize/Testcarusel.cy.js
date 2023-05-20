import { carusel } from "../../pages/autoExercise/carusel";
import { loginData, inputs, validLogin, caruselInfo} from "../../utils/data";

describe("Carusel", () => {
    it("Loads the homepage and checks for icons", () => {
      cy.visit(Cypress.env("globalUrl"));
      carusel.getItem().then(($elem) => {
        expect($elem).to.contain(caruselInfo.firstText)
        expect($elem).to.contain(caruselInfo.secondText)
        expect($elem).to.contain(caruselInfo.thirdText)
      });
      carusel.getTestCaseBtn()
        .should('be.visible')
        .and('contain', caruselInfo.testCases);
      carusel.getAPIsListButton()
        .should('contain', caruselInfo.apiBtnText)
        .and('have.css','background-color', caruselInfo.buttonColor);
      carusel.getTestCaseBtn()
        .realHover()
        .should('have.css','background-color', caruselInfo.hoveredBtnColor);
      carusel.getAPIsListButton()
        .realHover()
        .should('have.css','background-color', caruselInfo.hoveredBtnColor);   
      cy.wait(7000)
      carusel.getItem().should('have.class','active');
      cy.get('.item.active')
      .find('img')
      .should('be.visible')
      .and('have.attr', 'src', '/static/images/home/girl2.jpg');
      cy.clock()
      cy.clock()
      carusel.getSlider()
        .find('.item.active')
        .invoke('index')
        .should('eq', 0) 
        cy.tick(5000)
        carusel.getSlider()
        .find('.item.active')
        .invoke('index')
        .should('eq', 1) 
        cy.tick(5000)
        carusel.getSlider()
        .find('.item.active')
        .invoke('index')
        .should('eq', 2) 
    });
  });
  