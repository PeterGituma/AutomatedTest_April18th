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
- SQL injection & XSS attempts
- Short or excessively long credentials
- Whitespace-only input

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

## 👤 Author

**Peter Gituma**  
📧 [peter.l.gituma@gmail.com](mailto:peter.l.gituma@gmail.com)  
🔗 [LinkedIn](https://www.linkedin.com/in/peterlgituma/)
