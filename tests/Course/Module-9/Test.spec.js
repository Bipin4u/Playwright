import { test, expect } from "@playwright/test"
import POManager from "./PageObjectManager"
import userData from './utils/data.json' assert { type: "json" };

test.describe.configure({mode:"parallel"}) //with run this file in parallel
//mode serial - if 1st test fail it will not execute other in same file
test("Valid Login with PageObjectModel", async ({ page }) => {
    let orderID, newID

    const POM = new POManager(page)
    const LoginPageObject = POM.getLoginPage()
    const DashObj = POM.getDashBoardPage()
    const checkOutObj = POM.getCheckoutPage()
    const paymentMethodObj = POM.getPaymentPage()
    const orderPageobj = POM.getOrderPage()
    const historyPageObj = POM.getOrderHistory()

    await LoginPageObject.goto()
    await LoginPageObject.validLogin(userData.userName, userData.password)
    await DashObj.selectProduct()
    await DashObj.gotoCart()
    await checkOutObj.gotoCheckout()
    await paymentMethodObj.paymentDetails()
    await paymentMethodObj.placeOrder()
    orderID = await orderPageobj.grabOrderID()
    await expect(page.locator(".hero-primary")).toHaveText("Thankyou for the order.")
    await orderPageobj.gotoOrders()
    newID = await historyPageObj.matchOrder(orderID)
    expect(newID).toBe(orderID)
})