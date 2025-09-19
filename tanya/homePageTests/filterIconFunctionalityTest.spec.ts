import{test} from "@playwright/test"
import { LoginPage } from "../homePageElements/login-page-tania"
import { FilterButton } from "../homePageElements/filterIcon"

test("Filter button functionality", async ({page}) => {
    let loginPage = new LoginPage(page)
    let filterButton = new FilterButton(page)

    await page.goto('https://www.saucedemo.com/')
    await loginPage.login("standard_user", "secret_sauce")
    await filterButton.filterButtonClick()
})