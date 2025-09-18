import { test, expect} from '@playwright/test'
import { LoginPage } from '../pages/login-page'


test('cart containing "your cart" text', async ({ page }) => {
    // login
    let loginPage = new LoginPage(page)
    await page.goto('https://www.saucedemo.com/')
    await loginPage.login('standard_user', 'secret_sauce')
    await page.locator('[data-test="shopping-cart-badge"]').click()
     await expect(page.locator('.title')).toHaveText('Your Cart')

 
})