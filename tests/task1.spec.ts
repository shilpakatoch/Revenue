

import { test , expect} from '../fixtures/fixtures';


test('Ministerial Releases: Search and Filter for chris minns', async ({ ministerialReleasesPage }) => {
  await ministerialReleasesPage.searchFor('chris minns');
  await ministerialReleasesPage.selectPremier();
  await ministerialReleasesPage.applyFilters();
  await ministerialReleasesPage.waitForResults();

  const results = await ministerialReleasesPage.getResultsTexts();
  console.log('Captured results:', results);




  expect(results.length).toBeGreaterThan(0);
  for (const text of results) {
    expect(text.toLowerCase()).toContain('chris minns');
  }
  

});