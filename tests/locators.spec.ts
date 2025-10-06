import { test, expect } from '@playwright/test';

test('Login & Logout', async ({page}) => {
    await page.goto('https://www.demoblaze.com/index.html');
    await page.click('#login2');
    
    // U can use .locator or directly .fill / .click
    // await page.locator('#loginusername').fill('test123');
    // And then the different between .type and .fill is .type will simulate like human typing

    await page.fill('#loginusername', 'Test123'); 
    await page.fill('#loginpassword', 'Test123');
    await page.click("button[onclick='logIn()']")

    const welcomeText = page.locator('#nameofuser');

    await expect(welcomeText).toHaveText('Welcome Test123');
    
    await page.click('#logout2');
    
    await expect(page.locator('#login2')).toBeVisible();
    await page.close();
})