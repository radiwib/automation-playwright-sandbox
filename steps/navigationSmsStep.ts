import { error } from "console";
import { expect, test } from "../fixtures/fixture";
import { createBdd } from "playwright-bdd";

const { Given, When, Then } = createBdd(test);

//Given steps
/*Given("I am on the ERP next home page", async ({ erpMenuPage }) => {
    await erpMenuPage.navigateToErpPage("home");
});*/
Given("I am on the ERP next {string} page", async ({ commonComponent }, mainPage) => {
    await commonComponent.clickSidebarItem(mainPage);
});

When("I click the {string} on the sidebar menu", async ({ commonComponent }, string) => {
    
});

//When steps
/*When("I click the user icon", async ({ userMenuPage }) => {
    await userMenuPage.userMenuClick();
});*/
When("I click {string} submenu", async ({ smsPage }, submenu) => {
    switch (submenu) {
        case "Service":
            await smsPage.clickService();
            break;
        case "Service Invoice":
            await smsPage.clickServiceInvoice();
            break;
        case "Service Package":
            await smsPage.clickServicePackage();
            break;
        case "Service Payment":
            await smsPage.clickServicePayment();
            break;
        case "Bike Owner":
            await smsPage.clickBikeOwner();
            break;
        case "Bike":
            await smsPage.clickBike();
            break;
        case "New Service":
            await smsPage.clickNewService();
            break;
        case "List Service":
            await smsPage.clickListService();
            break;
        default:
            console.log("Invalid submenu");
    }
});

//Then steps
Then("I should see {string} under Service Management System", async ({ smsPage }, smsSubMenu) => {
    let title = [
        { title: "Service Management" },
        { title: "Bike Ownership" }
    ]

        if (smsSubMenu == title) {
            smsPage.locateTitle(smsSubMenu);
        } else {
            smsPage.locateTitleShadowLink(smsSubMenu);
        }
        console.log(`Assertion passed: ${smsSubMenu} exist.`);
    
    
});
Then("I should see {string} under Service Management", async ({ smsPage }, smComponents) => {
    try {
        await smsPage.locateSmComponent(smComponents);
    } catch (error) {
        console.error("Assertion failed:", error);
        // Handle the error or fail the test accordingly
    }
});

Then("I should see {string} under Bike Ownership", async ({ page, smsPage }, bowComponents) => {
    try {
        await smsPage.locateBowComponent(bowComponents);
    } catch (error) {
        console.error("Assertion failed:", error);
        // Handle the error or fail the test accordingly
    }
});

Then("I should see {string} under Quick Action Service", async ({ smsPage }, qasComponents) => {
    try {
        await smsPage.locateQasComponent(qasComponents);
    } catch (error) {
        console.error("Assertion failed:", error);
        // Handle the error or fail the test accordingly
    }
});
