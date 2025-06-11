import {test , expect} from "@playwright/test"
import POManager from "../../POM/POManager"

let pom : any
let login : any

test.beforeEach(async ({ page }) => {
    pom = new POManager(page);
    login = pom.getLogin();
    await login.gotoLogin();
});

test("Login: Login with checkbox", async ({page}) =>{
    await login.register("rahulshettyacademy","learning","teach")
    await page.locator("a.navbar-brand").first().waitFor()
    await expect(page.locator("a.navbar-brand").first()).toHaveText("ProtoCommerce") 
})

test('Login: To check blinking', async ({page}) =>{
        await expect( page.locator(".blinkingText").first()).toHaveAttribute("class",'blinkingText')
})

test('Login: New Tab', async ({context})=>{
        const newPage = await login.gotoBlinking(context)
        const mail = await newPage.locator("strong a").textContent()
        expect(mail).toContain("mentor@rahulshettyacademy.com")
})