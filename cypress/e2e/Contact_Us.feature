Feature: WebdriverUniversity - Contact Us page

    Scenario: Valid Contact Us Form Submission
        Given I navigate tot the webdrivenuniversity homepage
        When I click on the contact us button
        And I type a first name
        And I type a last name
        And I enter an email address
        And I type a comment
        And I click on the submit button
        Then I should be presented with a successful contact us submission



    Scenario: Invalid Contact Us Form Submission
        Given I navigate tot the webdrivenuniversity homepage
        When I click on the contact us button
        And I type a first name
        And I type a last name
        And I type a comment
        And I click on the submit button
        Then I should be presented with a unsuccessful contact us submission message


    Scenario: Valid Contact Us Form Submission - Using specific data
        Given I navigate tot the webdrivenuniversity homepage
        When I click on the contact us button
        And I type a specific first name "Diana"
        And I type a specific last name "Pasca"
        And I type a specific email adress "diana.pasca@gmail.com"
        And I type a specific word "hello123" and number 6788 within the comment input field
        And I click on the submit button
        Then I should be presented with a successful contact us submission



