import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";

const { Given, When, Then } = createBdd();

Given("the user navigates to the home page", async ({ page }) => {
  await page.goto("https://magento.softwaretestingboard.com/");
});
When(
  "the user hovers over the {string} menu item",
  async ({ page }, menuItem) => {
    await page
      .getByRole("menuitem")
      .filter({ hasText: new RegExp(menuItem) })
      .hover();
  }
);
When(
  "the user clicks on the {string} menu item",
  async ({ page }, menuItem) => {
    await page
      .getByRole("menuitem")
      .filter({ hasText: new RegExp(menuItem) })
      .click();
  }
);
When(
  "the user clicks on the {string} product",
  async ({ page }, productName) => {
    await page.getByText(productName).click();
  }
);
Then("the title of the page should be {string}", async ({ page }, title) => {
  await expect(page.locator(".page-title")).toHaveText(title);
});
