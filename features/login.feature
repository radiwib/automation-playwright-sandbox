Feature: User Navigation Journey
  As a user, I want to navigate through the Magento website to different sections and product details pages so that I can easily find what I'm looking for.

  Scenario: Users are Able to Navigate to "Men Jacket" Section
    Given the user navigates to the home page
    And the user navigates to the login page
    When the user enters the valid credential "<username>" and "<password>"
    And user click the login button
    Then the user should be login successfully
