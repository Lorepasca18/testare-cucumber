// <reference types="cypress" />
import { When,Then} from "@badeball/cypress-cucumber-preprocessor";

let stub;

When(`I type a Username {}`, (Username) => {
    cy.get('#text').type(Username);
})


When(`I type a Password {}`, (Password) => {
    cy.get('#password').type(Password);
})

When(`I click on the login button`, () => {
    stub = cy.stub();
    cy.on('window:alert', stub);
    cy.get('#login-button').click();
})


Then('I should be presented with an alert box witch contains text {string}', (expectedAlertText) => { 
    expect(stub).to.have.been.calledWith(expectedAlertText);
})