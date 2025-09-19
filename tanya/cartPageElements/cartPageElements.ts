import { Locator, expect, Page } from "@playwright/test"
import { LoginPage } from "../homePageElements/login-page-tania"

export class HomePageElements {
    cartIcon: Locator
    qTYtext: Locator
    descriptionText: Locator
    checkoutButton: Locator
    continueShoppingButton: Locator

    constructor(page: Page){
        this.cartIcon = page.locator('a[class="shopping_cart_link"]')
        this.qTYtext = page.locator('div[data-test="cart-quantity-label"]')
        this.descriptionText = page.locator('div[class="cart_desc_label"]')
        this.checkoutButton = page.locator('div[class="cart_desc_label"]')
        this.continueShoppingButton = page.locator('button[id="continue-shopping"]')
    }
    async clickingCartButton():Promise<void>{
       await  this.cartIcon.click()
    }
    async buttonVisible():Promise<void>{
      await  expect(this.qTYtext).toHaveText("QTY")
      await  expect(this.descriptionText).toBeVisible()
    }

    async clickButtons():Promise<void>{
       await this.checkoutButton.click()
       await this.continueShoppingButton.click()
    }





}