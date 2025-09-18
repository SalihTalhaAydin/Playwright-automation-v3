import { test } from '@playwright/test'
import { LoginPage } from '../pages/login-page'
import { HomePage } from '../pages/home-page'
import { CartPage } from '../pages/cart-page'

test('Cart containing "Your Cart" text', async ({ page }) => {
    
    let loginPage = new LoginPage(page)
    loginPage.login("standard_user", "secret_sauce")

    let homePage = new HomePage(page)
    homePage.clickCartButton()
    
    let cartPage = new CartPage(page)
    cartPage.verifyTitle("Your Cart")
})