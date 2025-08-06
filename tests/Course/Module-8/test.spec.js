import {test,expect} from "@playwright/test"

test("screenShots", async ({ page }) => {
  await page.goto("https://www.google.com");
  const img = await page.locator(".LS8OJ").screenshot();
  expect(img).toMatchSnapshot('google-logo-win32.png'); 
});


// test('should download a file and save it', async ({ browser }) => {
//   // Create a new context with download support
//   const context = await browser.newContext({
//     acceptDownloads: true
//   });

//   const page = await context.newPage();

//   // Go to a page with a downloadable file
//   await page.goto('https://www.learningcontainer.com/sample-pdf-files-for-testing/');

//   // Wait for the download to start after clicking the link
//   const [download] = await Promise.all([
//     page.waitForEvent('download'),
//     page.click('a[href*="sample-pdf-file.pdf"]')
//   ]);

//   // Define the target path
//   const filePath = path.join(__dirname, '../downloads/sample.pdf');

//   // Save the downloaded file
//   await download.saveAs(filePath);

//   // Check if the file exists
//   const fileExists = fs.existsSync(filePath);
//   expect(fileExists).toBe(true);

//   // Optional: Check file size > 0
//   const stats = fs.statSync(filePath);
//   expect(stats.size).toBeGreaterThan(0);
//   await context.close();
// });

