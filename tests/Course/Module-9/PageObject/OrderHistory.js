class OrderHistory{
    constructor(page){
        this.page = page
        this.id
        this.card = page.locator("tr.ng-star-inserted")
    }

    async matchOrder(orderID){
        await this.card.last().waitFor()
        const row = this.card
        let count = await row.count()
        for(let i=0; i<count ; i++){
            
            const localID = await row.nth(i).locator("th").textContent()
            // console.log(orderID,localID)
            if(localID === orderID){
                this.id = localID
                await row.nth(i).locator("button").first().click()
                break
            }
        }
        return this.id
    }
}

export default OrderHistory;