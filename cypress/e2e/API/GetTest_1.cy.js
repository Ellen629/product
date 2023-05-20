import { getData } from "../../utils/apiData"

/// <reference types = "cypress" />

const objectsQuantity = 100;

describe("Checking GET method", () => {
    it('Verify that the response returns an array with objects', () => {
      cy.request('GET', Cypress.env("apiUrl"))
        .its('body')
        .should('be.an', 'array')
        .and('have.length.at.least', 1)
        .each((elem) => {
          expect(elem).to.be.an('object');
      });
  });
    it("Verify the length of the response body", () => {
      cy.request('GET', Cypress.env("apiUrl"))
        .its('body')
        .then((body) => {
          expect(body.length).to.equal(objectsQuantity);
        });
    });
    it("Verify status and the title of the response", () => {
     cy.request('GET', Cypress.env("apiUrl")).then(
        (response) => {
         expect(response.status).to.eq(200) 
         expect(response.body[0].title).to.eq(getData.firstObjTitle)
         }
       )
    });
    it.skip('should have unique Title values', () => {
      cy.request('GET', Cypress.env("apiUrl")).then((response) => {
        const data = response.body;
        const titleValues = data.map((item) => item.title);
        for (let i = 0; i < titleValues.length; i++) {
          for (let j = i + 1; j < titleValues.length; j++) {
            expect(titleValues[i]).to.not.equal(titleValues[j]);
          }
        }
      });
    });
    
  });
