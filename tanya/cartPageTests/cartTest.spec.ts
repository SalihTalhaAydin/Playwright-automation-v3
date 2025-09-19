import { test } from '@playwright/test'
import { LoginPage } from '../homePageElements/login-page-tania'
import { InventoryPage } from '../homePageElements/homepage'

test('cart icon is visible after login', async ({ page }) => {
  const loginPage = new LoginPage(page)
  const inventoryPage = new InventoryPage(page)

  await page.goto('https://www.saucedemo.com/')
  await loginPage.login('standard_user', 'secret_sauce')

  await inventoryPage.verifyCartIconIsVisible()
})

test('user can click cart and see "Your Cart" page', async ({ page }) => {
  const loginPage = new LoginPage(page)
  const inventoryPage = new InventoryPage(page)

  await page.goto('https://www.saucedemo.com/')
  await loginPage.login('standard_user', 'secret_sauce')

  await inventoryPage.clickCartIcon()
  await inventoryPage.verifyCartPageTitle('Your Cart')
})