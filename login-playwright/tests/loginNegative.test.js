const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test('Login with invalid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await page.goto("http://127.0.0.1:5500/login-playwright/static/Login.html");
  await page.pause();
  await loginPage.login('wrongUser', 'wrongPass');

  expect(await loginPage.isLoginError()).toBeTruthy();
});
