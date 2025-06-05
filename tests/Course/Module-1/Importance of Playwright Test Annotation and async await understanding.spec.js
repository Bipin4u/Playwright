import {test, expect} from "@playwright/test"

test("first test" , async ()=>{
    // await
})

// browser - fixture - comes default in playwright - globally available
test('second test', async ({browser})=>{
    const context = await browser.newContext()
    const page = await context.newPage()
})

test("open crome", async ({page}) =>{
    await page.goto("https://google.com")
    const title = await page.title()
    await expect(page).toHaveTitle('Google')
})