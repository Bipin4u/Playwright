class CheckOut {
    constructor(page){
        this.page = page
        this.checkoutButton = page.locator('[type="button"]')
    }
    async gotoCheckout(){
        await this.checkoutButton.nth(1).click()
    }
}

export default CheckOut;