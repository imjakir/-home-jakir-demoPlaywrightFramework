import { expect, Locator, Page } from '@playwright/test';

export class BuyerGroupPage {
    
    constructor(protected page: Page) {}

    readonly buyerGroupHistoryButton: Locator = this.page.locator("//button[@id='history']");
    readonly buyerGroupHistorySeaechButton :Locator= this.page.locator("//input[@id='TextInput-32']")

    async clickOnBuyerGroupHistoryButton(){
        await this.buyerGroupHistoryButton.click()
        await expect(this.buyerGroupHistorySeaechButton).toBeVisible();
    }


   
}