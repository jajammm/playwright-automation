import { test, expect } from "@playwright/test";

/**
1) expect(page).toHaveURL() - Page has URL
2) expect(page).toHaveTitle() - Page has title
3) expect(locator).toBeVisible() - Element is visible
4) expect(locator).toBeEnabled() - Control is enabled
expect(locator).toBeDisabled() - Element is disabled
5) expect(locator).toBeChecked() - Radio/Checkbox is checked
6) expect(locator).toHaveAttribute() - Element has attribute
7) expect(locator).toHaveText() - Element matches text
8) expect(locator).toContainText() - Element contains text
9) expect(locator).toHaveValue(value) - Input has a value
10) expect(locator).toHaveCount() - List of elements has given length
 */

test("Assertions", async ({ page }) => {
  await page.goto("https://demo.nopcommerce.com/register");

  // .toHaveURL()
  await expect(page).toHaveURL("https://demo.nopcommerce.com/register");

  // .toHaveTitle()
  await expect(page).toHaveTitle(/nopCommerce demo store. Register/);

  // .toBeVisible()
  const logo = page.getByAltText("nopCommerce demo store");
  await expect(logo).toBeVisible();

  // .toBeEnabled()
  const searchBox = page.getByPlaceholder("Search store");
  await expect(searchBox).toBeEnabled();

  // .toBeChecked()
  const maleRadioButton = page.locator("#gender-male");
  await maleRadioButton.click();
  await expect(maleRadioButton).toBeChecked();

  const newsLetterCheckbox = page.locator("#Newsletter");
  await expect(newsLetterCheckbox).toBeChecked();

  // .toHaveAttribute()
  const registerButton = page.getByRole("button", { name: "Register" });
  await expect(registerButton).toHaveAttribute("type", "submit");

  // .toHaveText()
  const registerHeader = page.getByRole("heading", { name: "Register" });
  await expect(registerHeader).toHaveText("Register");

  // .toContainText()
  await expect(registerHeader).toContainText("Regis");

  //   .toHaveValue()
  const emailInput = page.locator("#Email");
  await emailInput.fill("test@example.com");
  await expect(emailInput).toHaveValue("test@example.com");

  /** .toHaveCount()
  const dateOfBirthDropDown = page.locator(
    "select[name='DateOfBirthDay'] option"
  );
  await expect(dateOfBirthDropDown).toHaveCount(15);*/
});
