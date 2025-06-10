class PaymentPage{
    constructor(page){
        this.page = page
        this.countryDropDown = page.getByPlaceholder("Select Country")
        this.india = page.locator(".fa-search")
        this.placeOrderButton = page.locator(".action__submit")
    }
    async paymentDetails(){
        await this.countryDropDown.pressSequentially("ind")
        await this.india.nth(1).click()
    }
    async placeOrder(){
        await  this.placeOrderButton.click()
    }

}

export default PaymentPage;