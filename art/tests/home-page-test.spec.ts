import { test } from '@playwright/test'
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

test('Home Page hamburger menu buttons text validation', async ({page}) => {
    let loginPage = new LoginPage(page)
    let homePage = new HomePage(page)

    await loginPage.login('standard_user', 'secret_sauce')

    let expectedAllItemsButton = 'All Items'
    let expectedAboutButton = 'About'
    let expectedLogoutButton = 'Logout'
    let expectedResetAppState = 'Reset App State'

    homePage.hamburgerMenuButtonTextValidation(1, expectedAllItemsButton)
    homePage.hamburgerMenuButtonTextValidation(2, expectedAboutButton)
    homePage.hamburgerMenuButtonTextValidation(3, expectedLogoutButton)
    homePage.hamburgerMenuButtonTextValidation(4, expectedResetAppState)
})