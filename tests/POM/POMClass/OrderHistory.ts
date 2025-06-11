import { Locator, Page, expect } from "@playwright/test";


class OrderHistory {
    page: Page
    card: Locator
    firstOrderViewButton: Locator
    constructor(page: Page) {
        this.page = page
        this.card = this.page.locator("tr.ng-star-inserted")
        this.firstOrderViewButton = this.page.locator("//tbody/tr[1]/td[5]/button[1]")
    }
    async matchOrder(orderID:string) {
        await this.card.last().waitFor()
        const row = this.card
        let count:number = await row.count()
        for (let i = 0; i < count; i++) {
            const localID = await row.nth(i).locator("th").textContent()
            if (localID === orderID) {
                await row.nth(i).locator("button").first().click()
                break
            }
        }
        await expect(this.page.locator(".col-text")).toHaveText(orderID)
    }
    async gotoFirstOrder(){
        await this.firstOrderViewButton.click()
    }
}
export default OrderHistory;