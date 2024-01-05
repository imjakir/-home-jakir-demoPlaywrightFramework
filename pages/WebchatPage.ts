import { Locator, Page } from "@playwright/test";

export class WebchatPage {
    constructor(protected page: Page) {}

    
    readonly regionOptions:Locator = this.page.locator("(//div[@class='relative'])[2]");
    readonly unselectButton:Locator = this.page.locator("//button[text()='unselect']")
    readonly bfoAllRegion:Locator = this.page.locator("//label[text()='BFO_ALL']")
    readonly closeButton:Locator = this.page.locator("//button[text()='X']")
    readonly firstConversessionList:Locator = this.page.locator("(//span[text()='BFO'])[1]")
    readonly editOption:Locator = this.page.locator("//button[@id='editOptions']")
    readonly firstElementForDrag:Locator = this.page.locator("(//div[@data-rbd-droppable-context-id='1']/child::div)[5]")
    readonly toSecondElementForDrag:Locator = this.page.locator("(//div[@data-rbd-droppable-context-id='1']/child::div)[1]")
    //readonly saveButton:Locator = this.page.locator("//button[@id='SAVE']")

    async dragElement(){
        await this.regionOptions.click()
        await this.unselectButton.click()
        await this.bfoAllRegion.click()
        await this.closeButton.click()
        await this.firstConversessionList.click()
        await this.editOption.click()
        await this.firstElementForDrag.dragTo(this.toSecondElementForDrag)
        await this.page.waitForTimeout(5000)
    }
   
}