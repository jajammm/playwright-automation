import { test, expect } from "@playwright/test";

test("Soft Assertions", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");

  // Soft Assertion
  await expect(page).toHaveURL("https://www.demoblaze.com/index.html");
  await expect.soft(page).toHaveTitle("lorem");
  await expect.soft(page.locator(".navbar-brand")).toBeVisible();
});
