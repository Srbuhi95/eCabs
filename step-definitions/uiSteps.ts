import { Given, When, Then } from '@cucumber/cucumber';
import { LoginPage } from '../src/pages/LoginPage';
import { config } from '../src/config/config';
import { expect } from '@playwright/test';

let loginPage: LoginPage;

Given('I open the OrangeHRM login page', async function () {
  loginPage = new LoginPage(this.page);
  await loginPage.navigate(config.uiUrl);
});

When('I enter username {string} and password {string}', async function (username, password) {
  await loginPage.enterUsername(username);
  await loginPage.enterPassword(password);
});

When('I leave username and password empty', async function () {
  // nothing to do
});

When('I click login', async function () {
  await loginPage.clickLogin();
});

Then('I should see the dashboard page', async function () {
  await loginPage.verifyDashboardVisible();
});

Then('I should see an error message', async function () {
  await loginPage.verifyErrorMessageVisible();
});


Then('I should see required field validation messages', async function () {
  const page = this.page;
  await expect(page.locator('span:has-text("Required")').first()).toBeVisible();
});