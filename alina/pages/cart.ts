import { Page, Locator, expect } from "@playwright/test";

export class CartPage {
  qtyHeader: Locator;
  descriptionHeader: Locator;
  checkOutButton: Locator;
  continueShoppingButton: Locator;
  

  constructor(page: Page) {
    this.qtyHeader = page.locator('div[class="cart_quantity_label"]');
    this.descriptionHeader = page.locator('div[class="cart_desc_label"]');
     
    this.checkOutButton = page.locator(
      'button[class="btn btn_action btn_medium checkout_button "]'
    );
    this.continueShoppingButton = page.locator(
      'button[id="continue-shopping"]'
    );
  }
  async clickCheckout() {
    await this.checkOutButton.click();
  }
  async clickContinueShopping() {
    await this.continueShoppingButton.click();
  }
  async verifyqtyHeader(expectedText: string) {
    await expect(this.qtyHeader).toHaveText(expectedText);
  }
  async verifydescriptionHeader(expectedText: string) {
    await expect(this.descriptionHeader).toHaveText(expectedText);
  }
}
