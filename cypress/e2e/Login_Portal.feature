Feature: WebdriverUniversity - Login Portal page

    Scenario: Valid Login Portal Submission
        Given I navigate to the webdrivenuniversity homepage
        When I click on the Login Portal button
        And I type a Username
        And I enter a Password
        And I click on the Login button
        Then I should be presented with a successful alert message

    Scenario: Invalid Login Portal Submisiion
        Given I navigate to the webdrivenuniversity homepage
        When I click on the Login Portal button
        And I type a Username
        And I enter a Password
        And I click on the Login button
        Then I should be presented with a unsuccessful alert message
