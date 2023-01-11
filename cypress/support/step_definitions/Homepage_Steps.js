// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const url = "http://www.webdriveruniversity.com/";


 Given(`I navigate to the webdrivenuniversity homepage`, () => {
    cy.visit(url);
    
});

When(`I click on the contact us button`, () => {
    cy.get("#contact-us").invoke("removeAttr", "target").click();
}); 

When(`I click on the Login Portal button`, () => {
    cy.get("#login-portal").invoke("removeAttr", "target").click();

});


