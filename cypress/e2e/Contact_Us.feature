@contact-us @regression
Feature: WebdriverUniversity - Contact Us page

    Background: Pre condition
        Given I navigate to the webdrivenuniversity homepage
        When I click on the contact us button

    Scenario: Valid Contact Us Form Submission
        And I type a first name
        And I type a last name
        And I enter an email address
        And I type a comment
        And I click on the submit button
        Then I should be presented with a successful contact us submission


    Scenario: Invalid Contact Us Form Submission
        And I type a first name
        And I type a last name
        And I type a comment
        And I click on the submit button
        Then I should be presented with a unsuccessful contact us submission message


    Scenario: Valid Contact Us Form Submission - Using specific data
        And I type a specific first name "Diana"
        And I type a specific last name "Pasca"
        And I type a specific email adress "diana.pasca@gmail.com"
        And I type a specific word "hello123" and number 6788 within the comment input field
        And I click on the submit button
        Then I should be presented with a successful contact us submission

    @smoke
    Scenario Outline: Validate contact us page
        And I type a first name <firstName> and a last name '<lastName>'
        And I type a '<emailAdress>' and a comment '<comment>'
        And I click on the submit button
        Then I should be presented with header text '<message>'

        Examples:
            | firstName | lastName | emailAdress             | comment                 | message                      |
            | John      | Jones    | john_jones@gmail.com    | Hello how are you?      | Thank You for your Message!  |
            | Mia       | Carter   | Mia_carter123@gmail.com | Test123 Test 321        | Thank You for your Message!  |
            | Grace     | Hudson   | grace_hudson            | Do you create websites? | Error: Invalid email address |

