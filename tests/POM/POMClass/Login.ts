import {Locator, Page, expect} from "@playwright/test"
import { Context } from "vm"

class Login{
    
    page:Page
    username : Locator
    password : Locator
    signIn : Locator
    radioUser : Locator
    dropDown : Locator
    checkbox : Locator
    acceptAlert : Locator
    blinking : Locator

    constructor(page:Page){
        this.page = page
        this.username = page.locator("#username")
        this.password = page.locator("#password")
        this.signIn = page.locator("#signInBtn")
        this.radioUser = page.locator(".checkmark")
        this.dropDown = page.locator("select.form-control")
        this.checkbox = page.locator("#terms")
        this.acceptAlert = page.locator("#okayBtn")
        this.blinking = page.locator(".blinkingText")
    }
    async gotoLogin(){
        await this.page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    }
    async inValidLogin(username:string,password:string){
        await this.username.fill(username)
        await this.password.fill(password)
        await this.signIn.click()
    }
    async validLogin(username:string,password:string){
        await this.username.fill(username)
        await this.password.fill(password)
        await this.signIn.click()
    }
    async register(username:string,password:string,dropdown:string){
        await this.username.fill(username)
        await this.password.fill(password)
        await this.radioUser.last().click()
        await this.acceptAlert.click()
        await expect(this.radioUser.last()).toBeChecked()
        await this.dropDown.selectOption(dropdown)
        await expect(this.dropDown).toHaveValue(dropdown)
        await this.checkbox.click()
        await expect(this.checkbox).toBeChecked()
        await this.signIn.click()
    }
    async gotoBlinking(context:Context) : Promise<Page>  {
        const [newPage]  = await Promise.all([
            context.waitForEvent("page"),
            this.blinking.first().click()
        ])
        return newPage
    }
}
export default Login;