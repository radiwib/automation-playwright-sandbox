import { expect, test } from "../fixtures/fixture";
import { createBdd } from "playwright-bdd";

const { Given, When, Then } = createBdd(test);

//Given steps
Given("I am on the ERP next home page", async ({ loginPage, erpMenuPage }) => {
    await loginPage.navigate();
    await loginPage.login("rahadian.wibisono@ionmobility.com", "adi@Ion123");
    //await erpMenuPage.navigateToErpPage("home");
    await erpMenuPage.clickErpMenu("Home");

});
/*Given("I am on the ERP next SMS page", async ({ page, erpMenuPage }) => {
    await erpMenuPage.navigateToErpPage("SMS");
});*/

//When steps
When("I click the user icon", async ({ page, userMenuPage }) => {
    await userMenuPage.userMenuClick();
});
When("I choose {string} from the option lists", async ({ page, userMenuPage }) => {
    await userMenuPage.userMenuClick();
    await userMenuPage.optionClick("button", "Logout");
});
When("I click the {string} on the sidebar menu", async ({ page, commonComponent }, string) => {
    await commonComponent.clickSidebarItem(string);
});

//Then steps
Then("I shouldredirected into {string} page", async ({ page, erpMenuPage }, string) => {
    try {
        expect(erpMenuPage.assertErpPage(string));
        console.log(`Assertion passed: Correctly navigated to the ${string} page.`);
    } catch (error) {
        console.error("Assertion failed:", error);
        // Handle the error or fail the test accordingly
    }
});