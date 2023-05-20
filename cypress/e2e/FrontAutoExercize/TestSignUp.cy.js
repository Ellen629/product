import { registration } from "../pages/autoExercise/signUp";
import { moreUserInfo } from "../pages/autoExercise/accountInfo";
import { inputs, signup } from "../utils/data";


let userName,secondUserName
describe("Registration", () => {
  beforeEach(() => {
    registration.visit("login");
  })
  it("Verify that the form UI matches with the requirements", () => {    
    registration.getTitle()
        .contains(signup.title);
    registration.getUsername()
        .should('have.attr', 'placeholder', inputs.namePlaceholder);
    registration.getEmail()
        .should('have.attr', 'placeholder', inputs.emailPlaceholder);
    registration.getUsername()
        .should('have.css','background-color', inputs.backgroundColor);
    registration.submit()
        .contains('Signup')
        .and('have.css', 'background-color',inputs.buttonColor);
    registration.submit()
        .each(($el) => {
        $el.trigger("mouseover");
        expect($el).to.have.css("background-color", inputs.hoveredBtnColor);
    });
  })
  it("Verify registration functionality with valid data", () => {
    registration.getUsername()
      .type(registration.generateRandomName(5));
    registration.getEmail()
      .type(registration.generateRandomName(5, signup.emailEndpoint));
    registration.submit().click();
    moreUserInfo.getSecondTitle()
      .should('be.visible');
  })
  it("Verify that with valid data the main URL contains /signup  endpoint", () => {
    registration.getUsername()
      .type(registration.generateRandomName(5));
    registration.getEmail()
      .type(registration.generateRandomName(5, signup.emailEndpoint));
    registration.submit().click();
    cy.url().should('include', '/signup');
  })
  it("Verify registration functionality with Enter keyboard", () => {
    registration.getUsername()
      .type(registration.generateRandomName(5));
    registration.getEmail()
      .type(registration.generateRandomName(5, signup.emailEndpoint));
      registration.getEmail().type("{Enter}");
    moreUserInfo.getSecondTitle()
      .should('be.visible');
  })

  it("Verify the valid Name/Email credentials match", () => {
    registration.getUsername()
      .type(registration.generateRandomName(5, ""));
    registration
      .getUsername()
      .invoke("val")
      .then((val) => {
        userName = val;
      });
    registration
      .getEmail()
      .type(registration.generateRandomName(5, signup.emailEndpoint));
    registration.submit().click();
    registration.getName()
      .invoke("val")
      .then((text) => {
        secondUserName=text;
      });
      cy.url().should('include', '/signup');
  });

  it("Verify registration functionality with empty username", () => {
    const emptyUserName = registration.getUsername().clear();
    emptyUserName.blur();
    registration.getUsername()
      .should('have.attr', inputs.requiredField);
    registration.getEmail()
      .type(registration.generateRandomName(5, "@gmail.com"));
    registration.submit().click();
  });

  it("Verify registration functionality with empty email", () => {
    registration.getUsername()
      .type(registration.generateRandomName(5));
    const emptyEmail = registration.getEmail().clear();
    emptyEmail.blur();
    registration.getEmail()
      .should('have.attr', inputs.requiredField);
    registration.submit().click();
  });

  it("Verify registration functionality without symbol @ in email address", () => {
    registration.getUsername()
      .type(registration.generateRandomName(5));
    registration.getEmail()
      .type(registration.generateRandomName(5, "gmail.com"));
    registration.submit().click();
  })
});
