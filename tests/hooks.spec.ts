import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");
  await expect(page).toHaveURL("https://www.demoblaze.com/index.html");
  await expect(page).toHaveTitle(/STORE/);

  // Login
  await page.click("#login2");
  await expect(page.locator("#logInModal")).toBeVisible();
  await page.fill("#loginusername", "Test123");
  await page.fill("#loginpassword", "Test123");
  await page.click("button[onclick='logIn()']");
});

test.afterEach(async ({ page }) => {
  //   Logout
  await page.click("#logout2");
  await expect(page.locator("#login2")).toBeVisible();
});

test("Home page", async ({ page }) => {
  // Homepage after login
  const welcomeText = page.locator("#nameofuser");
  await expect(welcomeText).toHaveText("Welcome Test123");
});

test("Add to cart", async ({ page }) => {
  //   Add to cart
  await page.click("//a[normalize-space()='Samsung galaxy s6']");
  await expect(page.locator("h2.name")).toHaveText("Samsung galaxy s6");
  await page.click("//a[normalize-space()='Add to cart']");

  page.on("dialog", async (dialog) => {
    expect(dialog.message()).toContain("Product added.");
    await dialog.accept();
  });
});
