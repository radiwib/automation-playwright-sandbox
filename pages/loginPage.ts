import { Page } from "@playwright/test";
import { CommonComponent } from './commonComponent';

export class LoginPage {
    readonly page: Page
    private commonComponent: CommonComponent;

    //Attributes of the LoginPage
    emailField = () =>
        this.page.locator('input[id="login_email"]');
    passwordField = () =>
        this.page.locator('input[id="login_password"]');
    loginButton = () =>
        this.page.locator('//section[@class="for-login"]//button[@type="submit"]');
    signUpButton = () =>
        this.page.locator('//a[text()="Sign up"]');
    showPasswordButton = () =>
        this.page.locator('//button[@id="show_password"]');
    loggedOutState = () =>
        this.page.locator('//body[frappe-session-status="logged-out"]');

    //Constructor of the LoginPage
    constructor(page: Page) {
        this.page = page;
        this.commonComponent = new CommonComponent(this.page);
    }

    //Methods of the LoginPage
    async navigate() {
        await this.page.goto('https://erp-s.ionmobility.net/login#login');
    }
    async login(username: string, password: string) {
        await this.emailField().fill(username);
        await this.passwordField().fill(password);
        await this.loginButton().click();
    }
    async signUp() {
        await this.signUpButton().click();
    }
    async showPassword() {
        await this.showPasswordButton().click();
    }
    async assertLoggedOut() {
        await this.loggedOutState().isVisible();
    }

}