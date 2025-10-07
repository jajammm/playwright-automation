import { test, expect } from "@playwright/test";

test("Handling alerts", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  // Handle alert
  page.on("dialog", async (dialog) => {
    expect(dialog.type()).toContain("alert");
    expect(dialog.message()).toContain("I am an alert box!");
    await dialog.accept();
  });

  await page.click("#alertBtn");
});

test("Handling confirm alerts", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  // Handle confirm alert - OK
  page.on("dialog", async (dialog) => {
    expect(dialog.type()).toContain("confirm");
    expect(dialog.message()).toContain("Press a button!");
    await dialog.accept(); // Clicks "OK"
    // await dialog.dismiss(); // Clicks "Cancel"
  });

  await page.click("#confirmBtn");

  await expect(page.locator("#demo")).toHaveText("You pressed OK!");
});

test("Handling prompt", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  // Handle prompt
  page.on("dialog", async (dialog) => {
    expect(dialog.type()).toContain("prompt");
    expect(dialog.message()).toContain("Please enter your name:");
    expect(dialog.defaultValue()).toContain("Harry Potter");
    await dialog.accept("Zamzam"); // Clicks "OK"
  });

  await page.click("#promptBtn");

  await expect(page.locator("#demo")).toHaveText(
    "Hello Zamzam! How are you today?"
  );
});
