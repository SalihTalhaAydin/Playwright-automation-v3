import { expect, Locator, Page } from '@playwright/test'

export class HomePage {
    
    cart: Locator;
    
    constructor(page: Page) {
        
        this.cart = page.locator('div[id="shopping_cart_container"]')
       
   
}
}

