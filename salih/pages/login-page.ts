// why do we need page file?
// we will import this page to test files for using methods.
// variables -> locators, expectedMessages
// methods -> login = username, password as arguments.

// we need to use Locator as data type
import { expect, Locator, Page } from '@playwright/test'

export class LoginPage {

    userName: Locator
    password: Locator
    loginButton: Locator
    errorMessage: Locator

    // constructor is very special method for creating the copy of the class
    // this -> representing class and whatever it has (variable, method)
    constructor(page: Page) {
        this.userName = page.locator('input[id="user-name"]')
        this.password = page.locator('input[id="password"]')
        this.loginButton = page.locator('input[id="login-button"]')
        this.errorMessage = page.locator('h3[data-test="error"]')
    }

    async login(userName: string, password: string): Promise<void> {
        // giving username text to username locator
        // fill()
        // locator.fill(text)
        // this.userName -> locator
        // userName -> string
        await this.userName.fill(userName)
        await this.password.fill(password)
        await this.loginButton.click()
    }

    validateErrorMessage(expectedErrorMessage: string): void {
        expect(this.errorMessage).toHaveText(expectedErrorMessage)
    }
}
// let loginPage = new LoginPage(page)