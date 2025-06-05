import {test , expect} from "@playwright/test"

test("test element is hiddon or visible", async ({page})=>{
    await  page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    await  expect(page.locator("#displayed-text")).toBeVisible()
    await  page.locator("//input[@id='hide-textbox']").click()
    await  expect(page.locator("#displayed-text")).toBeHidden()
})

test("test js alert box", async ({page})=>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    await page.locator("//input[@id='name']").fill("Bipin Kumar")
    page.on("dialog", dialog => dialog.accept())
    await page.locator("#alertbtn").click()       
})

test("hover", async ({page}) =>{

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    await page.locator("#mousehover").hover()
    await page.locator(".mouse-hover-content a").nth(0).click() //page scrolls to top
    // window.scrollY gives the number of pixels the page is currently scrolled vertically.
    // 0 means the page is at the very top.
    const scrollPosition = await page.evaluate(() => window.scrollY)
    expect(scrollPosition).toBe(0); // Assertion: page is at top
})

test("test Frames", async ({page})=>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    const iFrame = page.frameLocator("#courses-iframe")
    await iFrame.locator("a[href*='lifetime-access']:visible").click()
    const val = await iFrame.locator("div[class='text'] h2 span").textContent()
    // console.log(val)
    expect(val).toEqual("13,522")
})