import { test, expect } from "@playwright/test";

test("Single File Upload", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/upload");

  const fileUploadSelector = page.locator("#file-upload");
  const uploadButton = page.locator("#file-submit");

  await fileUploadSelector.setInputFiles("tests/files/test1.json");

  await uploadButton.click();

  await expect(page.locator("h3")).toHaveText("File Uploaded!");
  await expect(page.locator("#uploaded-files")).toHaveText("test1.json");
});

test("Multiple File Upload", async ({ page }) => {
  await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");

  const fileUploadSelector = page.locator("#filesToUpload");

  await fileUploadSelector.setInputFiles([
    "tests/files/test1.json",
    "tests/files/test2.json",
  ]);

  await expect(page.locator("#fileList")).toContainText("test1.json");
  await expect(page.locator("#fileList")).toContainText("test2.json");

  //   Remove all uploaded files
  await fileUploadSelector.setInputFiles([]);
  await expect(page.locator("#fileList")).toHaveText("No Files Selected");
});
