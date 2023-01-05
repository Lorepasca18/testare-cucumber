// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const url = "http://www.webdriveruniversity.com/";


 Given(`I navigate tot the webdrivenuniversity homepage`, () => {
    cy.visit(url);
    
});

When(`I click on the contact us button`, () => {
    cy.get("#contact-us").invoke("removeAttr", "target").click();
}); 