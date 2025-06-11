import {test, request , expect, Page} from "@playwright/test"
import POMamager from "../../POM/POManager"



const dummyData = {data:[],message:"No Orders"}
const data = {userEmail: "bipin.kumar.pros@gmail.com", userPassword: "Bipin@1234"}
let  newContext : any
let page:Page
let pmo:any
let login:any

test.beforeAll(async ({browser})=>{
    const context = await browser.newContext()
    const page = await context.newPage()
    const pmo = new POMamager(page)
    const login = pmo.getcLogin()
    await login.gotoLogin()
    await login.validLogin("bipin.kumar.pros@gmail.com","Bipin@1234")
    await page.waitForLoadState("networkidle")
    await context.storageState({path:"./tests/Course/Module-7/state.json"})
    newContext = await browser.newContext({storageState: "./tests/Course/Module-7/state.json"})
})
test.beforeEach(async()=>{
    page = await newContext.newPage()
    pmo = new POMamager(page)
    login = pmo.getcLogin()
})

test("set session storage through json file", async ()=>{
    await login.gotoLogin()
    await page.locator("div h3").first().waitFor()
    await page.waitForTimeout(1000)
    await expect(page.locator("div h3")).toHaveText("Automation")
    await page.waitForTimeout(1000)
})

test("response interseption - no orders in", async () =>{
    const dash = pmo.getDashboard()
    await login.gotoLogin()
    await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*",
        async route =>{
            const response = await page.request.fetch(route.request())
            let body = JSON.stringify(dummyData)
            await route.fulfill(
                {
                    response,
                    body
                }
            )
        }
    )
    await dash.gotoOrders()
    await page.waitForResponse("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*")
    await expect(page.locator("div div.ng-star-inserted")).toHaveText(" You have No Orders to show at this time. Please Visit Back Us ")
    await page.waitForTimeout(1000)
})


test("request interseption", async () => {
    const dash = pmo.getDashboard()
    const orderhistory = pmo.getOrderHistory()
    await login.gotoLogin()
    await dash.gotoOrders()
    await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=*",
    async route =>{
        route.continue({url:"https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=684173c981a20695306503"})
    })
    await orderhistory.gotoFirstOrder()
    await expect(page.locator("p.blink_me")).toHaveText("You are not authorize to view this order")
    await page.waitForTimeout(1000)
});


test("abort response files", async () =>{
    // Abort css files
    await page.route("**/*.css", route => route.abort())
    // Abort image files
    await page.route("**/*.{jpg,png,jpeg}", route => route.abort())
    await login.gotoLogin()
    await page.waitForTimeout(1000)
})