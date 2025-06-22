import { Page, Locator } from '@playwright/test';

export class MinisterialReleasesPage {
  readonly page: Page;
  readonly keywordInput: Locator;
  readonly premierCheckbox: Locator;
  readonly applyFiltersButton: Locator;
  readonly results: Locator;
  readonly clearAllButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.keywordInput = page.getByRole('textbox', { name: 'Keyword' });
    this.premierCheckbox = page.locator('#filter-ministers').getByText('The Premier');
    this.applyFiltersButton = page.locator('[data-test="finder-submit"]');
    this.results = page.locator('.nsw-search-results .nsw-list-item__copy a');
    this.clearAllButton = page.locator('[data-test="finder-clear-all"]');
  }

  async goto() {
    await this.page.goto('https://www.nsw.gov.au/ministerial-releases');
  }

  async searchFor(keyword: string) {
    await this.keywordInput.fill(keyword);
  }

  async selectPremier() {
    await this.premierCheckbox.check();
  }

  async applyFilters() {
    await this.applyFiltersButton.click();
  }

  async waitForResults() {
    await this.page.waitForSelector('.nsw-search-results');
  }

  async getResultsTexts(): Promise<string[]> {
    const elements = await this.results.all();
    return Promise.all(elements.map(e => e.innerText()));
  }
  async clearAllFilters() {
    await this.clearAllButton.click();
  }
}