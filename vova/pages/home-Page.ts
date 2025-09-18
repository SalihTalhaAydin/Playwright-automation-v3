import { expect, Locator, Page } from '@playwright/test'

export class HomePage {
    userName: Locator;
    password: Locator;
    loginButton: Locator;
    cart: Locator;
    ourMessage: Locator;
    constructor(page: Page) {
        this.userName = page.locator('input[id="user-name"]')
        this.password = page.locator('input[id="password"]')
        this.loginButton = page.locator('input[id="login-button"]')
        this.cart = page.locator('div[id="shopping_cart_container"]')
        this.ourMessage=page.locator('span[class="title"]')
    }
    async loginTest(userName: string, password: string): Promise<void> {
        await this.userName.fill(userName)
        await this.password.fill(password)
        await this.loginButton.click()
        await this.cart.click()
    }
    expectedMessage(titleMessage: string): void {
      expect(this.ourMessage).toHaveText(titleMessage)
    }
}


