import { test, expect } from '@playwright/test';

test('homepage view - login, signup', async ({ page }) => {
  await page.goto('https://harveztcirkle.netlify.app/');

  await expect(page.getByRole('navigation')).toContainText('Home');
  await expect(page.getByRole('navigation')).toContainText('Login');
  await expect(page.getByRole('navigation')).toContainText('Sign Up');
  await expect(page.getByRole('button')).toContainText('Sign Up');
});