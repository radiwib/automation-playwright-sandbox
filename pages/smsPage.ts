import { expect, Page } from "@playwright/test";
import { CommonComponent } from './commonComponent';

export class SmsPage {
    readonly page: Page
    private commonComponent: CommonComponent;

    //Attributes of the SmsPage
    dynamicSmsTitleLocate = (dynamicSmsCardNameAndTitle: string) =>
        this.page.locator(`//div[@card_name="${dynamicSmsCardNameAndTitle}"]//span[@title="${dynamicSmsCardNameAndTitle}"]`);
    dynamicSmsLinkLocate = (dynamicSmsCardName: string) =>
        this.page.locator(`//div[@card_name="${dynamicSmsCardName}"]//span[@class="link-text"]`);
    dynamicSmsLinkAction = (dynamicSmsCardName: string, dynamicText: string) =>
        this.page.locator(`//div[@id="editorjs"]//div[@card_name="${dynamicSmsCardName}"]//span[text()="${dynamicText}"]`);
    dynamicSmsShadowTitleLocate = (dynamicSmsCardNameAndTitle: string) =>
        this.page.locator(`//div[@custom_block_name="${dynamicSmsCardNameAndTitle}"]//span[@title="${dynamicSmsCardNameAndTitle}"]`);
    dynamicSmsShadowLinkLocate = (dynamicSmsCardName: string) =>
        this.page.locator(`//div[@custom_block_name="${dynamicSmsCardName}"]//span[@class="link-text"]`);
    dynamicSmsShadowLinkAction = (dynamicSmsCardName: string, dynamicText: string) =>
        this.page.locator(`//div[@id="editorjs"]//div[@card_name="${dynamicSmsCardName}"]//span[text()="${dynamicText}"]`);

    //Constructor of the SmsPage
    constructor(page: Page) {
        this.page = page;
        this.commonComponent = new CommonComponent(this.page);
    }

    //Methods of the SmsPage
    //Clicking Methods
    async clickService() {
        await this.dynamicSmsLinkAction("Service Management", "Service").click();
    }
    async clickServiceInvoice() {
        await this.dynamicSmsLinkAction("Service Management", "Service Invoice").click();
    }
    async clickServicePackage() {
        await this.dynamicSmsLinkAction("Service Management", "Service Package").click();
    }
    async clickServicePayment() {
        await this.dynamicSmsLinkAction("Service Management", "Service Payment").click();
    }
    async clickBikeOwner() {
        await this.dynamicSmsLinkAction("Bike Ownership", "Bike Owner").click();
    }
    async clickBike() {
        await this.dynamicSmsLinkAction("Bike Ownership", "Bike").click();
    }
    async clickNewService() {
        await this.dynamicSmsShadowLinkAction("Quick Action SMS", "New Service").click();
    }
    async clickListService() {
        await this.dynamicSmsShadowLinkAction("Quick Action SMS", "List Service").click();
    }

    //Locating Methods
    async locateSmComponent(component: string) {
        expect(this.dynamicSmsLinkLocate("Service Management")).toHaveText(component);
    }
    async locateBowComponent(component: string) {
        expect(this.dynamicSmsLinkLocate("Bike Ownership")).toHaveText(component);
    }
    async locateQasComponent(component: string) {
        await expect(this.dynamicSmsShadowLinkLocate("Quick Action Service")).toHaveText(component);   
    }
    async locateTitle(title: string) {
        await expect(this.dynamicSmsTitleLocate(title)).toHaveText(title);
    }
    async locateTitleShadowLink(title: string) {
        await expect(this.dynamicSmsShadowTitleLocate(title)).toHaveText(title);
    }


}