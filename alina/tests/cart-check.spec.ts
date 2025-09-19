import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/login-page";
import { HomePage } from "../pages/home-page";
import { CartPage } from "../pages/cart";


test("Login1, home page and cart page functionality", async ({ page }) => {
  let loginPage = new LoginPage(page);
  let homePage = new HomePage(page);
  let cartPage = new CartPage(page);

  await page.goto("https://www.saucedemo.com");
  await loginPage.login("standard_user", "secret_sauce");
  await homePage.verifyproductsTitle("Products");
  await homePage.verifymainTitle("Swag Labs");
  await homePage.addToCartButton();
  await cartPage.verifyqtyHeader("QTY");
  await cartPage.verifydescriptionHeader("Description");
  await cartPage.clickContinueShopping();
});
