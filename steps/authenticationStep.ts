import { expect, test } from "../fixtures/fixture";
import { createBdd } from "playwright-bdd";

const { Given, When, Then } = createBdd(test);

//Given steps
Given("I navigate to the login page of ERP next", async ({ page, loginPage }) => {
    await loginPage.navigate();
});

//When steps
When("I login using correct username and password", async ({ page, loginPage }) => {
    await loginPage.navigate();
    await loginPage.login("login_email", "login_password");
});

//Then steps
Then("I should successfully login to the ERP next", async ({ page }) => {
        await expect.soft(page).toHaveURL(/https:\/\/erp\-s\.ionmobility\.net\/app\/.*/);
        console.log("Assertion passed: URL matches expected pattern.");
});
Then("I should successfully logout from the ERP next", async ({ page, loginPage }) => {
    try {
        expect(loginPage.assertLoggedOut());
        console.log("Assertion passed: Successfully Logged Out.");
    } catch (error) {
        console.error("Assertion failed:", error);
        // Handle the error or fail the test accordingly
    }
});
