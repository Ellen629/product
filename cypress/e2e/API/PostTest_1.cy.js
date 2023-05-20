import { getData, dataTypes } from "../../utils/apiData"
import { bodyData } from "../../fixtures/bodyDataPosts"

describe('Example API test', () => {
  it('Verify that the response returns an array with objects', () => {
      cy.addNewPost()
    })
    
  it('Verify a POST request to the API', () => {
    cy.request({
      method: 'POST',
      url: Cypress.env('apiUrl'),
      body: bodyData
    }).then((response) => {
      expect(response.status).to.equal(201)
      expect(response.body.title).to.equal(getData.firstObjTitle)
      expect(response.body.body).to.equal(getData.firstObjBody)
      expect(response.body.userId).to.equal(getData.firstObjUserId)
    })
})
it.only('Verify the data types of each element of the body', () => {
  cy.request({
    method: 'POST',
    url: Cypress.env('apiUrl'),
    body: bodyData
  }).then((response) => {
    const createdItems = response.body;
  createdItems.forEach((item) => {
    expect(item.userId).to.be.a(dataTypes.number);
    expect(item.title).to.be.a(dataTypes.string);
    expect(item.body).to.be.a(dataTypes.string)
  });
  })
})
it('', () => {
  cy.request({
    method: 'POST',
    url: Cypress.env('apiUrl'),
    body: {
      title: 'This post is missing the userId field'
    },
    failOnStatusCode: false
  }).then(response => {
    expect(response.status).to.equal(400)
    expect(response.body).to.have.property('error', 'userId is required')
  })
})
it("Verify the performance of the response", () => {
  cy.request({
    method: 'POST',
    url: Cypress.env('apiUrl'),
    body: bodyData, 
    timeout: 10000
  }).then((response) => {
    expect(response.status).to.equal(201);
})
})
})
