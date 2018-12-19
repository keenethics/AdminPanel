/* global page */

describe('Sample tests', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:3000');
  });

  it('should display "Index page" text on page', async () => {
    await expect(page).toMatch('Main page');
  });
  it('should display Textfield on components page', async () => {
    await page.goto('http://localhost:3000/form-components');
    await expect(page).toMatchElement('input.textfield');
  });
});
