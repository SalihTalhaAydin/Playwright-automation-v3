import {Locator, Page} from '@playwright/test'

export class CartPage {

    cartPageTitle: Locator

    constructor(page: Page) {
        this.cartPageTitle = page.locator('span[data-test="title"]')
    }

}