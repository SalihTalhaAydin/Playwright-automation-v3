import { test } from '@playwright/test'
import { LoginTestPage } from '../pages/login-page-vova'
test('Invalid username and password', async ({ page }) => {

    let loginTestPage = new LoginTestPage(page)
    await page.goto('https://www.saucedemo.com/')
    await loginTestPage.loginTest('123', 'rtojg')
    loginTestPage.validateMessage('Epic sadface: Username and password do not match any user in this service')
})