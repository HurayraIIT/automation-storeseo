/// <reference types="cypress" />

const config = require("../../util/config.json");
const URLS = require("../../cypress.json");

describe("Login to the store.", () => {
  beforeEach(() => {
    cy.session('login', () => {
      cy.visit(URLS.url_partner);
      cy.contains('Log in');
      cy.get('#account_email').type(config.login_email);
      cy.wait(4000);
      cy.get('.ui-button--primary').click();
      cy.wait(4000);
      cy.get('#account_password').type(config.login_password);
      cy.wait(2000);
      cy.get('.ui-button--primary').click();
    });
  });
  
  it("Open the store url.", () => {
    cy.visit(URLS.url_partner);
  });
  
  it("another time", () => {
    cy.visit(URLS.url_partner);
  });
});