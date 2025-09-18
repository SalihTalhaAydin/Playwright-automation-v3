import {expect, Locator, Page} from '@playwright/test'

export class HomePage {

    cartImageButton: Locator
    homePageTitle: Locator

    constructor(page: Page) {
        this.cartImageButton = page.locator('a[data-test="shopping-cart-link"]')
        this.homePageTitle = page.locator('span[data-test="title"]')
    }

    titleValidation(expectedTitle: string): void {
        expect(this.homePageTitle).toHaveText(expectedTitle)
    }

}