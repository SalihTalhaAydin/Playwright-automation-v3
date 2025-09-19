import{expect, Locator, Page} from "@playwright/test"
import { LoginPage } from "./login-page-tania"

export class ProductsTitle{
    productsTitle: Locator

    constructor(page: Page){
        this.productsTitle = page.locator('span[class="title"]')
    }
     async productTitleVisibility(): Promise<void> {
        await expect(this.productsTitle).toHaveText("Products")
 }
}