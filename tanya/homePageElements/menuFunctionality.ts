import{Locator, Page, Expect} from "@playwright/test"
import { LoginPage } from "./login-page-tania"


export class MenuButton{
    menuButton: Locator

    constructor(page:Page){
        this.menuButton = page.locator('button[id="react-burger-menu-btn"]')
    }
   async clickingMenuButton():Promise<void>{
      await  this.menuButton.click()
    }
}