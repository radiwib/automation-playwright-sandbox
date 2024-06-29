import { Page } from "@playwright/test";
import { CommonComponent } from './commonComponent';

export class LoginPageErpnext {
    readonly page: Page
    private navigationComponent: CommonComponent;
    
    constructor(page: Page) {
        this.page = page;
        this.navigationComponent = new CommonComponent(this.page);
    }
    async navigate() {
        await this.page.goto('https://erp-s.ionmobility.net/login#login');
    }
    // async navigateFromNavigationBar() {
    //     await this.navigationComponent.signInButton().click();
    // }
}