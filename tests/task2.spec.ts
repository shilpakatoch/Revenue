import { test , expect} from '../fixtures/fixtures';


test('Ministerial Releases: Search, Filter, and Clear All', async ({ ministerialReleasesPage }) => {
  await ministerialReleasesPage.searchFor('chris minns');
  await ministerialReleasesPage.selectPremier();
  await ministerialReleasesPage.applyFilters();
  await ministerialReleasesPage.waitForResults();

  const results = await ministerialReleasesPage.getResultsTexts();
  expect(results.length).toBeGreaterThan(0);
  for (const text of results) {
    expect(text.toLowerCase()).toContain('chris minns'); // Not case sensitive
  };

  // Click the "Clear all" button

  await ministerialReleasesPage.clearAllFilters();
  // Wait for the filters to be cleared and results to be updated
  await ministerialReleasesPage.waitForResults();
 
});