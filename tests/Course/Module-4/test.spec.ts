import {test , expect} from "@playwright/test"
import POManager from "../../POM/POManager"

test("End to End testing",async ({page}) =>{
    const pom = new POManager(page)
    const login = pom.getcLogin()
    const dash = pom.getDashboard()
    const checkout = pom.getCheckout()
    const payment = pom.getPayment()
    const order = pom.getOrder()
    const orderHistory = pom.getOrderHistory()
    
    let  orderID:string

    await login.gotoLogin()
    await login.validLogin("bipin.kumar.pros@gmail.com","Bipin@1234")
    await dash.selectNthItem(2)
    await dash.gotoCart()
    await checkout.gotoCheckout()
    await payment.paymentDetails()
    await payment.gotoOrder()
    await expect( page.locator(".hero-primary")).toHaveText("Thankyou for the order.")
    orderID = await order.fetchOrderID()
    await order.gotoOrderHistory()
    await orderHistory.matchOrder(orderID)
})

test("date entry", async ({page,context})=>{
    const m = 6
    const d = 15
    const y = 2027
    let a = [m,d,y]     

    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/")
    const [newPage] = await Promise.all([
        context.waitForEvent("page"),
        page.locator(".cart-header-navlink").nth(1).click()
    ])
    await newPage.locator(".react-date-picker__calendar-button__icon").click()
    await newPage.locator(".react-calendar__navigation__label__labelText").click()
    await newPage.locator(".react-calendar__navigation__label__labelText").click()
    await newPage.getByRole("button", {name : "2027"}).click(),
    await newPage.locator(".react-calendar__tile").nth(m-1).click()
    await newPage.getByRole("button", {name:"15"}).click()
    await newPage.locator(".react-date-picker__inputGroup").textContent()
    const arr = newPage.locator(".react-date-picker__inputGroup__input")
    for(let i = 0 ; i<await arr.count() ; i++){
        let value:any = await arr.nth(i).getAttribute("value")
        expect(parseInt(value)).toEqual(a[i])
    }
}) 