Feature: Add To Cart Functionality
  As a user, 
  I want to be able to search for a product from the product catalog page
  so that I can find the product I am looking for

  Scenario: Users are able to add the item to the cart
    Given the user navigates to the home page and click search button
    When the user search the product on the search bar
    Then the user should see the product on the search result page
