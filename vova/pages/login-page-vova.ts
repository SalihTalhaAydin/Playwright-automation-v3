import { expect, Locator, Page } from '@playwright/test'

export class LoginTestPage {
    userName: Locator;
    password: Locator;
    loginButton: Locator;
    errorMessage: Locator;

    constructor(page: Page) {
        this.userName = page.locator('input[id="user-name"]')
        this.password = page.locator('input[id="password"]')
        this.loginButton = page.locator('input[id="login-button"]')
        this.errorMessage = page.locator('h3[data-test="error"]')
    }
    async loginTest(userName: string, password: string): Promise<void> {
        await this.userName.fill(userName)
        await this.password.fill(password)
        await this.loginButton.click()
    }
    validateMessage(expectedErrorMessage: string): void {

        expect(errorMessage: string).toHaveText(expectedErrorMessage)
    }


}


