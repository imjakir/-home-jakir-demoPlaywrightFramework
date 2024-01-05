import { Locator, Page } from '@playwright/test';

export class BuyerPage {

    constructor(protected page: Page) {this.page = page;}

    readonly buyerGroupViewButton: Locator = this.page.locator("(//a[@id='BuyerGroupViewLink'])[1]");
    readonly visibleEntityInRow: Locator = this.page.locator("//td/div/div/a/button[text()='GROUP']/parent::a").first();

    async clickOnBuyerGroupView() {
        this.buyerGroupViewButton.click();
    }

    async goToBuyerPage() {
        await this.page.goto('https://localhost:5001/buyers');
        await this.visibleEntityInRow.waitFor({ state: 'visible' });
    }

}
