import { test } from '@playwright/test'
import {LoginPage} from '../pages/login-page'

test('valid username, invalid password', async ({ page }) => {
    let loginPage = new LoginPage(page)
    await page.goto('https://www.saucedemo.com/')
    await loginPage.login('123', 'secret_sauce')
    loginPage.validateErrorMessage('Epic sadface: Username and password do not match any user in this service')
})