import { test, expect } from "@playwright/test";

test("Handling Radio Button", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  await expect(page).toHaveURL("https://testautomationpractice.blogspot.com/");
  await expect(page).toHaveTitle("Automation Testing Practice");

  const maleRadio = page.locator("#male");

  await expect(maleRadio).toBeVisible();
  await expect(maleRadio).toBeEnabled();
  await maleRadio.check();
  await expect(maleRadio).toBeChecked();
  expect(await maleRadio.isChecked()).toBeTruthy();

  const femaleRadio = page.locator("#female");
  await expect(femaleRadio).toBeVisible();
  await expect(femaleRadio).toBeEnabled();
  expect(await femaleRadio.isChecked()).toBeFalsy();
});
