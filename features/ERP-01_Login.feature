Feature: ERP-01_Login
    As a user
    I want to login to the ERP next
    So that I can access the SMS page

    Scenario: Access to homepage
        Given I navigate to the login page of ERP next
        When I login using correct username and password
        Then I should successfully login to the ERP next