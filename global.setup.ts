import { Browser, Page, chromium,expect } from "@playwright/test";

async function globalSetup() {

  const browser : Browser = await chromium.launch()
  const context  = await browser.newContext({ ignoreHTTPSErrors: true });
  const page : Page = await context.newPage();
  await page.goto('https://localhost:5001/');
    await page.locator('//input').click();
    await page.press('//input', 'Home');
    await page.locator('//input').fill('arun@source.one');
    await page.locator("//button[text()='Login']").click();
    await expect (page.locator("//span[text()='Local Host']")).toBeVisible({timeout:5000}); 
    await page.context().storageState({path:"./LoginAuth.json"});
    await browser.close();
}

export default globalSetup;
