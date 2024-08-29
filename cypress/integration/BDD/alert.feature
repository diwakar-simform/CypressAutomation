Feature: JS Alerts

    Alerts handling using Cypress

    @Regression
    Scenario: Validate Alert Box Message
    Given I open javascript-alerts page
    When Locate the alert button and click on it
    Then Validate the text present inside the alert box