const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const testData = require('../test-data/credentials.json');  

test.describe('Login Tests', () => {
  testData.valid.forEach((data, index) => {
    test(`Login with valid credentials: ${data.username} - ${index + 1}`, async ({ page }) => {
      const loginPage = new LoginPage(page);
      await page.goto("http://127.0.0.1:5500/login-playwright/static/Login.html");
      // await loginPage.login(data.username.trim(), data.password.trim());  // Trim in case of extra spaces

      expect(await loginPage.isLoginSuccessful());
    });
  });
});
