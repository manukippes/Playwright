import { expect, test } from '@playwright/test';
import { LandingPage } from '../../pages/kimatesting/LandingPage';

test.afterAll(async ({ page }) => {
  page.close();
})


test.describe('Check available KIMA Testing page', () => {
  
  test('KIMA Testing available page', async ({ page }) => {
    await test.step('Given KIMA Testing page', async () => {
      await page.goto('')
    })

    await test.step(`Then KIMA Testing title is displayed`, async () => {
      await expect(page).toHaveTitle('KIMA Testing');
    })
  });
});

test.describe('Check available Sections', () => {

  const sections = [
    {name: 'Blog', url: '/blog'},
    {name: 'Cursos', url: '/training'},
    {name: 'Descargas', url: '/downloads'},
    {name: 'Contacto', url: '/contact'},
    {name: 'Inicio', url: '/'}
  ]

  for (const section of sections) {
    test(`Check available Menu Options ${section.name}`, async ({ page }) => {
      await test.step('Given KIMA Testing page', async () => {
        if(section.name != 'Inicio') {
          await page.goto('')
        } else {
          await page.goto('blog')
        }
      })

      await test.step(`When go to section ${section.name}`, async () => {
        await page.getByRole('link', { name: section.name }).click();
      })

      await test.step(`Then section ${section.name} is available`, async () => {
        await expect(page).toHaveURL(new RegExp(`.*${section.url}.*`));
        await expect(page).toHaveTitle('KIMA Testing');
      })
    });
  }

  test('Check available Contact button', async ({ page }) => {
    const landingPage = new LandingPage(page);

    await test.step('Given KIMA Testing page', async () => {
      await page.goto('')
    })
    await test.step('When the user clicks on the Contact button', async () => {
      await landingPage.clickOnContactButton();
    })
    await test.step('Then The contact page is showed', async () => {
      await expect(landingPage.contactSectionTitle).toBeVisible();
      await expect(landingPage.contactSectionEmail).toBeVisible();
      await expect(landingPage.contactSectionPhone).toBeVisible();
      await expect(landingPage.contactSectionSendButton).toBeVisible();
    })
    
  })
  
});
