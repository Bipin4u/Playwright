import LoginPage from "./PageObject/LoginPage"
import DashBoard from "./PageObject/DashBoard"
import CheckOut from "./PageObject/CheckOut"
import PaymentPage from "./PageObject/PaymentPage"
import OrderPage from "./PageObject/OrderPage"
import OrderHistory from "./PageObject/OrderHistory"

class POManager {
    constructor(page){
        this.page = page
        this.loginpage = new LoginPage(this.page)
        this.dashBoard = new DashBoard(this.page)
        this.checkOut = new CheckOut(this.page)
        this.paymentPage = new PaymentPage(this.page)
        this.orderPage = new OrderPage(this.page)
        this.orderHistory = new OrderHistory(this.page)
    }
    getLoginPage() {
        return this.loginpage
    }
    getDashBoardPage() {
        return this.dashBoard
    }
    getCheckoutPage() {
        return this.checkOut
    }
    getPaymentPage() {
        return this.paymentPage
    }
    getOrderPage(){
        return this.orderPage
    }
    getOrderHistory(){
        return this.orderHistory
    }
}
export default POManager;