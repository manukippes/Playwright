import { expect, test } from '@playwright/test';

test.afterEach(async ({ page }) => {
  await page.close();
})

test.describe('Mocking Strategy Test', () => {
  test('Replace all the endpoint results', async ({ page }) => {
    await page.route('*/**/api/v1/fruits', async route => {
      const json = [{ name: 'Avocado', id: 100 }];
      await route.fulfill({ json });
    });

    await page.goto(`${process.env.MOCK_BASE_URL}`);

    await expect(page.getByText('Avocado'), 'Avocado item is not present.').toBeVisible();
    
  });

    test('Add an item to the endpoint results', async ({ page }) => {
      await page.route('*/**/api/v1/fruits', async route => {
        const response = await route.fetch();
        const json = await response.json();
        json.push({ name: 'Avocado', id: 100 });
        await route.fulfill({ json });
      });
  
      await page.goto(`${process.env.MOCK_BASE_URL}`);
  
      await expect(page.getByText('Avocado'), 'Avocado item is not present.').toBeVisible();
      
    });
});