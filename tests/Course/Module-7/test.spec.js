import {test, expect} from "@playwright/test"
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

// Inject script to set token in localStorage
//   await page.addInitScript((token) => {
//     window.localStorage.setItem('token', token);
//   }, token);

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


test("request interseption", async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/client');
  await page.getByRole('textbox', { name: 'email@example.com' }).click();
  await page.getByRole('textbox', { name: 'email@example.com' }).fill('bipin.kumar.pros@gmail.com');
  await page.getByRole('textbox', { name: 'enter your passsword' }).click();
  await page.getByRole('textbox', { name: 'enter your passsword' }).fill('Bipin@1234');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.locator("//button[@routerlink='/dashboard/myorders']").click()
//   request interseption
  await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=*",
    async route =>{
        route.continue({url:"https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=684173c981a20695306503"})
  })
  await page.locator("//tbody/tr[1]/td[5]/button[1]").click()
  await expect(page.locator("p.blink_me")).toHaveText("You are not authorize to view this order")

});


test("abort response files", async () =>{
    const page = await newContext.newPage()
    // Abort css files
    await page.route("**/*.css", route => route.abort())
    // Abort image files
    await page.route("**/*.{jpg,png,jpeg}", route => route.abort())
    await page.goto("https://rahulshettyacademy.com/client/")
    await page.pause()
})

// Print request and response urls and status codes
// page.on("request", request => console.log(request.url()))
// page.on("response", response => console.log(response.url(),response.status()))