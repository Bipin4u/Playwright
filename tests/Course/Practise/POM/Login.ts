import {Page,Locator} from "@playwright/test"
import { deflate } from "zlib"
class Login{
    page : Page
    username : Locator
    password : Locator
    signIn : Locator
    constructor(page:Page){
        this.page = page
        this.username = page.locator("#userEmail")
        this.password = page.locator("#userPassword")
        this.signIn = page.locator("#login")
    }
    async gotoLogin(){
        await this.page.goto("https://rahulshettyacademy.com/client")
    }
    async validLogin(username:string,password:string){
        await this.username.fill(username)
        await this.password.fill(password)
        await this.signIn.click()
    }
}
export default Login;