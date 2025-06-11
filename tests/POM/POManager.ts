import { Page } from "@playwright/test";
import Login from "./POMClass/Login";
import cLogin from "./POMClass/cLogin";
import Checkout from "./POMClass/Checkout";
import Dashboard from "./POMClass/Dashboard";
import Payment from "./POMClass/Payment";
import Orders from "./POMClass/Orders";
import OrderHistory from "./POMClass/OrderHistory";
import Automation from "./POMClass/Automation";
import IFrame from "./POMClass/IFrame";


class POManager{
    page:Page
    login:Login
    cLogin:cLogin
    checkout:Checkout
    dashboard:Dashboard
    payment:Payment
    order:Orders
    orderHistory:OrderHistory
    automation:Automation
    frame:IFrame
    constructor(page:Page){
        this.page=page
        this.login=new Login(page)
        this.cLogin = new cLogin(page)
        this.checkout = new Checkout(page)
        this.dashboard = new Dashboard(page)
        this.payment = new Payment(page)
        this.order = new Orders(page)
        this.orderHistory = new OrderHistory(page)
        this.automation = new Automation(page)
        this.frame = new IFrame(page)
    }
    getLogin(){
        return this.login
    }
    getcLogin(){
        return this.cLogin
    }
    getCheckout(){
        return this.checkout
    }
    getDashboard(){
        return this.dashboard
    }
    getPayment(){
        return this.payment
    }
    getOrder(){
        return this.order
    }
    getOrderHistory(){
        return this.orderHistory
    }
    getAutomation(){
        return this.automation
    }
    getIframe(){
        return this.frame
    }

}

export default POManager;