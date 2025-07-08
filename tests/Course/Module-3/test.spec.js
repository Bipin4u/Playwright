import {test , expect} from "@playwright/test"

test("Login with checkbox", async ({page}) =>{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    await page.locator("#username").fill("rahulshettyacademy")
    await page.locator("#password").fill("learning")
    await page.locator("select.form-control").selectOption("teach")
    await expect(page.locator("select.form-control")).toHaveValue("teach")
    await page.locator(".customradio").last().click()
    await page.locator("#okayBtn").click()
    await expect(page.locator(".customradio").last()).toBeChecked()
    await page.waitForTimeout(1000)
    await page.getByRole('checkbox', { name: 'I Agree to the terms and' }).check()
    await page.waitForTimeout(1000)
    await expect(page.getByRole('checkbox', { name: 'I Agree to the terms and' })).toBeChecked()
    // await page.pause()
    await page.locator("[type = 'submit']").click()
})

test('To check blinking', async ({page}) =>{
        await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
        await expect( page.locator(".blinkingText").first()).toHaveAttribute("class",'blinkingText')
})

test('New Tab', async ({page,context})=>{
        await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
        const [newPage] = await Promise.all([
            context.waitForEvent('page'),
            page.locator(".blinkingText").first().click()
        ])
        const mail = await newPage.locator("strong a").textContent()
        expect(mail).toContain("mentor@rahulshettyacademy.com")
})