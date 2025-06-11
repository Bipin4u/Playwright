import { Locator, Page } from "@playwright/test";

class Automation{
    page:Page
    showHideComp:Locator
    alertInput:Locator
    hoverElement:Locator
    goTop:Locator
    constructor(page:Page){
        this.page = page
        this.showHideComp = page.locator("#hide-textbox")
        this.alertInput = page.locator("//input[@id='name']")
        this.hoverElement = page.locator("#mousehover")
        this.goTop = page.locator(".mouse-hover-content a")
    }
    async gotoAutomation(){
        await this.page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    }
    async hide(){
        await  this.showHideComp.click()
    }
    async alert(){
            await this.alertInput.fill("Bipin Kumar")
            this.page.on("dialog", dialog => dialog.accept())
            await this.page.locator("#alertbtn").click()  
    }
    async hover(){
        await this.hoverElement.hover()
        await this.goTop.nth(0).click() 
        const scrollPosition : number = await this.page.evaluate(() => window.scrollY)
        return scrollPosition
    }
    async gotoAllAccessPlan(){
        const iFrame = this.page.frameLocator("#courses-iframe")
        await iFrame.locator("a[href*='lifetime-access']:visible").click()
        
    }
}
export default Automation