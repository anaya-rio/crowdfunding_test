import { test, expect } from '@playwright/test';

test('Create new project AC1', async ({ page }) => {
  await page.goto('https://harveztcirkle.netlify.app/');

  await expect(page.getByRole('navigation')).toContainText('Home');
  await expect(page.getByRole('navigation')).toContainText('Login');
  await expect(page.getByRole('navigation')).toContainText('Sign Up');
  await expect(page.getByRole('button')).toContainText('Sign Up');
});