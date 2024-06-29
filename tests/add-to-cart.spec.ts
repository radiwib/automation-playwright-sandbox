import { test, expect } from "@playwright/test";

test.describe("User be able to add item to the cart from opening item page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://magento.softwaretestingboard.com/");

    await page.hover("text=Women");
    await page.hover('//a[span[text()="Bottoms"]]');
    await page.click('//a[span[text()="Shorts"]]');
  });

  test("User are able to add to chart from single item page", async ({
    page,
  }) => {
    await page.locator("//a[contains(text(),'Erika Running Short')]").click();
    await page
      .locator("//div[@attribute-code='size']//div[@option-label='28']")
      .click();
    await page
      .locator("//div[@attribute-code='color']//div[@option-label='Red']")
      .click();
    await page.locator("//button[@title='Add to Cart']").click();
    await page.locator("//a[@class='action showcart']").click();

    await expect(
      page.locator("//div[@class='items-total']//span[@class='count']")
    ).toHaveText("1");
  });

  test("User are able to add multiple items to the cart", async ({ page }) => {
    // Define the number of items to add to the cart
    const numberOfItemsToAdd = 3;

    // Loop to add the same item multiple times
    for (let i = 0; i < numberOfItemsToAdd; i++) {
      // Add an item to the cart
      await page.locator("//a[contains(text(),'Erika Running Short')]").click();
      await page
        .locator("//div[@attribute-code='size']//div[@option-label='28']")
        .click();
      await page
        .locator("//div[@attribute-code='color']//div[@option-label='Red']")
        .click();
      await page.locator("//button[@title='Add to Cart']").click();

      // Wait for the cart to update
      await page.waitForTimeout(1000); // Adjust the timeout as needed

      // Navigate back to the previous page to add another item
      if (i < numberOfItemsToAdd - 1) {
        await page.goto("https://magento.softwaretestingboard.com");

        await page.hover("text=Women");
        await page.hover('//a[span[text()="Bottoms"]]');
        await page.click('//a[span[text()="Shorts"]]');
      }
    }

    // View the cart
    await page.locator("//a[@class='action showcart']").click();

    // Assert that the cart has the correct number of items
    await expect(
      page.locator("//div[@class='items-total']//span[@class='count']")
    ).toHaveText(`${numberOfItemsToAdd}`);
  });
});

test.describe("User are able to add item to the cart from homepage", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://magento.softwaretestingboard.com/");

    await page.locator('//a[span[text()="Gear"]]').hover();
    await page.locator('//a[span[text()="Watches"]]').click();
  });

  test("User are able to add single item to the cart", async ({ page }) => {
    await page.locator("//a[contains(text(),'Didi Sport Watch')]").hover();
    await page.locator(
      "//a[contains(text(),'Didi Sport Watch')]/ancestor::div[@class='product details product-item-details']//button[@type='submit']"
    ).click();

    await expect(
      page.locator("//div[@class='items-total']//span[@class='count']")
    ).toHaveText("1");
  });

  test("User are able to add single item to the cart 2", async ({ page }) => {
    await page.locator("//a[contains(text(),'Didi Sport Watch')]").hover();
    await page.locator(
      "//a[contains(text(),'Didi Sport Watch')]/ancestor::div[@class='product details product-item-details']//button[@type='submit']"
    ).click();

    await expect(
      page.locator("//div[@class='items-total']//span[@class='count']")
    ).toHaveText("1");
  });
});
