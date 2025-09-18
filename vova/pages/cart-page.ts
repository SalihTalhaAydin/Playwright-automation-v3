import { expect, Locator, Page } from '@playwright/test'

export class CartPage {
   
   
    ourMessage: Locator;
    constructor(page: Page) {
        
        this.ourMessage=page.locator('span[class="title"]')
    
    }
    expectedMessage(titleMessage: string): void {
      expect(this.ourMessage).toHaveText(titleMessage)
    }
}

