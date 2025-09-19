import{Locator, Page, expect} from "@playwright/test"
import { LoginPage } from "./login-page-tania"

export class FilterButton{

    filterButton: Locator


    constructor(page: Page){
        this.filterButton = page.locator('select[class="product_sort_container"]')
    }

   async filterButtonClick(): Promise<void>{
      await  this.filterButton.click()
    }
}