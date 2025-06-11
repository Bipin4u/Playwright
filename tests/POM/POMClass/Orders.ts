import { Locator, Page } from "@playwright/test";

class Orders{
    page:Page
    heading:Locator
    orderID:Locator
    ordernav:Locator
    constructor(page:Page){
        this.page = page
        this.orderID = page.locator("label.ng-star-inserted")
        this.ordernav = page.locator(".btn-custom")
    }
    async fetchOrderID(){
        let orderid : any = await this.orderID.textContent()
        orderid = orderid.split(" ")[2]
        return orderid
    }
    async gotoOrderHistory(){
        this.ordernav.nth(1).click()
    }

}
export default Orders