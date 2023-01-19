/// <reference types="cypress" />

import Base_PO from "./Base_PO";

class Contact_Us_PO extends Base_PO{
    elements = {
        comment_TextField : () => cy.get('textarea[name="message"]'),
        submit_Button : () => cy.get('[type="submit"]'),
        submission_Header_Text : () =>   cy.xpath("//h1 | //body")

    }



    navigateTo_ContactUs_Page() {
        super.navigate("/Contact-Us/contactus.html");

    }

    type_FirstName(firstname) {
        cy.get('[name="first_name"]').type("firstName");


    }

    type_LastName(lastname) {
        cy.get('[name="last_name"]').type("lastName");
      }
      
      type_EmailAdress(email) {
        cy.get('[name="email"]').type(email);

      }

      type_Comment(comment) {
        this.elements.comment_TextField().type(comment);

      }

      clickOn_Submit_Button() {
        this.elements.submit_Button().click();
      }

      validate_Subission_Header(expectedText) {
        this.elements.submission_Header_Text().contains(expectedText);
        this.elements.submission_Header_Text().invoke('text').should('include', expectedText)

      }



}
export default Contact_Us_PO;