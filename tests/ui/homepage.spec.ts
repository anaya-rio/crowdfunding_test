import { test, expect } from '@playwright/test';

test('homepage view - login, signup', async ({ page }) => {
  await page.goto('https://harveztcirkle.netlify.app/');

  await expect(page.getByRole('navigation')).toContainText('Home');
  await expect(page.getByRole('navigation')).toContainText('Login');
  await expect(page.getByRole('navigation')).toContainText('Sign Up');
  await expect(page.getByRole('button')).toContainText('Sign Up');
});

// test('signup and conditional view state', async ({ page }) => {
//   await page.goto('https://harveztcirkle.netlify.app/');

//   await page.getByRole('navigation').getByRole('link', { name: 'Sign Up' }).click();
//   await page.getByRole('textbox', { name: 'First Name:' }).fill('Guest');
//   await page.getByRole('textbox', { name: 'Last Name:' }).fill('User');
//   await page.getByRole('textbox', { name: 'Username:' }).fill('guestuser');
//   await page.getByRole('textbox', { name: 'Email:' }).fill('guest@gmail.com');
//   await page.getByRole('textbox', { name: 'Password:' }).fill('password');
  
//   await expect(page.getByRole('navigation')).toContainText('Logout');
//   await expect(page.getByRole('navigation')).toContainText('Create Project');
// });
