import {expect, Locator, Page} from '@playwright/test'

export class HomePage {

    cartImageButton: Locator
    homePageTitle: Locator
    hamburgerMenuIconButton: Locator
    allItemsOptionButton: Locator
    aboutOptionButton: Locator
    logoutOptionButton: Locator
    resetAppStateOptionButton: Locator


    constructor(page: Page) {
        this.cartImageButton = page.locator('a[data-test="shopping-cart-link"]')
        this.homePageTitle = page.locator('span[data-test="title"]')
        this.hamburgerMenuIconButton = page.locator('button[id="react-burger-menu-btn"]')
        this.allItemsOptionButton = page.locator('a[id="inventory_sidebar_link"]')
        this.aboutOptionButton = page.locator('a[id="about_sidebar_link"]')
        this.logoutOptionButton = page.locator('a[id="logout_sidebar_link"]')
        this.resetAppStateOptionButton = page.locator('a[id="reset_sidebar_link"]')
    }

    titleValidation(expectedTitle: string): void {
        expect(this.homePageTitle).toHaveText(expectedTitle)
    }

    hamburgerMenuButtonTextValidation(buttonNumber: number, expectedText: string): void {
        if(buttonNumber === 1) {
            expect(this.allItemsOptionButton).toHaveText(expectedText)
        } else if(buttonNumber === 2) {
            expect(this.aboutOptionButton).toHaveText(expectedText)
        } else if(buttonNumber === 3) {
            expect(this.logoutOptionButton).toHaveText(expectedText)
        } else if(buttonNumber === 4) {
            expect(this.resetAppStateOptionButton).toHaveText(expectedText)
        }
    }

}