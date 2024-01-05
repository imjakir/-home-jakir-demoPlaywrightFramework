import { Browser, BrowserContext, Page, chromium, expect, test } from '@playwright/test';
import { BuyerPage } from '../pages/BuyerPage';
import { BuyerGroupPage } from '../pages/BuyerGroupPage';

test.describe('test scenario for buyer page', () => {
    let browser: Browser;
    let context: BrowserContext;
    let page: Page;
    let buyerPage: BuyerPage;
    let buyerGroupPage: BuyerGroupPage;

    test.beforeAll(async () => {
        browser = await chromium.launch();
        context = await browser.newContext();
        page = await context.newPage();
        buyerPage = new BuyerPage(page);
        buyerGroupPage = new BuyerGroupPage(page);
        await page.goto('https://localhost:5001/buyers');
        
    });

    test.afterAll(async () => {
        if (!browser.isConnected()) {
            await browser.close();
        }
    });

    

    //const newTab = 
     test('click on buyer group view', async () => {
        //const tab = 
        await buyerPage.clickOnBuyerGroupView();
        //buyerGroupPage = new BuyerGroupPage(tab);
    });

    test('click on history button and verify search button', async () => {
        //buyerGroupPage = new BuyerGroupPage(newTab);
        await buyerGroupPage.clickOnBuyerGroupHistoryButton();
    });
});
