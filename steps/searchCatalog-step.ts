import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";
import { testdata } from "../testdata/searchCatalog-step.testdata";

const { Given, When, Then } = createBdd();

Given("the user navigates to the home page", async ({ page }) => {
  await page.goto("https://magento.softwaretestingboard.com/");
});
When(
  "the user search the product on the search bar",

  async ({ page }, menuItem) => {
    for (const data of testdata) {
      await page.locator("#search").click();
      await page.locator("#search").fill(data.productKeyWord);
      await page.getByRole("button", { name: "Search" }).click();
    
    }
  }
);
Then(
  "the user should see the product on the search result page",
  async ({ page }, menuItem) => {
    for (const data of testdata) {
      await expect(page.locator("xpathnya catalog list")).toContainText(data.productKeyWord);
      }
  }
);
