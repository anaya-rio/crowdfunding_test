import { test, expect } from '@playwright/test';

test.use({ storageState: '.auth/guestuser.json' });

test.beforeEach(async ({ page }) => {
        await page.goto('https://harveztcirkle.netlify.app/');
});

test('Create a new project AC1', async ({ page }) => {
    pending;
});