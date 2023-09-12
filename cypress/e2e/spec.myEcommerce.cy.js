import { store } from "../../src/app/store.js";

describe("Test para testear e-commerce", () => {
  it("Abrimos la web", () => {
    cy.visit("http://127.0.0.1:5173/");
    cy.contains("Home");
  });

  it("Get Products from Redux Store", function () {
    cy.visit("http://127.0.0.1:5173/");
    // Accede directamente al store de Redux importado

    const reduxStore = store.getState();

    // Verifica el estado del store
    cy.wrap(reduxStore).its("products").should("deep.equal", {
      products: [],
    });
  });
  
  it('Register', function() {

    cy.visit('http://127.0.0.1:5173/register')
 
    cy.get('.chakra-ui-light > #root > form > input:nth-child(1)').click()
 
    cy.get('.chakra-ui-light > #root > form > input:nth-child(1)').type('Adri')
 
    cy.get('.chakra-ui-light > #root > form > input:nth-child(2)').click()
 
    cy.get('.chakra-ui-light > #root > form > input:nth-child(2)').type('adri@gmail.com')
 
    cy.get('.chakra-ui-light > #root > form > input:nth-child(3)').click()
 
    cy.get('.chakra-ui-light > #root > form > input:nth-child(3)').type('20')
 
    cy.get('.chakra-ui-light > #root > form > input:nth-child(4)').click()
 
    cy.get('.chakra-ui-light > #root > form > input:nth-child(4)').type('123')
 
    cy.get('.chakra-ui-light > #root > form > button').click()
 
 })

  it('Login', function() {
 
    cy.visit('http://127.0.0.1:5173/login')
 
    cy.get('.chakra-ui-light > #root > form > input:nth-child(1)').click()
 
    cy.get('[type="email"]').type('adri@gmail.com')
 
    cy.get('.chakra-ui-light > #root > form > input:nth-child(2)').type('123')
 
    cy.get('.chakra-ui-light > #root > form > button').click()
    
    cy.wait(1000)

    cy.contains("Logout")
 })

 

});
