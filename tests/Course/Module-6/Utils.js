class Utils{
    constructor(apiContext){
        this.apiContext = apiContext
    }

    async getToken(data){
        const response = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
            {
                data : data
            }
        )
        const responseJson = await response.json()
        const responseToken = await responseJson.token
        return responseToken
    }
    async placeOrder(token){
        const response = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
            {
                data : {orders: [{country: "India", productOrderedId: "67a8df56c0d3e6622a297ccd"}]},
                headers : {
                    Authorization : token,
                    "Content-Type" : "application/json"
                }
            }
        )
        const responseJson = await response.json()
        return responseJson.productOrderId[0]
    }
}

export default Utils;