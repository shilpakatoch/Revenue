import { test as base } from '@playwright/test';
import { MinisterialReleasesPage } from '../pages/MinisterialReleasesPage';

type Fixtures = {
  ministerialReleasesPage: MinisterialReleasesPage;
};

export const test = base.extend<Fixtures>({
  ministerialReleasesPage: async ({ page }, use) => {
    const releasesPage = new MinisterialReleasesPage(page);
    await releasesPage.goto();
    await use(releasesPage);
  },
});

export { expect } from '@playwright/test';
