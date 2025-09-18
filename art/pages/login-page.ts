import {expect, Locator, Page} from '@playwright/test'

export class LoginPage {

    userNameInput: Locator
    passwordInput: Locator
    loginButton: Locator
    errorMessage: Locator

    constructor(page: Page) {
        this.userNameInput = page.locator('input[id="user-name"]')
        this.passwordInput = page.locator('input[id="password"]')
        this.loginButton = page.locator('input[id="login-button"]')
        this.errorMessage = page.locator('h3[data-test="error"]')
    }

    async login(userName: string, password: string): Promise<void> {
        await this.userNameInput.fill(userName)
        await this.passwordInput.fill(password)
        await this.loginButton.click()
    }

    validateErrorMessage(expectedErrorMessage: string): void {
        expect(this.errorMessage).toHaveText(expectedErrorMessage)
    }

}