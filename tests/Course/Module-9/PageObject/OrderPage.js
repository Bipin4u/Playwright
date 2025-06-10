class OrderPage{
    constructor(page){
        this.page = page
        this.idtag = page.locator("label.ng-star-inserted")
        this.orderID
        this.orderButton = page.locator(".btn-custom")

    }
    async grabOrderID(){
        this.orderID = await this.idtag.textContent()
        this.orderID = await this.orderID.split(" ")[2]
        return this.orderID
    }
    async gotoOrders(){
        await this.orderButton.nth(1).click()
    }
}

export default OrderPage;