import {test,request} from "@playwright/test"
import Utils from "./Utils"
const data = {userEmail: "bipin.kumar.pros@gmail.com", userPassword: "Bipin@1234"}

test.beforeAll(async ()=>{
    const apiContext = await request.newContext()
    const obj =  new Utils(apiContext)
    let token = await obj.getToken(data)
    await obj.placeOrder(token)    
})

test("tstme", async ()=>{
})