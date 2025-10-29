import { Given, When, Then, Before, After, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium, Browser, Page, BrowserContext } from '@playwright/test';
import { expect } from '@playwright/test';

setDefaultTimeout(60000);

let browser: Browser;
let context: BrowserContext;
let page: Page;

Before(async function () {
  browser = await chromium.launch({ 
    headless: true,
    channel: 'chrome'
  });
  context = await browser.newContext();
  page = await context.newPage();
});

After(async function () {
  await page.close();
  await context.close();
  await browser.close();
});

// Login steps
Given('I am on the login page', async function () {
  await page.goto('http://localhost:3000');
  await expect(page.locator('h1')).toHaveText('Login');
});

When('I enter username {string} and password {string}', async function (username: string, password: string) {
  await page.fill('#username', username);
  await page.fill('#password', password);
});

When('I click the login button', async function () {
  await page.click('#loginButton');
});

Then('I should be redirected to the home page', async function () {
  await page.waitForURL('**/home.html');
  await expect(page).toHaveURL(/home\.html/);
});

Then('I should see the welcome message', async function () {
  await expect(page.locator('.welcome-card h2')).toHaveText('Welcome to the Home Screen');
});

Then('I should see an error message', async function () {
  const errorMessage = page.locator('#errorMessage');
  await expect(errorMessage).toBeVisible();
});

// Authentication steps
Given('I am logged in as {string} with password {string}', async function (username: string, password: string) {
  await page.goto('http://localhost:3000');
  await page.fill('#username', username);
  await page.fill('#password', password);
  await page.click('#loginButton');
  await page.waitForURL('**/home.html');
});

// Navigation steps
When('I am on the home page', async function () {
  if (!page.url().includes('home.html')) {
    await page.goto('http://localhost:3000/home.html');
  }
});

When('I navigate to the users page', async function () {
  await page.click('#userMenu');
  await page.waitForURL('**/users.html');
});

When('I click on the Users menu', async function () {
  await page.click('#userMenu');
});

Then('I should see my username {string} in the welcome message', async function (username: string) {
  const usernameElement = page.locator('#usernameDisplay');
  await expect(usernameElement).toHaveText(username);
});

// User management steps
Given('I am on the users page', async function () {
  if (!page.url().includes('users.html')) {
    await page.goto('http://localhost:3000/users.html');
  }
});

When('I should be on the users page', async function () {
  await expect(page).toHaveURL(/users\.html/);
});

Then('I should see the user list', async function () {
  const userTable = page.locator('table');
  await expect(userTable).toBeVisible();
});

Then('I should see the create user button', async function () {
  const createButton = page.locator('#createUserBtn');
  await expect(createButton).toBeVisible();
});

When('I click the create user button', async function () {
  await page.click('#createUserBtn');
});

Then('I should be on the user creation page', async function () {
  await page.waitForURL('**/create-user.html');
  await expect(page).toHaveURL(/create-user\.html/);
});

When('I fill in the user form with name {string} and email {string}', async function (name: string, email: string) {
  await page.fill('#name', name);
  await page.fill('#email', email);
});

When('I submit the user form', async function () {
  await page.click('#submitBtn');
});

Then('I should see a success message', async function () {
  const successMessage = page.locator('#successMessage');
  await expect(successMessage).toBeVisible();
});

Then('I should be redirected to the user list page', async function () {
  await page.waitForURL('**/users.html', { timeout: 3000 });
  await expect(page).toHaveURL(/users\.html/);
});

Then('I should see the new user in the list', async function () {
  const userRows = page.locator('tbody tr');
  const count = await userRows.count();
  expect(count).toBeGreaterThan(0);
});

export { browser, context, page };
