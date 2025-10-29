# playwright-bdd

A BDD (Behavior-Driven Development) test application using Playwright and Cucumber.

## Overview

This project demonstrates a complete BDD testing setup with:
- **Playwright**: For browser automation and E2E testing
- **Cucumber**: For writing tests in Gherkin syntax (BDD)
- **TypeScript**: For type-safe test code
- **Express**: For the simple web application being tested

## Application Features

The application includes:

1. **Login Screen**: Default credentials (username: `admin`, password: `password123`)
2. **Home Screen**: Welcome message with username display
3. **User Menu**: Navigation menu with Users link
4. **User List Screen**: Displays all users with a "Create User" button
5. **User Creation Page**: Form to create new users with name and email

## Project Structure

```
playwright-bdd/
├── app/
│   ├── server.js          # Express server
│   └── public/            # Static HTML pages
│       ├── login.html     # Login page
│       ├── home.html      # Home page with welcome message
│       ├── users.html     # User list page
│       └── create-user.html # User creation form
├── tests/
│   ├── features/          # Cucumber feature files (BDD specs)
│   │   ├── login.feature
│   │   ├── user-management.feature
│   │   └── navigation.feature
│   └── step-definitions/  # Step implementations
│       └── steps.ts
├── cucumber.js            # Cucumber configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Project dependencies and scripts
```

## Installation

```bash
npm install
```

## Usage

### Start the Application

```bash
npm start
```

The application will be available at `http://localhost:3000`

### Run All Tests

```bash
npm test
```

### Run Specific Test Suites

```bash
# Login tests only
npm run test:login

# User management tests only
npm run test:users

# Navigation tests only
npm run test:nav
```

## BDD Test Scenarios

### Login Tests
- Successful login with valid credentials
- Failed login with invalid credentials

### User Management Tests
- View user list
- Create a new user

### Navigation Tests
- Navigate to home page
- Navigate to users page from menu

## Test Reports

After running tests, reports are generated in:
- `test-results/cucumber-report.html` - HTML report
- `test-results/cucumber-report.json` - JSON report

## Default Credentials

- **Username**: admin
- **Password**: password123

## Technologies Used

- [Playwright](https://playwright.dev/) - Browser automation
- [Cucumber](https://cucumber.io/) - BDD testing framework
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Express](https://expressjs.com/) - Web application framework
- [Node.js](https://nodejs.org/) - JavaScript runtime

## License

ISC
