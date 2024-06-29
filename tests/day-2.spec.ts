import { test, expect } from "@playwright/test";

test.describe("User are able to navigate into toolbar", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://magento.softwaretestingboard.com/");
  });

  test("User are Able to Navigate to Mens Jacket at Product Catalogue", async ({
    page,
  }) => {
    //test.setTimeout(60000);

    //await page.goto('https://magento.softwaretestingboard.com/');

    await page.getByRole("menuitem", { name: " Men" }).hover();
    await page.getByRole("menuitem", { name: " Tops" }).hover();
    await page.getByRole("menuitem", { name: "Jackets" }).click();
    await expect(page.getByLabel("Items").locator("span")).toContainText(
      "Jackets"
    );
  });

  test("User are Able to Navigate to Womens Jacket at Product Catalogue", async ({
    page,
  }) => {
    //test.setTimeout(60000);

    //await page.goto('https://magento.softwaretestingboard.com/');

    await page.hover("text=Women");
    await page.hover('//a[span[text()="Bottoms"]]');
    await page.click('//a[span[text()="Shorts"]]');
    await expect(
      page.locator("//span[@data-ui-id='page-title-wrapper']")
    ).toContainText("Shorts");
  });
});

test.describe("User be able to add woman shorts to cart", () => {
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

  test("User are able to add multiple items to the cart", async ({
    page,
  }) => {});
});
