import {test} from '@playwright/test'
import {LoginPage} from '../pages/login-page'

test('User name, password', async ({page}) =>{

let loginPage = new LoginPage(page);

    await page.goto('https://www.saucedemo.com/');
    await loginPage.login("error_user", "secret_sauce");
   
})
