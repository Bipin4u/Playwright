expect(title).toContain('Google')
await expect(page).toHaveTitle('Google')
await expect(page.locator()).toContainText('')
expect(1).toEqual(1) // true


page.waitForLoadState('networkidle')

page.locator("text= Add to cart")
page.locator("h3:has-text('zara')")
page.getByLabel("gender")
page.getByPlaceHolder("username")
page.getByRole("button",{name : "submit"})
page.getByText("Submit")
page.locator("").filter({hasText:""}).getByRole("button")
page.locator().getAttribute("value")
page.goBack()
page.goForward()
locator("a.new-navbar-highlighter:visible").click()

// Zoom in crome
await page.evaluate(() => {
    document.body.style.zoom = "50%";
});