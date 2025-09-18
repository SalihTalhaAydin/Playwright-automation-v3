import {test} from '@playwright/test'
import {LoginPage} from '../pages/login-page'

test('empty username, valid password', async ({page}) => {
    let loginPage = new LoginPage(page)

    await page.goto('https://www.saucedemo.com/')

    await loginPage.login('', 'secret_sauce')

    await loginPage.validateErrorMessage('Epic sadface: Username is required')
})