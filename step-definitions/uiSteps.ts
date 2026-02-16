import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ContactPage } from '../src/pages/ContactPage';
import { config } from '../src/config/config';

let contactPage: ContactPage;

Given('I open the contact page', async function () {
  contactPage = new ContactPage(this.page);
  await contactPage.navigate(config.uiUrl);
});

When('I fill the form with valid data', async function () {
  await contactPage.fillForm('John Doe', 'john@test.com', 'Test message');
});

When('I submit the form', async function () {
  await contactPage.submit();
});

When('I submit the form without filling fields', async function () {
  await contactPage.submit();
});

Then('success message should be displayed', async function () {
  await this.page.waitForSelector('.alert-success');
  const message = await this.page.textContent('.alert-success');
  expect(message).toBeTruthy();
});

Then('validation message should be displayed', async function () {
  const errorVisible = await this.page.isVisible('.error');
  expect(errorVisible).toBeTruthy();
});
