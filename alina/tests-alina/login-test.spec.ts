import { test } from "@playwright/test";
import { LoginPage } from "../pages/login-page";

test("valid username, empty password", async ({ page }) => {
  let loginPage = new LoginPage(page);
  await page.goto("https://www.saucedemo.com/");

  await loginPage.login("secret_sauce", "");
  loginPage.validateErrorMessage("Epic sadface: Password is required");
});
