import { expect, test } from '@playwright/test';

test.describe('Check available KIMA Testing page', () => {
  test('KIMA Testing available page', async ({ page }) => {
    await test.step('Given KIMA Testing page', async () => {
      await page.goto('')
      await expect(page).toHaveTitle('KIMA Testing');
    })
  });
});
