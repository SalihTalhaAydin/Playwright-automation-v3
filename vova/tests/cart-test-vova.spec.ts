import { test } from '@playwright/test'
import { LoginTestPage } from '../pages/login-page-vova'
import { expect, Locator, Page } from '@playwright/test'
import { CartPage } from '../pages/cart-page'

test('Cart test page', async ({ page }) => {

    let loginTest = new LoginTestPage(page)
    await page.goto('https://www.saucedemo.com/')
    await loginTest.loginTest('standard_user', 'secret_sauce')
    let cartTest=new CartPage(page)
    cartTest.expectedMessage('Your Cart')
})