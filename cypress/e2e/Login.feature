@login @regression
Feature: webdriveruniversity - Login Page

    Background: Pre-condition
        When I wait for 0 seconds

    Scenario Outline: Validate valid & invalid login credentials
        Given I navigate to the webdrivenuniversity homepage
        When I click on the Login Portal button
        And I type a Username <Username>
        And I type a Password <Password>
        And I click on the login button
        Then I should be presented with an alert box witch contains text '<expectedAlertText>'

        Examples:
            | Username  | Password      | expectedAlertText    |
            | webdriver | webdriver123  | validation succeeded |
            | webdriver | password123   | validation failed    |
            | joe       | password12ewr | validation failed    |


