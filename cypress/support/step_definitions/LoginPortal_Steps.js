import { When,Then, And} from "@badeball/cypress-cucumber-preprocessor";

When('I type a Username', () => {
    cy.get('#text').type("webdriver");
});


When('I enter a Password', () => {
    cy.get('#password').type("webdriver123")
});


When('I click on the Login button', () => {
    cy.get('#login-button').click();
}) 


Then('I should be presented with a successful alert message', () => {
    cy.on("window:alert", (text) => expect(text).to.equal(`validation succeeded`))
})

Then('I should be presented with a unsuccessful alert message', () => {
    cy.on("window:alert", (text) => expect(text).to.equal(`validation failed`))
})
