/* global page */

describe('Sample tests', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:3006');
  });

  it('should display "Index page" text on page', async () => {
    await expect(page).toMatch('Main page');
  });
  it('should display Textfield on components page', async () => {
    await page.goto('http://localhost:3006/form-components');
    await expect(page).toMatchElement('input.textfield');
  });
});
