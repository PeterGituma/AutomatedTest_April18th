const path = require('path');

exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page;
    this.filePath = 'file://' + path.resolve(__dirname, '../static/login.html');
    this.usernameField = '#username';
    this.passwordField = '#password';
    this.loginButton = '#login';
    this.successBanner = '#welcome';
    this.errorBanner = '#error';
  }

  async goto() {
    await this.page.goto("http://127.0.0.1:5500/login-playwright/static/Login.html");
  }

  async login(username, password) {
    await this.page.fill(this.usernameField, username);
    await this.page.fill(this.passwordField, password);
    await this.page.click(this.loginButton);
  }

  async isLoginSuccessful() {
    return await this.page.isVisible(this.successBanner);
  }

  async isLoginError() {
    return await this.page.isVisible(this.errorBanner);
  }
};
