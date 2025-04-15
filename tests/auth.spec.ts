import { test as setup, expect } from '@playwright/test';
import path from 'path';


setup ("Create GuestUser auth", async ({ page, context }) => {
    const username = "guestuser";
    const password = "password";
    
    const guestUser = path.join(__dirname, '../auth/guestuser.json');

    await page.goto('https://harveztcirkle.netlify.app/login');

    const usernameInput = page.getByRole('textbox', { name: 'Username' });
    const passwordInput = page.getByRole('textbox', { name: 'Password' });
    await usernameInput.click();
    await usernameInput.fill(username);
    await passwordInput.click();
    await passwordInput.fill(password);
    await page.getByRole('button', { name: 'Login' }).click();
    await page.waitForURL('https://harveztcirkle.netlify.app/');

    await expect(page.getByRole('link', { name: 'Log'})).toContainText('Logout');
    await context.storageState({ path: guestUser });
});