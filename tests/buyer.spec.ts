import { Browser, BrowserContext, Page, chromium, expect, test } from '@playwright/test';


test.describe('test scenario for buyer page', () =>{

    let browser: Browser;
    let context: BrowserContext;
    let page: Page;

    test.beforeAll(async () =>{
        
        browser = await chromium.launch()
        context = await browser.newContext()
        page = await context.newPage()
        await page.goto('https://localhost:5001/');

    })

    test.afterAll(async () => {
        if (!browser.isConnected()) {
            await browser.close();
        }
    });

    test('basic test3 to login', async () => {
        await expect (page.locator("//span[text()='Local Host']")).toBeVisible();
    });
    
    test('basic test4 to login', async () => {
        await expect (page.locator("//span[text()='Local Host']")).toBeVisible();
    });
    
});

