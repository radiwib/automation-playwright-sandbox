Feature: ERP-02_Logout
    As a user
    I want to login to the ERP next
    So that I can access the SMS page

    Scenario: Access to homepage
        Given I am on the ERP next home page
        When I click the user icon
        And I choose "Logout" from the option lists
        Then I should successfully logout from the ERP next