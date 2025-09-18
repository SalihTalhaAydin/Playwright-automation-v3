import { test } from '@playwright/test'
import { HomePage } from '../pages/home-Page'
import { expect, Locator, Page } from '@playwright/test'

test('Cart test page', async ({ page }) => {

    let homePage = new HomePage(page)
    await page.goto('https://www.saucedemo.com/')
    await homePage.loginTest('standard_user', 'secret_sauce')
    homePage.expectedMessage('Your Cart')
})