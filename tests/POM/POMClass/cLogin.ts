import { Locator, Page } from "@playwright/test";

class cLogin{
    page:Page
    username:Locator
    password:Locator
    signIn:Locator

    constructor(page:Page){
        this.page = page
        this.username = page.locator("#userEmail")
        this.password = page.locator("#userPassword")
        this.signIn = page.locator("#login")
    }
    async validLogin(username:string,password:string){
        await this.username.fill(username)
        await this.password.fill(password)
        await this.signIn.click()
    }
    async gotoLogin(){
        await this.page.goto("https://rahulshettyacademy.com/client/")
    }
}
export default cLogin;