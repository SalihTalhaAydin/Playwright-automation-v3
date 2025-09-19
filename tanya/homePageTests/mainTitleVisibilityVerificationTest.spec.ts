import{test} from "@playwright/test"
import { LoginPage } from "../homePageElements/login-page-tania"
import { MainTitle } from "../homePageElements/mainTitleVisibilityVerification"

test("Main Title Visibility", async ({page}) => {

    let loginPage = new LoginPage(page)
    let mainTitle = new MainTitle(page)
 await page.goto('https://www.saucedemo.com/')
 await loginPage.login("standard_user", "secret_sauce")
 await mainTitle.mainTitleVisibility()
})