import { expect, Locator, Page } from '@playwright/test'

export class CartPage {

    yourCartTitle : Locator
    continueShoppingButton : Locator
    checkoutButton : Locator

    constructor(page: Page) {
        this.yourCartTitle = page.locator('span[class="title"]')
        this.continueShoppingButton = page.locator('button[id="continue-shopping"]')
        this.checkoutButton = page.locator('button[id="checkout"]')
    }

    async clickContinueShoppingButton(): Promise<void> {
        await this.continueShoppingButton.click()
    }

   async clickCheckoutButton(): Promise<void> {
        await this.checkoutButton.click()
    }
    
    verifyTitle(expectedTitle: string): void {
        expect(this.yourCartTitle).toHaveText(expectedTitle)
    }
}