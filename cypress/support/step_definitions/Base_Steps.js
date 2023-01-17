// <reference types="cypress" />
import { Given, When, Then, Before, After } from "@badeball/cypress-cucumber-preprocessor";

Before(() => {
    cy.log("Execute before each Scenario/Test.")
    cy.clearLocalStorage();


})

Before({tags: "@smoke"}, () => {
    cy.log("Execute Smoke Packc")
   

})



After(() => {
    cy.log("Execute after each Scenario/Test.")
   


})

When("I wait for {int} seconds", (seconds) =>{
    cy.wait(seconds * 1000)

})