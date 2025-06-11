import {test , expect} from "@playwright/test"
import POManager from "../../POM/POManager"

let automation
let pmo

test.beforeEach(async({page})=>{
    pmo = new POManager(page)
    automation = pmo.getAutomation()
    await automation.gotoAutomation()
})

test("test element is hiddon or visible", async ({page})=>{
    await  expect(page.locator("#displayed-text")).toBeVisible()
    await automation.hide()
    await  expect(page.locator("#displayed-text")).toBeHidden()
})

test("test js alert box", async ({page})=>{
    await automation.alert()
})

test("hover", async ({page}) =>{
    const scrollPosition = await automation.hover()
    expect(scrollPosition).toBe(0);
})

test("test Frames", async ()=>{
    const frame = pmo.getIframe()
    await automation.gotoAllAccessPlan()
})