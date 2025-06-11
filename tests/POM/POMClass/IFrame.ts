import { Page,expect } from "@playwright/test";

class IFrame{
    page:Page
    constructor(page:Page){
        this.page = page
        
    }
    async NoOfSubs(iFrame:any){
            const val = await iFrame.locator("div[class='text'] h2 span").textContent()
            expect(val).toEqual("13,522")

    }
}
export default IFrame