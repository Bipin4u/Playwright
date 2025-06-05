import {test,request,expect} from "@playwright/test"
import Utils from "./Utils"
const data = {userEmail: "bipin.kumar.pros@gmail.com", userPassword: "Bipin@1234"}

test.beforeAll(async ()=>{
    const apiContext = await request.newContext()
    const obj =  new Utils(apiContext)
    let token = await obj.getToken(data)
    let orderId = await obj.placeOrder(token)
    // console.log(orderId)
    
})

test("tstme", async ()=>{

})