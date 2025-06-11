import { Locator, Page } from "@playwright/test"

class Dashboard{
    page:Page
    card:Locator
    menuBar:Locator
    constructor(page:Page){
        this.page = page
        this.card = page.locator(".card-body")
        this.menuBar = page.locator(".btn-custom")

    }
    async selectNthItem(n:number){
        await this.card.nth(n).locator(".btn").nth(1).click()
    }
    async gotoCart(){
        await this.menuBar.nth(2).click()
    }
}
export default Dashboard