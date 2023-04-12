/// <reference types="cypress" />

describe('API tests', () => {
    it('should make a GET request to an endpoint and validate the response', () => {
      cy.request('GET', 'https://jsonplaceholder.typicode.com/todos/1')
        .then((response) => {
          // Assert that the response status code is 200 OK
          expect(response.status).to.eq(200);
  
          // Assert that the response body contains the expected data
          expect(response.body).to.have.property('userId');
          expect(response.body.userId).to.eq(1);
          expect(response.body).to.have.property('id');
          expect(response.body.id).to.eq(1);
          expect(response.body).to.have.property('title');
          expect(response.body.title).to.eq('delectus aut autem');
          expect(response.body).to.have.property('completed');
          expect(response.body.completed).to.eq(false);
        });
    });
  
    it('should make a POST request to an endpoint and validate the response', () => {
      // Define the request body
      const requestBody = {
        title: 'foo',
        body: 'bar',
        userId: 1,
      };
  
      cy.request('POST', 'https://jsonplaceholder.typicode.com/posts', requestBody)
        .then((response) => {
          // Assert that the response status code is 201 Created
          expect(response.status).to.eq(201);
  
          // Assert that the response body contains the expected data
          expect(response.body).to.have.property('title');
          expect(response.body.title).to.eq('foo');
          expect(response.body).to.have.property('body');
          expect(response.body.body).to.eq('bar');
          expect(response.body).to.have.property('userId');
          expect(response.body.userId).to.eq(1);
          expect(response.body).to.have.property('id');
        });
    });
  });
  