import { test } from '@playwright/test';
import { LoginPage } from '../homePageElements/login-page-tania'
import { ProductsTitle } from '../homePageElements/productsTitle'

test('Product Title Visibility', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productTitle = new ProductsTitle(page);

    await page.goto('https://www.saucedemo.com/');
    await loginPage.login('standard_user', 'secret_sauce');
    await productTitle.productTitleVisibility();
});