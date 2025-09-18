import { expect, Locator, Page } from '@playwright/test'

export class HomePage {

    productsTitle : Locator
    leftMenuButton : Locator
    cartButton : Locator

    constructor(page: Page) {
        this.productsTitle = page.locator('span[class="title"]')
        this.leftMenuButton = page.locator('button[id="react-burger-menu-btn"]')
        this.cartButton = page.locator('a[class="shopping_cart_link"]')
    }

    async clickCartButton(): Promise<void> {
        await this.cartButton.click()
    }

   async clickLeftMenuButton(): Promise<void> {
        await this.leftMenuButton.click()
    }
    
    verifyTitle(expectedTitle: string): void {
        expect(this.productsTitle).toHaveText(expectedTitle)
    }
}