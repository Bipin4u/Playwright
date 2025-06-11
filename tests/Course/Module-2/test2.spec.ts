import {test , expect} from "@playwright/test"
import POManager from "../../POM/POManager"

test("test login falure", async ({page}) =>{
    const pom = new POManager(page)
    const login = pom.getLogin()
    await login.gotoLogin()
    await login.inValidLogin("rahulshettyacademy","learning")
    await expect(page.locator("div strong")).toHaveText("Incorrect")
})

test("test login pass", async ({page}) =>{
    const pom = new POManager(page)
    const login = pom.getLogin()
    await login.gotoLogin()
    await login.inValidLogin("rahulshettyacademy","learning")
    await page.locator("a.navbar-brand").first().waitFor()
    await expect(page.locator("a.navbar-brand").first()).toHaveText("ProtoCommerce") 
})
