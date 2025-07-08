import LoginPage from "./Login"

class POManager{
    constructor(page){
        this.page = page
        this.login = new LoginPage(this.page)
    }
    getLoginPage(){
        return this.login
    }
}
export default POManager