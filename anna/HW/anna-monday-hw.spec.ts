import { test, expect } from '@playwright/test'
test.describe('Demo functionality', ()=>{
    let baseURL = 'https://www.saucedemo.com/'
    let username = 'standard_user'
    let password = 'secret_sauce'


    test.beforeEach(async ({ page }) => {
 
    await page.goto(baseURL)
    await page.fill('[data-test="username"]', username)
    await page.fill('[data-test="password"]', password)
    await page.click('[data-test="login-button"]')


    await expect(page.locator('class = title')).toHaveText('Products')
})

  test('Verify left menu options', async ({ page }) => {

    await page.click('id=react-burger-menu-btn')
    await expect(page.locator('id="inventory_sidebar_link"')).toHaveText('All Items')
    await expect(page.locator('id="about_sidebar_link"')).toHaveText('About')
    await expect(page.locator('id="logout_sidebar_link"')).toHaveText('Logout')
    await expect(page.locator('id="reset_sidebar_link"')).toHaveText('Reset App State')

    await page.click('id=inventory_sidebar_link')
    await expect(page.locator('class=title')).toHaveText('Products')

     await page.click('id="react-burger-menu-btn"')
     await page.click('id=about_sidebar_link')
     await expect(page).toHaveURL('https://saucelabs.com/')

    await page.click('id=react-burger-menu-btn')
    await page.click('id=reset_sidebar_link')
    await page.click('id=react-burger-menu-btn')
     await page.click('id=logout_sidebar_link')
    await expect(page.locator('[data-test="login-button"]')).toBeVisible()
  })
})




