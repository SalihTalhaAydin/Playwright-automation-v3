import { test } from '@playwright/test'
import { LoginTestPage } from '../pages/login-page-vova'
import { expect, Locator, Page } from '@playwright/test'
import { CartPage } from '../pages/cart-page'
import { HomePage } from '../pages/home-Page'

test('Cart test page', async ({ page }) => {

    let loginTest = new LoginTestPage(page)
    await page.goto('https://www.saucedemo.com/')
    await loginTest.loginTest('standard_user', 'secret_sauce')
    let homePage = new HomePage(page)
    await homePage.cart.click()
    let cartTest = new CartPage(page)
    await cartTest.expectedMessage('Your Cart')
})