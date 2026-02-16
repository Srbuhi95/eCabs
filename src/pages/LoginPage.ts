import { Page, expect } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async navigate(url: string) {
    await this.page.goto(url);
  }

  async enterUsername(username: string) {
    await this.page.fill('input[name="username"]', username);
  }

  async enterPassword(password: string) {
    await this.page.fill('input[name="password"]', password);
  }

  async clickLogin() {
    await this.page.click('button[type="submit"]');
  }

  async verifyDashboardVisible() {
    await expect(this.page.locator('.oxd-main-menu-item--name:has-text("Dashboard")')).toBeVisible();
  }

  async verifyErrorMessageVisible() {
    await expect(this.page.locator('.oxd-alert-content-text')).toBeVisible();
  }
}
