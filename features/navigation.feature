Feature: User Navigation Journey
  As a user, I want to navigate through the Magento website to different sections and product details pages so that I can easily find what I'm looking for.

  Scenario: Users are Able to Navigate to "Men Jacket" Section
    Given the user navigates to the home page
    When the user hovers over the "Men" menu item
    And the user hovers over the "Tops" menu item
    And the user clicks on the "Jackets" menu item
    Then the title of the page should be "Jackets"
