Feature: WebdriverUniversity - Contact Us page

    Scenario: Valid Contact Us Form Submission
        Given I navigate to the webdrivenuniversity homepage
        When I click on the contact us button
        And I type a first name
        And I type a last name
        And I eneter an email adress
        And I type a comment
        And I click on the submit button
        Then I should be presented with a successful contact us submission message




