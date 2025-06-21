import { test, expect } from '@playwright/test';

test('Ministerial Releases: Search and Filter for Prue Car', async ({
  page,
}) => {
  // 1. Go to the ministerial releases page
  await page.goto('https://www.nsw.gov.au/ministerial-releases');
  // await page.pause();
  //getByRole('textbox', { name: 'Keyword' })
  // Validate the page title
  await expect(page).toHaveTitle(/Ministerial Releases/i);

  // enter the search term "Prue car" in the search input
  await page.getByRole('textbox', { name: 'Keyword' }).fill('Prue car');
  //locator('#filter-ministers').getByText('The Premier')
  //select the checkbox for "The Premier" in the Ministers accordion
  await page.locator('#filter-ministers').getByText('The Premier').check();
  //locator('[data-test="finder-submit"]')
  // Click on the Apply Filters button
  await page.locator('[data-test="finder-submit"]').click();
  // and check the results contain "Prue Car" in the links

  // 2. Validate the page title
  await expect(page).toHaveTitle(/Ministerial Releases/i);

  // Wait for the search results to load
  await page.waitForSelector('.nsw-search-results');
  // await page.pause();
  // Validate that all the resulting links contain "Prue Car"
  const results = await page
    .locator('.nsw-search-results')
    .locator('.nsw-list-item__copy')
    .locator('p')
    .all();
  console.log(`results: ${results.length}`);
  // Ensure there are results
  // expect(await results.length).toBeGreaterThanOrEqual(1); // Ensure there is at least one result
  // Loop through the results and log the text content
  for (const result of results) {
    const text = await result.innerText();
    console.log(`text: ${text}`);
    expect(text.toLowerCase()).toContain('prue car'); // Ensure each result contains "Prue Car" (case-insensitive)
  }
});