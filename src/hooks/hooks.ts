import { Before, After } from '@cucumber/cucumber';
import { chromium, firefox, Browser, Page } from '@playwright/test';
import { log } from '../utils/networkLogger';

let browser: Browser;

Before(async function () {
  browser = await chromium.launch({ headless: true });
  const page: Page = await browser.newPage();
  this.page = page;

  page.on('response', response => {
    const message = `URL: ${response.url()} | Status: ${response.status()}`;
    console.log(message);
    log(message);
  });
});

After(async function () {
  await browser.close();
});
