import { Page, Locator } from "@playwright/test";

export class LandingPage {

    private readonly page: Page;
    private readonly contactButton: Locator;
    private readonly contactSectionTitle: Locator;
    private readonly contactSectionEmail: Locator;
    private readonly contactSectionPhone: Locator;
    private readonly contactSectionSendButton: Locator;

    constructor(page: Page){
        this.page = page;
        this.contactButton = page.getByRole('link', { name: '¡Contáctanos!' });
        this.contactSectionTitle = page.getByRole('heading', { name: '¡Contáctanos!' });
        this.contactSectionEmail = page.getByRole('heading', { name: 'info@kimatesting.com' });
        this.contactSectionPhone = page.getByRole('heading', { name: '  +34614141593' });
        this.contactSectionSendButton = page.getByRole('button', { name: 'Enviar mensaje' });
    }

    public getContactSectionTitle(){
        return this.contactSectionTitle;
    };
    public getContactSectionEmail(){
        return this.contactSectionEmail;
    };
    public getContactSectionPhone(){
        return this.contactSectionPhone;
    };
    public getContactSectionSendButton(){
        return this.contactSectionSendButton;
    };

    async clickOnContactButton(){
        await this.contactButton.click();
    }
}