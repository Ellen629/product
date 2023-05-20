import { moreUserInfo } from "../../pages/autoExercise/accountInfo";
import { registration } from "../../pages/autoExercise/signUp";
import { login } from "../../pages/autoExercise/login";
import { inputs, signup, personalInfo, validLogin } from "../../utils/data";

describe("Additional info about the user", () => {
  beforeEach(() => {
    registration.visit("login");
    registration.getUsername()
      .type(registration.generateRandomName(5));
    registration.getEmail()
      .type(registration.generateRandomName(5, signup.emailEndpoint));
    registration.submit().click();
    cy.url('includes', 'signup')
  })
  it("Verify that the form UI matches with the requirements", () => {
      moreUserInfo.getSecondTitle()
        .contains(signup.signupSecondTitle)
        .and('have.css', 'color', inputs.buttonColor);
      moreUserInfo.getAddressInfoTitle()
        .contains(signup.addressInfo)
        .and('have.css', 'color', inputs.buttonColor);
      moreUserInfo.getGenderLabel()
        .contains(signup.labelTitle);
      moreUserInfo.getNameLabel()
        .contains(signup.labelName);
      moreUserInfo.getName()
        .should('have.css', 'background-color', inputs.btnBackColor);
      moreUserInfo.getEmailLabel()
        .contains(signup.labelEmail);
      moreUserInfo.getPasswordLabel()
        .contains(signup.labelPassword);
      moreUserInfo.getBirthdayLabel()
        .contains(signup.labelBirthday);
  })
    it.only("Verify that the fields are filled with valid data", () => {
      moreUserInfo.getMr();
      moreUserInfo.getName();
      moreUserInfo.getEmail();
      moreUserInfo.getPassword().type(personalInfo.password);
      moreUserInfo.getDays().select('9')
        .should('have.value', personalInfo.day);
      moreUserInfo.getMonths().select('July')
        .should('have.value', personalInfo.month);
      moreUserInfo.getYears().select('1991')
        .should('have.value', personalInfo.year);
      moreUserInfo.getNewsletter().click();
      moreUserInfo.getOptin().click();
      moreUserInfo.getFirstName().type(personalInfo.firstName);
      moreUserInfo.getLastName().type(personalInfo.lastName);
      moreUserInfo.getCompany().type(personalInfo.company);
      moreUserInfo.getAddress().type(personalInfo.address);
      moreUserInfo.getAddress2().type(personalInfo.address2);
      moreUserInfo.getCountry().select('United States')
        .should('have.value', personalInfo.country);
      moreUserInfo.getState().type(personalInfo.state);
      moreUserInfo.getCity().type(personalInfo.city);
      moreUserInfo.getZipcode().type(personalInfo.zipcode);
      moreUserInfo.getMobile().type(personalInfo.phone);
      moreUserInfo.getCreateAccount().click();
      cy.url('includes', 'account_created');
})  
    it("Verify that the password field is required", () => {
      moreUserInfo.getMr();
      moreUserInfo.getName();
      moreUserInfo.getEmail();
      const emptyPassword = moreUserInfo.getPassword().clear();
      emptyPassword.blur();
      moreUserInfo.getPassword().should('have.attr', inputs.requiredField);
      moreUserInfo.getDays().select('9')
        .should('have.value', personalInfo.day);
      moreUserInfo.getMonths().select('July')
        .should('have.value', personalInfo.month);
      moreUserInfo.getYears().select('1991')
        .should('have.value', personalInfo.year);
      moreUserInfo.getNewsletter().click();
      moreUserInfo.getOptin().click();
      moreUserInfo.getFirstName().type(personalInfo.firstName);
      moreUserInfo.getLastName().type(personalInfo.lastName);
      moreUserInfo.getCompany().type(personalInfo.company);
      moreUserInfo.getAddress().type(personalInfo.address);
      moreUserInfo.getAddress2().type(personalInfo.address2);
      moreUserInfo.getCountry().select('United States')
        .should('have.value', personalInfo.country);
      moreUserInfo.getState().type(personalInfo.state);
      moreUserInfo.getCity().type(personalInfo.city);
      moreUserInfo.getZipcode().type(personalInfo.zipcode);
      moreUserInfo.getMobile().type(personalInfo.phone)
      moreUserInfo.getCreateAccount().click();
})
it("Verify that the mobile number field do not accept letters", () => {
      moreUserInfo.getMr();
      moreUserInfo.getName();
      moreUserInfo.getEmail();
      moreUserInfo.getPassword().type(personalInfo.password);
      moreUserInfo.getDays().select('9')
        .should('have.value', personalInfo.day);
      moreUserInfo.getMonths().select('July')
        .should('have.value', personalInfo.month);
      moreUserInfo.getYears().select('1991')
        .should('have.value', personalInfo.year);
      moreUserInfo.getNewsletter().click();
      moreUserInfo.getOptin().click();
      moreUserInfo.getFirstName().type(personalInfo.firstName);
      moreUserInfo.getLastName().type(personalInfo.lastName);
      moreUserInfo.getCompany().type(personalInfo.company);
      moreUserInfo.getAddress().type(personalInfo.address);
      moreUserInfo.getAddress2().type(personalInfo.address2);
      moreUserInfo.getCountry().select('United States')
        .should('have.value', personalInfo.country);
      moreUserInfo.getState().type(personalInfo.state);
      moreUserInfo.getCity().type(personalInfo.city);
      moreUserInfo.getZipcode().type(personalInfo.zipcode);
      moreUserInfo.getMobile().type('test')
      moreUserInfo.getCreateAccount().click();
})
it.skip("Verify that the user can't register with already used email address", () => {
  registration.visit("login");
    registration.getUsername()
      .type(registration.generateRandomName(5));
    registration.getEmail().type(validLogin.email)   
  moreUserInfo.getCreateAccount().click();
})   
})