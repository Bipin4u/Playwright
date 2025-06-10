class LoginPage {
    constructor(page){
        this.page = page
        this.username = page.locator("#userEmail")
        this.userPassword = page.locator("#userPassword")
        this.SignInButton = page.locator("#login")
    }

    async validLogin(name,pwd){
        await this.username.fill(name)
        await this.userPassword.fill(pwd)
        await this.SignInButton.click()
    }
    async goto(){
        await this.page.goto("https://rahulshettyacademy.com/client/")
    }
}

export default LoginPage;