import { test, expect } from "@playwright/test"
import POManager from "./PageObjectManager"
import userData from './utils/data.json' assert { type: "json" };

test.describe.configure({mode:"parallel"}) //with run this file in parallel
//mode serial - if 1st test fail it will not execute other in same file
test("Valid Login with PageObjectModel", async ({ page }) => {
    let orderID, newID
    const POM = new POManager(page)
    const LoginPageObject = POM.getLoginPage()
    const DashObj = POM.getDashBoardPage()
    const checkOutObj = POM.getCheckoutPage()
    const paymentMethodObj = POM.getPaymentPage()
    const orderPageobj = POM.getOrderPage()
    const historyPageObj = POM.getOrderHistory()

    await LoginPageObject.goto()
    await LoginPageObject.validLogin(userData.userName, userData.password)
    await DashObj.selectProduct()
    await DashObj.gotoCart()
    await checkOutObj.gotoCheckout()
    await paymentMethodObj.paymentDetails()
    
    await paymentMethodObj.placeOrder()
    orderID = await orderPageobj.grabOrderID()
    await expect(page.locator(".hero-primary")).toHaveText("Thankyou for the order.")
    await orderPageobj.gotoOrders()
    newID = await historyPageObj.matchOrder(orderID)
    expect(newID).toBe(orderID)
})

// Skip test for iPhone 12

//   test('should run only on non-iPhone devices', async ({ page, browserName }) => {
//     Get device name from project name (you set this in playwright.config)
//     const deviceName = test.info().project.name;
//     if (deviceName.includes('iPhone 12')) {
//       test.skip(`Skipping test on ${deviceName}`);
//     }
//   });

// You can also use test.skip() at the top level (outside test()):

// const isIPhone = test.info().project.name.includes('iPhone 12');
// test.skip(isIPhone, 'This test is skipped on iPhone 12');
// test('My test', async ({ page }) => {
//   await page.goto('https://example.com');
// });


// Skip Entire Test Block (test.describe)
// test.describe('Feature X', () => {
//   test.beforeAll(() => {
//     test.skip(test.info().project.name === 'Pixel 5', 'Skip all in describe on Pixel 5');
//   });
//   test('should work', async ({ page }) => {
//     // This test will be skipped entirely on Pixel 5
//   });
// });


// Detect Mobile/Desktop via test.info().project.use.isMobile

// test('Run only on desktop', async ({ page }) => {
//   const isMobile = test.info().project.use.isMobile;
//   test.skip(isMobile, 'Skipped on mobile devices');
// });