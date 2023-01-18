// <reference types="cypress" />
import { When,Then, Given} from "@badeball/cypress-cucumber-preprocessor";
import Login_PO from "../page_objects/Login_PO";

const loginPage = new Login_PO;
let stub;

Given('I navigate to the webdrivenuniversity login page', () => {
    loginPage.navigateTo_Login_Page();
})

When(`I type a Username {}`, (Username) => {
    //cy.get('#text').type(Username);
    loginPage.type_Username(Username);
})


When(`I type a Password {}`, (Password) => {
    //cy.get('#password').type(Password);
    loginPage.type_Password(Password);
})

When(`I click on the login button`, () => {
    stub = cy.stub();
    cy.on('window:alert', stub);
    //cy.get('#login-button').click();
    loginPage.clickOn_Login_Button();
})


Then('I should be presented with an alert box witch contains text {string}', (expectedAlertText) => { 
    expect(stub).to.have.been.calledWith(expectedAlertText);
})