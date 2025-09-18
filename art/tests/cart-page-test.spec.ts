import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/login-page'
import { HomePage } from '../pages/home-page'
import { CartPage } from '../pages/cart-page'

test.beforeEach(async ({page}) => {
    await page.goto('https://www.saucedemo.com')
})

test('Cart Page title validation', async ({page}) => {
    let loginPage = new LoginPage(page)
    let homePage = new HomePage(page)
    let cartPage = new CartPage(page)

    await loginPage.login('standard_user', 'secret_sauce')

    await homePage.cartImageButton.click()

    let expectedCartPageTitle = 'Your Cart'
    expect(await cartPage.cartPageTitle).toHaveText(expectedCartPageTitle)
})