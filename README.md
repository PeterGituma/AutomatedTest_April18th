# 🔐 Login Test Automation with Playwright

This project automates login functionality testing for a static HTML login page using [Playwright](https://playwright.dev/). 
It includes **positive** and **negative** test cases to validate user authentication logic.

---


## ✅ Test Scenarios

### ✔️ Valid Login Tests
- Correct username & password
- Usernames with different casing
- Inputs with leading/trailing spaces
- Passwords with special characters

### ❌ Invalid Login Tests
- Blank inputs
- Invalid usernames or passwords
- Short or excessively long credentials

---

## 🚀 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/PeterGituma/AutomatedTest_April18th.git
cd login-playwright
```

### 2.  Install dependencies
```bash
npm install
```


### 3.  Run the Test
```bash
npx playwright test
```

### 4.  (Optional) Launch interactive UI
```bash
npx playwright test --ui

```

### 5.  🌐 Page Under Test
Make sure you're serving the Login.html file on a local server (e.g. using Live Server in VS Code or npx serve):
```bash
npx serve static

```

🛠 Tech Stack

⚙️ Playwright
🟢 Node.js
📜 JavaScript (ES6+)
👤 Author

### 👤 Author

**Peter Gituma**  
📧 [peter.l.gituma@gmail.com](mailto:peter.l.gituma@gmail.com)  
🔗 [LinkedIn](https://www.linkedin.com/in/peterlgituma/)

## 🧠 Design Choices & Future Improvements

### Design Choices
- Page Object Model (POM): I used the Page Object Model pattern to keep the test logic clean and maintainable. This allows easier updates if the UI changes.
- Data-Driven Testing: All test credentials are stored in a separate JSON file to allow easy scaling and separation of test logic from test data.
- Playwright Testing Framework: Chosen for its speed, reliability, and built-in parallel test execution, along with strong support for modern web apps.
- Clear Assertion Strategy: Used targeted assertions (isVisible() checks) to verify login success or error states, reducing false positives.
  

### If I Had More Time
- Secure Credentials Management: Move sensitive data (like real usernames/passwords) to environment variables or encrypted secrets.
- Enhanced Validation: Add tests for edge cases like SQL injection, script injection, and invalid character handling.
- More Robust Assertions: Expand assertions to validate not only visibility but also text content and page redirects.
- CI Integration: Set up GitHub Actions to automatically run tests on pull requests and merges.
- UI improvements made the page more vibrant and user-friendly, implemented something like tailwind to the web application.
- I would have also implemented React for a more dynamic login UI It would have allowed me to use a Component-based structure and state management and even improved the testing scope. 
