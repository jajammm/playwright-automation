import { test, expect } from '@playwright/test';

/**
 * Built-in Locators Reference:
 *
 * page.getByAltText() - to locate an element, usually an <img>, by its text alternative.
 * page.getByPlaceholder() - to locate an input by placeholder.
 * page.getByRole() - to locate by explicit and implicit accessibility attributes.
 * page.getByText() - to locate by text content.
 *
 * page.getByLabel() - to locate a form control by associated label's text.
 * page.getByTitle() - to locate an element by its title attribute.
 * page.getByTestId() - to locate an element based on its data-testid attribute (other attributes can be configured).
 */

test('Builtin locators', async ({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // Locate by alt text
    const logo = page.getByAltText('company-branding');
    await expect(logo).toBeVisible();

    // Locate by placeholder
    const username = page.getByPlaceholder('Username');
    await expect(username).toBeVisible();
    await username.fill('Admin');

    const password = page.getByPlaceholder('Password');
    await expect(password).toBeVisible();
    await password.fill('admin123');

    // Locate by role
    const loginButton = page.getByRole('button', { name: 'submit' });
    await expect(loginButton).toBeVisible();
    await loginButton.click();

    // Locate by text
    const dashboardHeader = page.getByText('Dashboard');
    await expect(dashboardHeader).toBeVisible();
})