import { Locator, Page } from "@playwright/test";

export class CommonComponent {
    page: Page;

    //Attributes of the CommonComponent
    sidebarItemDynamictext = (dynamicSidebar: String) =>
        this.page.locator(`//a[@title="${dynamicSidebar}"]`);
    searchMenu = () =>
        this.page.locator('input[id="navbar-search"]');
    userMenuDropdown = () =>
        this.page.locator('//button[@aria-label="User Menu"]');

    //Constructor of the CommonComponent
    constructor(page: Page) {
        this.page = page;
    }

    //Methods of the CommonComponent
    async clickSidebarItem(sidebarItem: string) {
        await this.sidebarItemDynamictext(sidebarItem).click();
    }
    async hoverSidebarItem(sidebarItem: string) {
        await this.sidebarItemDynamictext(sidebarItem).hover();
    }
    async searchMenuClick() {
        await this.searchMenu().click();
    }
    async searchMenuFill(text: string) {
        await this.searchMenu().fill(text);
    }
    async searchMenuPressEnter() {
        await this.searchMenu().press("Enter");
    }
}