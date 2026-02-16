import { Page } from '@playwright/test';

export class ContactPage {
  constructor(private page: Page) {}

  async navigate(url: string) {
    await this.page.goto(url);
  }

  async fillForm(name: string, email: string, message: string) {
    await this.page.fill('#name', name);
    await this.page.fill('#email', email);
    await this.page.fill('#message', message);
  }

  async submit() {
    await this.page.click('button[type="submit"]');
  }
}
