import { test as base } from 'playwright-bdd';
import { CommonComponent } from '../pages/commonComponent';
import { LoginPage } from '../pages/loginPage';
import { ErpMenuPage } from '../pages/erpMenuPage';
import { UserMenuPage } from '../pages/userMenuPage';
import { SmsPage } from '../pages/smsPage';

// Declare the types of your fixtures.
type MyFixtures = {
  commonComponent: CommonComponent,
  loginPage: LoginPage,
  erpMenuPage: ErpMenuPage,
  userMenuPage: UserMenuPage,
  smsPage: SmsPage,
};

// This new "test" can be used in multiple test files, and each of them will get the fixtures.
export const test = base.extend<MyFixtures>({
  commonComponent: async ({ page }, use) => {
    await use(new CommonComponent(page));
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  erpMenuPage: async ({ page }, use) => {
    await use(new ErpMenuPage(page));
  },
  userMenuPage: async ({ page }, use) => {
    await use(new UserMenuPage(page));
  },
  smsPage: async ({ page }, use) => {
    await use(new SmsPage(page));
  },
});
export { expect } from '@playwright/test';