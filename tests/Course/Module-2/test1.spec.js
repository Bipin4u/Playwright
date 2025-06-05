import {test , expect} from "@playwright/test"

test("test login falure", async ({page}) =>{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    await page.locator("#username").fill("rahulshettyacademy")
    await page.locator("#password").fill("Learnin")
    await page.locator("[type = 'submit']").click()
    await expect(page.locator("[style*=  block]")).toContainText('Incorrect username/password.')
})

test("test login pass", async ({page}) =>{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    await page.locator("#username").fill("rahulshettyacademy")
    await page.locator("#password").fill("learning")
    await page.locator("[type = 'submit']").click()
    const cardtitle = await  page.locator(".card-body a").nth(1).textContent()
    // allTextContents does not have auto wait capability. The above line does for now
    const AllCardTitle = await  page.locator(".card-body a").allTextContents()
    // console.log(cardtitle)    
    // console.log(AllCardTitle)    
})

test('Login and print cart content', async ({page}) =>{
    await page.goto("https://rahulshettyacademy.com/client/")
    await page.locator("#userEmail").fill("bipin.kumar.pros@gmail.com")
    await page.locator("#userPassword").fill("Bipin@1234")
    await page.locator("#login").click()
    await page.waitForLoadState('networkidle')
    // another way of waiting for the element to show up- waitFor() waits for only one element
    // await page.locator(".card-body b").first().waitFor()       
    const names = await page.locator(".card-body b").allTextContents()
    // console.log(names[0])
    

})