import { Browser, BrowserContext, Page, chromium, test } from '@playwright/test';
import { BuyerGroupPage } from '../pages/BuyerGroupPage';
import { BuyerPage } from '../pages/BuyerPage';
import { WebchatPage } from '../pages/WebchatPage';

test.describe('WebchatPage', () => {
    let browser: Browser;
    let context: BrowserContext;
    let page: Page;
    let buyerPage: BuyerPage;
    let buyerGroupPage: BuyerGroupPage;
    let webchatPage: WebchatPage;

    test.beforeAll(async () => {
        browser = await chromium.launch();
        context = await browser.newContext();
        page = await context.newPage();
        buyerPage = new BuyerPage(page);
        buyerGroupPage = new BuyerGroupPage(page);
        webchatPage = new WebchatPage(page);
        await page.goto('https://localhost:5001/webchatv2');
    });

    test.afterAll(async () => {
        if (!browser.isConnected()) {
            await browser.close();
        }
    });

    test('drag and drop', async () => {
        const source = page.locator("//div[@data-rbd-droppable-id='droppable']/child::div[4]"); // source element
        const target = page.locator("//div[@data-rbd-droppable-id='droppable']/child::div[1]"); // target element

        await source.dragTo(target, {
            sourcePosition: { x: 34, y: 7 },
            targetPosition: { x: 10, y: 20 },
        });
    });

    test('drag anddfghjk drop', async () => {
        const source = page.locator("//div[@data-rbd-droppable-id='droppable']/child::div[4]"); // source element
        const target = page.locator("//div[@data-rbd-droppable-id='droppable']/child::div[1]"); // target element

        const box = await source.boundingBox();
        if (box) {
            const x = box.x;
            const y = box.y;

            console.log(`Element position: ${x}, ${y}`);
        }
        const box2 = await target.boundingBox();
        if (box2) {
            const x = box2.x;
            const y = box2.y;

            console.log(`Element position: ${x}, ${y}`);
        }
    });
});
