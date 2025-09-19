import {Locator,Page,expect} from"@playwright/test"
import { LoginPage } from "./login-page-tania"

export class MainTitle{

    mainTitle: Locator
    mainTitleString: string

    constructor(page: Page){
        this.mainTitle = page.locator('div[class="header_label"]')
        this.mainTitleString = "Swag Labs"
    }

   async mainTitleVisibility(): Promise<void>{

        expect(this.mainTitle).toHaveText(this.mainTitleString)
    }
}