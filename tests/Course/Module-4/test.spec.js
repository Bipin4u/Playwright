import {test , expect} from "@playwright/test"

test("End to End testing",async ({page}) =>{
    let  orderID
    await page.goto("https://rahulshettyacademy.com/client/")
    await page.locator("#userEmail").fill("bipin.kumar.pros@gmail.com")
    await page.locator("#userPassword").fill("Bipin@1234")
    await page.locator("#login").click()
    await page.locator(".card-body").nth(0).locator(".btn").nth(1).click()
    await page.locator(".btn-custom").nth(2).click()
    await page.locator('[type="button"]').nth(1).click()
    await page.getByPlaceholder("Select Country").pressSequentially("ind")
    await page.locator(".fa-search").nth(1).click()
    await page.locator(".action__submit").click()
    await expect( page.locator(".hero-primary")).toHaveText("Thankyou for the order.")
    orderID = await page.locator("label.ng-star-inserted").textContent()
    orderID = orderID.split(" ")[2]
    page.locator(".btn-custom").nth(1).click()
    await page.locator("tr.ng-star-inserted").last().waitFor()
    const row = page.locator("tr.ng-star-inserted")
    let count = await row.count()
    for(let i=0; i<count ; i++){
        const localID = await row.nth(i).locator("th").textContent()
        if(localID === orderID){
            await row.nth(i).locator("button").first().click()
            break
        }
    }
    // console.log(orderID)
    // console.log(await page.locator(".col-text").textContent())
    await expect(page.locator(".col-text")).toHaveText(orderID)
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
        let value = await arr.nth(i).getAttribute("value")
        expect(parseInt(value)).toEqual(a[i])
    }
}) 