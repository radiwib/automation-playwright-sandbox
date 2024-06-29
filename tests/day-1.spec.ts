import { test, expect } from '@playwright/test';

test('User are Able to Navigate to Mens Jacket at Product Catalogue', async ({ 
  page,
 }) => {
  test.setTimeout(60000);

  await page.goto('https://magento.softwaretestingboard.com/');
  
  await page.getByRole('menuitem', { name: ' Men' }).hover();
  await page.getByRole('menuitem', { name: ' Tops' }).hover();
  await page.getByRole('menuitem', { name: 'Jackets' }).click();
  await expect(page.getByLabel('Items').locator('span')).toContainText('Jackets');
  
});

test('User are Able to Navigate to Womens Jacket at Product Catalogue', async ({
  page,
}) => {
  test.setTimeout(60000);

  await page.goto('https://magento.softwaretestingboard.com/');
  
  await page.hover('text=Women');
  await page.hover('//a[span[text()="Bottoms"]]');
  await page.click('//a[span[text()="Shorts"]]');
  await expect(page.locator("//span[@data-ui-id='page-title-wrapper']")).toContainText('Shorts'); 
});