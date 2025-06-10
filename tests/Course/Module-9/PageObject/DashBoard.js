class DashBoard{
    constructor(page){
        this.page = page
        this.card = page.locator(".card-body")
        this.buttons = page.locator(".btn-custom")
    }
    async selectProduct(){
        await this.card.nth(0).locator(".btn").nth(1).click()
    }
    async gotoCart(){
        await this.buttons.nth(2).click()
    }
}

export default DashBoard;