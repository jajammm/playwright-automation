import { test, expect } from "@playwright/test";

test("Mouse hover", async ({ page }) => {
  await page.goto("https://demo.nopcommerce.com/");

  const computersMenu = page.locator(
    "//ul[@class='top-menu notmobile']//a[normalize-space()='Computers']"
  );
  const desktopSubMenu = page.locator(
    "//ul[@class='top-menu notmobile']//a[normalize-space()='Desktops']"
  );

  await computersMenu.hover();
  await desktopSubMenu.click();

  await expect(page).toHaveURL("https://demo.nopcommerce.com/desktops");
  await expect(page.locator("h1")).toHaveText("Desktops");
});
