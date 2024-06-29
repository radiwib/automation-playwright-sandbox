Feature: SMS_01_Homepage_Verification
    As a user
    I want to be able to access homepage of the app
    So that I can successfully access the app

  Scenario Outline: 02 Verification of SMS page
    Given I login using correct username and password
    When I am on the ERP next "SMS" page
    Then I should see "<smsSubMenu>" under Service Management System

    Examples:
      | smsSubMenu         |
      | Service Management   |
      | Bike Ownership       |
      | Quick Action Service |