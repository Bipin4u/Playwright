import { Locator, Page } from "@playwright/test";

class Payment{
    page:Page
    countrySelect:Locator
    countryOption:Locator
    placeOrder:Locator
    constructor(page:Page){
        this.countrySelect = page.getByPlaceholder("Select Country")
        this.countryOption = page.locator(".fa-search")
        this.placeOrder = page.locator(".action__submit")
    }
    async paymentDetails(){
        await this.countrySelect.pressSequentially("ind")
        await this.countryOption.nth(1).click()
    }
    async gotoOrder(){
        await this.placeOrder.click()
    }
}
export default Payment