import { Locator, Page, expect } from "@playwright/test";
export class HomePage {
  productsTitle: Locator;
  hamburgerMenuIcon: Locator;
  filterIcon: Locator;
  mainTitle: Locator;
  itemAddToCart: Locator;

  constructor(page: Page) {
    this.productsTitle = page.locator('span[class="title"]');
    this.hamburgerMenuIcon = page.locator('button[id="react-burger-menu-btn"]');
    this.filterIcon = page.locator('select[class="product_sort_container"]');
    this.mainTitle = page.locator('div[class="app_logo"]');
  }
  async clickHamburgerMenu() {
    await this.hamburgerMenuIcon.click();
  }
  async clickFilter() {
    await this.filterIcon.click();
  }
  async addToCartButton() {
    await this.itemAddToCart.click();
  }

  async verifyproductsTitle(expectedText: string) {
    await expect(this.productsTitle).toHaveText(expectedText);
  }
  async verifymainTitle(expectedText: string) {
    await expect(this.mainTitle).toHaveText(expectedText);
  }
}
