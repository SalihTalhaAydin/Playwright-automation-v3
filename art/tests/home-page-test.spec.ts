import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/login-page'
import { HomePage } from '../pages/home-page'

test.beforeEach(async ({page}) => {
    await page.goto('https://www.saucedemo.com')
})

test('Home Page title validation', async ({page}) => {
    let loginPage = new LoginPage(page)
    let homePage = new HomePage(page)

    await loginPage.login('standard_user', 'secret_sauce')

    let expectedHomePageTitle = 'Products'
    homePage.titleValidation(expectedHomePageTitle)
})