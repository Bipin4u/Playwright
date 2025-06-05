import {test, request , expect, browser} from "@playwright/test"
import Utils from "./Utils"

const dummyData = {data:[],message:"No Orders"}
const data = {userEmail: "bipin.kumar.pros@gmail.com", userPassword: "Bipin@1234"}
let  newContext

test.beforeAll(async ({browser})=>{
    const context = await browser.newContext()
    const page = await context.newPage()
    const obj = new Utils(context,page)
    await obj.sessionState()
    newContext = await browser.newContext({storageState: "./tests/Course/Module-7/state.json"})
})
    // Set StorageSession through json file  
    // await this.context.storageState({path : "state.json"})
    // newContext = await browser.newContext({storageState: "state.json"})


test("set session storage through json file", async ()=>{
    const page = await newContext.newPage()
    await page.goto("https://rahulshettyacademy.com/client/")
    await page.locator("div h3").first()
    await page.waitForTimeout(1000)
    await expect(page.locator("div h3")).toHaveText("Automation")
})

test("response interseption", async () =>{
    const page = await newContext.newPage()
    await page.goto("https://rahulshettyacademy.com/client/")
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
    await page.locator("button:has-text('ORDERS')").click()
    await page.waitForResponse("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*")
    await expect(page.locator("div div.ng-star-inserted")).toHaveText(" You have No Orders to show at this time. Please Visit Back Us ")
})

