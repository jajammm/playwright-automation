import { test, expect } from "@playwright/test";

test("Handling checkboxes", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  await expect(page).toHaveURL("https://testautomationpractice.blogspot.com/");
  await expect(page).toHaveTitle("Automation Testing Practice");

  //   Single checkbox
  await page.locator("#tuesday").check();
  expect(await page.locator("#tuesday")).toBeChecked();
  expect(await page.locator("#tuesday").isChecked()).toBeTruthy();
  expect(await page.locator("#wednesday").isChecked()).toBeFalsy();

  //   Multiple checkboxes
  const checkboxLocators = [
    "//input[@id='tuesday' and @type='checkbox']",
    "//input[@id='wednesday' and @type='checkbox']",
    "//input[@id='friday' and @type='checkbox']",
  ];

  //   Select multiple checkboxes
  for (const locator of checkboxLocators) {
    await page.locator(locator).check();
    expect(await page.locator(locator)).toBeChecked();
    expect(await page.locator(locator).isChecked()).toBeTruthy();
  }

  //   Deselect multiple checkboxes
  for (const locator of checkboxLocators) {
    if ((await page.locator(locator).isChecked()) === true) {
      await page.locator(locator).uncheck();
      expect(await page.locator(locator).isChecked()).toBeFalsy();
    }
  }
});
