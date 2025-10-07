import { test, expect } from "@playwright/test";

test("Mouse double click", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  await expect(page.locator("#field1")).toHaveValue("Hello World!");

  const btn = page.locator("button[ondblclick='myFunction1()']");

  await btn.dblclick();
  await expect(page.locator("#field2")).toHaveValue("Hello World!");
});
