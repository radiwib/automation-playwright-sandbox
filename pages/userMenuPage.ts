import { Page } from "@playwright/test";
import { CommonComponent } from './commonComponent';

export class UserMenuPage {
    readonly page: Page
    private commonComponent: CommonComponent;

    //Attributes of the UserMenuPage
    userMenuDropdown = () =>
        this.page.locator('//button[@aria-label="User Menu"]');
    dynamicOption = (dynamicTag: string, dynamicText: string) =>
        this.page.locator(`${dynamicTag}[text()="${dynamicText}"]`);

    //Constructor of the UserMenuPage
    constructor(page: Page) {
        this.page = page;
        this.commonComponent = new CommonComponent(this.page);
    }

    //Methods of the UserMenuPage
    async userMenuClick() {
        await this.userMenuDropdown().click();
    }
    async optionClick(tag: string, text: string) {
        await this.dynamicOption(tag, text).click();
    }
}