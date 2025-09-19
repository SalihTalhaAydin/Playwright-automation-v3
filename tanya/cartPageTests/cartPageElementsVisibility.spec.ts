import {test} from"@playwright/test"
import { LoginPage } from "../homePageElements/login-page-tania"
import { HomePageElements } from "../cartPageElements/cartPageElements"

test("Visibility and functionality of cart", async ({page}) => {
    let loginPage =  new LoginPage(page)
    let homePageElements = new HomePageElements(page)

    await page.goto('https://www.saucedemo.com/')
    await loginPage.login('standard_user', 'secret_sauce')
    await homePageElements.buttonVisible()
    await homePageElements.clickButtons()
})