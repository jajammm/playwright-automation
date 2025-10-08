import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");
  await expect(page).toHaveURL("https://www.demoblaze.com/index.html");
  await expect(page).toHaveTitle(/STORE/);

  // Login
  await page.getByRole("link", { name: "Log in" }).click();
  await expect(page.locator("#logInModal")).toBeVisible();

  await page.locator("#loginusername").fill("Test123");
  await page.locator("#loginpassword").fill("Test123");
  await page.getByRole("button", { name: "Log in" }).click();
});

test.afterEach(async ({ page }) => {
  // Logout
  const logout = page.locator("#logout2");
  if (await logout.isVisible()) {
    await logout.click();
    await expect(page.locator("#login2")).toBeVisible();
  }
});

test("Home page", async ({ page }) => {
  // Homepage after login
  const welcomeText = page.locator("#nameofuser");
  await expect(welcomeText).toHaveText("Welcome Test123");
});

test("Add to cart", async ({ page }) => {
  //   Add to cart
  await page.getByRole("link", { name: /samsung galaxy s6/i }).click();
  await expect(page.locator("h2.name")).toHaveText("Samsung galaxy s6");
  await page.getByRole("link", { name: /add to cart/i }).click();

  page.on("dialog", async (dialog) => {
    expect(dialog.message()).toContain("Product added.");
    await dialog.accept();
  });
});
