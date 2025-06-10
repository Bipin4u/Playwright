import { Page } from "@playwright/test";
import Login from "./POM/Login";

class POManager{
    login : Login
    page : Page
    constructor(page:Page){
        this.page = page
        this.login = new Login(page)
    }
    getLogin(){
        return this.login
    }
}
export default POManager;