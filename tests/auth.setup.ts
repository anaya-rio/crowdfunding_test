import { test as setup, expect } from '@playwright/test';

setup ("Create GuestUser auth", async ({ page, context }) => {
    const username = "guestuser";
    const password = "password";
    const guestUser = ".auth/guestuser.json";

    await page.goto('https://harveztcirkle.netlify.app/login');

    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.fill('input[name="username"]', username);
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.fill('input[name="password"]', password);
    await page.getByRole('button', { name: 'Login' }).click();
    await page.waitForTimeout(2000);

    await expect(page.getByRole('navigation')).toContainText('Log Out');
    await context.storageState({ path: guestUser });
});