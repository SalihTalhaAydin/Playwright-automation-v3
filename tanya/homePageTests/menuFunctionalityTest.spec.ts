import{test} from "@playwright/test"
import { LoginPage } from "../homePageElements/login-page-tania"
import { MenuButton } from "../homePageElements/menuFunctionality"

test('Clicking menu button', async ({page}) => {
    let loginPage = new LoginPage(page)
    let menuButton = new MenuButton(page)

   await page.goto('https://www.saucedemo.com/')
   await loginPage.login('standard_user', 'secret_sauce')
   await menuButton.clickingMenuButton()
    
})