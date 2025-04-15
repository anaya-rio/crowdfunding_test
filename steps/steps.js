import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';


const { Given, When, Then } = createBdd();

Given('I am logged in', async ({ page }) => {
  pending;
});

When('I select "Create a new project"', async ({ page }, name) => {
  pending;
});

Then('the project is created', async ({ page }, keyword) => {
  pending;
});

Then('I see an option to Edit and Delete the project', () => {
  pending;
})
