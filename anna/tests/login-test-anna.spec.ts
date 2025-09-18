import { test } from '@playwright/test'
import {LoginPage} from '../pages/login-page'

test('valid username, empty password', async ({ page }) => { 
    let loginPage = new LoginPage(page)
    await page.goto('https://www.saucedemo.com/')
    await loginPage.login('standard_user', '')
    loginPage.validateErrorMessage('Epic sadface: Psssword is required')
})