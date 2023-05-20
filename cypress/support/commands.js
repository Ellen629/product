import {bodyData} from "../fixtures/bodyDataPosts.json"
require('cypress-downloadfile/lib/downloadFileCommand')

Cypress.Commands.add('generateRandomName', (length) => { 
     let result = '';
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      const charactersLength = characters.length;
      let counter = 0;
      while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
      }
      return `test${result}`;
  }) 
  

Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { 

})


Cypress.Commands.add(
  "addNewPost",
  (newBodyData=bodyData) => {
    cy.fixture("bodyDataPosts").then(() => {
        cy.request({
        method: "POST",
        url: "https://jsonplaceholder.typicode.com/posts",
        failOnStatusCode: false,
         body: newBodyData,
      }).then((response) => {
        const itemId = response.body.id;
        cy.request({
          method: 'DELETE',
          url: `https://jsonplaceholder.typicode.com/posts/${itemId}`
        })
    });
    })
  });