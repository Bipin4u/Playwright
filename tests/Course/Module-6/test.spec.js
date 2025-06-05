import {test,request,expect} from "@playwright/test"
let token
test.beforeAll(async ()=>{
    const apiContext = await request.newContext()
    let res = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
        {
            data: {userEmail: "bipin.kumar.pros@gmail.com", userPassword: "Bipin@1234"}
        }
    )
    expect(res.ok()).toBeTruthy()
    let response = await res.json()
    token = response.token

    const res2 = await apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
        {
            data : {orders: [{country: "India", productOrderedId: "67a8df56c0d3e6622a297ccd"}]},
            headers : {
                authorization : token
            }
        }
    )
    let resp = await res2.json()
    // console.log(resp.orders[0])
})

test("test", async ()=>{
    
})