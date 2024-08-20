import { expect, test } from '@playwright/test';

test.describe('Check available KIMA Testing page', () => {
  test('KIMA Testing available page', async ({ page }) => {
    await test.step('Given KIMA Testing page', async () => {
      await page.goto('https://www.kimatesting.com/')
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
    test(`Check available sections ${section.name}`, async ({ page }) => {
      await test.step('Given KIMA Testing page', async () => {
        if(section.name != 'Inicio') {
          await page.goto('https://www.kimatesting.com/')
        } else {
          await page.goto('https://www.kimatesting.com/blog')
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
});
