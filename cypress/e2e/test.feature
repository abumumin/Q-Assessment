Feature: demo.seleniumseay.com Application
    As a user I should be able to to interact with the Application


    Scenario: A User should be able to interact with the input form and Alert and modals
        Given I launch the app
        When I click on Input Forms button
        And I click on Simple Form Demo button
        And I enter Single Input text
        And I click on show message button
        And I should see text entered
        When I enter number in Enter a field
        And  I enter number in Enter b field
        And I click on Get Total button
        And I should verify total result text
        And I click on Select Dropdown List
        When I click on any day of the week
        And I should see Day selected
        And I click on multiple cities in the list
        And I click on First city selected button
        And I should see First city selected
        And I click on Get All selected button
        And I should see All selected cities
        When I click on Alerts & Modals
        And I click on Bootstrap Alerts button
        And I should see Bootstrap Alerts messages
        When I click on Alerts & Modal
        And I click on Bootstrap Modals button
        And I click on Launch modal button on Single Modal Example
        And I should see Modal title Alerts messages
        And I should be able to click on save change button
        And I click on Launch modal button on Multiple Modal Example
        And I should see First Modal title Alerts messages
        And I should be able to click on Launch Modal button to view the second modal
        Then I should be able to click on save changes button
