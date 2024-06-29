import { Page } from "@playwright/test";
import { CommonComponent } from './commonComponent';

export class ErpMenuPage {
    readonly page: Page
    private commonComponent: CommonComponent;

    //Attributes of the ErpMenuPage
    dynamicGotoPageUrl = (dynamicPage: string) =>
        this.page.goto(`https://erp-s.ionmobility.net/app/${dynamicPage}`);
    dynamicPageUrl = (dynamicPage: string) =>
        this.page.url().includes(`*/app/${dynamicPage}`);
    dynamicMenu = (dynamicMenu: string) =>
        this.page.locator(`//span[text()="${dynamicMenu}"]`);

    //Constructor of the ErpMenuPage
    constructor(page: Page) {
        this.page = page;
        this.commonComponent = new CommonComponent(this.page);
    }

    //Methods of the ErpMenuPage
    async navigateToErpPage(erpPage: string) {
        await this.dynamicGotoPageUrl(erpPage);
    }
    async assertErpPage(erpPage: string) {
        await this.dynamicPageUrl(erpPage);
    }
    async clickErpMenu(menu: string) {
        await this.dynamicMenu(menu).click();
    }
    
}