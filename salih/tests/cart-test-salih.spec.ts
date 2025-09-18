import { test } from '@playwright/test'
import { LoginPage } from '../pages/login-page'

test('cart containing "your cart" text', async ({ page }) => {
    // login
    let loginPage = new LoginPage(page)
    loginPage.login("", "")

    // click on cart

    // validate cart title 
})
