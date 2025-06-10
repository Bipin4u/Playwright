import {test,expect} from "@playwright/test"


test("screenShots", async ({ page }) => {
    await page.goto("https://www.google.com");
    const img = await page.locator(".LS8OJ").screenshot()
    expect(img).toMatchSnapshot('google.png');
});
