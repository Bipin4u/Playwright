import {expect, test} from "@playwright/test"
import POManager from "./POManager"
import data from "./data.json" assert {type:"json"}

test.only("typeScript with POM", async ({page})=>{
    const POM = new POManager(page)
    const login = POM.getLogin()
    await login.gotoLogin()
    await login.validLogin(data.userName,data.password)
    await expect(page.locator("div[class='left mt-1'] h3")).toHaveText("Automation")
})