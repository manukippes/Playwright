import { Page, Locator } from "@playwright/test";

export class LandingPage {
    readonly page: Page;
    readonly contactButton: Locator;
    readonly contactSectionTitle: Locator;
    readonly contactSectionEmail: Locator;
    readonly contactSectionPhone: Locator;
    readonly contactSectionSendButton: Locator;

    constructor(page: Page){
        this.page = page;
        this.contactButton = page.getByRole('link', { name: '¡Contáctanos!' });
        this.contactSectionTitle = page.getByRole('heading', { name: '¡Contáctanos!' });
        this.contactSectionEmail = page.getByRole('heading', { name: 'info@kimatesting.com' });
        this.contactSectionPhone = page.getByRole('heading', { name: '  +34614141593' });
        this.contactSectionSendButton = page.getByRole('button', { name: 'Enviar mensaje' });

    }

    async clickOnContactButton(){
        await this.contactButton.click();
    }
}