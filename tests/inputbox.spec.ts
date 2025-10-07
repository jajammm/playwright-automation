import { test, expect } from "@playwright/test";

test("Handling inputbox", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  await expect(page).toHaveURL("https://testautomationpractice.blogspot.com/");
  await expect(page).toHaveTitle("Automation Testing Practice");

  const inputName = page.locator("#name");

  await expect(inputName).toBeVisible();
  await expect(inputName).toBeEmpty();
  await expect(inputName).toBeEditable();
  await expect(inputName).toBeEnabled();

  await inputName.fill("Test User");
  await expect(inputName).toHaveValue("Test User");
});
