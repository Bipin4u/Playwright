
class Utils{
    constructor(context,page){
        this.context = context
        this.page = page
    }
    async sessionState(){
        await this.page.goto("https://rahulshettyacademy.com/client/")
        await this.page.locator("#userEmail").fill("bipin.kumar.pros@gmail.com")
        await this.page.locator("#userPassword").fill("Bipin@1234")
        await this.page.locator("#login").click()
        await this.page.waitForLoadState('networkidle')
        await this.context.storageState({path : "./tests/Course/Module-7/state.json"})
    }

}
export default Utils