import { test, expect } from "@playwright/test";
import { testdata } from "../testdata/addProductDataDriven.testdata";

test.describe("User be able to add item to the cart from opening item page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://magento.softwaretestingboard.com/");

  });

  test('', async ({ page }) => {
    for (const data of testdata) {
      test(`User are able to add ${data.productName} product to cart by clicking "Add to Cart" button in the product catalogue page`, async ({ page }) => {
          await page.locator("#search").click()
          await page.locator("#search").fill(data.productName)
          await page.getByRole("button", {name: "Search"}).click()
      
          for (let i = 0; i < data.quantity; i++) {
              await page.locator(`//strong[normalize-space(.) = '${data.productName}']/parent::div`).hover()
              // TODO - Reduce flakyness
              let responsePromise = page.waitForResponse(/\/customer\/section\/load\/\?sections=cart/)
              await page.locator(`//strong[normalize-space(.) = '${data.productName}']/parent::div`).getByRole("button", {name: "Add to Cart"}).click()
              // TODO - Make the quantity functionality works
              const response = await responsePromise;
          }
          
          await page.getByRole("link", {name: "My Cart"}).click({delay: 1000})
          await expect(page.locator("#mini-cart")).toContainText(data.productName)
      });
  }
  })
  
  


});
