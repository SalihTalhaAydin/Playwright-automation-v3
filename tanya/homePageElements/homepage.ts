import { expect, Locator, Page } from '@playwright/test'

export class InventoryPage {
  shoppingCartIcon: Locator
  cartTitleText: Locator

  constructor(page: Page) {
    this.shoppingCartIcon = page.locator('a[class="shopping_cart_link"]')
    this.cartTitleText = page.locator('span[class="title"]')
  }

  async verifyCartIconIsVisible() {
    await expect(this.shoppingCartIcon).toBeVisible()
  }

  async clickCartIcon() {
    await this.shoppingCartIcon.click()
  }

  async verifyCartPageTitle(expectedTitle: string) {
    await expect(this.cartTitleText).toHaveText(expectedTitle)
  }
}
