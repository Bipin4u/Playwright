import { Locator,Page } from "@playwright/test"

class Checkout{
    page:Page 
    checkout:Locator
    constructor(page:Page){
        this.page = page 
        this.checkout = page.locator('li [type="button"]')
    }
    async gotoCheckout(){
        await this.checkout.click()
    }
}
export default Checkout;