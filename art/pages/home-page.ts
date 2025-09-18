import {Locator, Page} from '@playwright/test'

export class HomePage {

    cartImageButton: Locator

    constructor(page: Page) {
        this.cartImageButton = page.locator('a[data-test="shopping-cart-link"]')
    }

}