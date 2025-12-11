import { chromium, FullConfig, BrowserContext } from '@playwright/test';
import { testConfig as customTestConfig } from './testConfig';

let context: BrowserContext;

async function globalSetup(config: FullConfig) {
  console.log("Step 1: Launching Chromium browser...");

  // ✅ Use HEADLESS env variable; default true
  const HEADLESS = process.env.HEADLESS !== 'false'; // if HEADLESS=false, run headed
  const browser = await chromium.launch({ headless: HEADLESS });
  context = await browser.newContext();
  const page = await context.newPage();

  // ✅ Fetch baseURL from customTestConfig with default
  const ENV = (process.env.ENV as keyof typeof customTestConfig.envURL) || 'qa';
  const baseURL = customTestConfig.envURL[ENV];

  console.log(`Step 2: Navigate to login page: ${baseURL}/login`);
  await page.goto(`${baseURL}/login`, { timeout: 600000, waitUntil: 'load' });

  // console.log("Step 3: Enter 'Your username'");
  // await page.fill('//input[@placeholder="Your username"]', customTestConfig.validUsername);

  // console.log("Step 3: Enter 'Your Work Email'");
  // await page.fill('//input[@placeholder="Your Work Email"]', customTestConfig.validWorkEmailPoc);

  console.log("Step 3: Enter 'Your Work Email'");
  await page.fill('//input[@placeholder="Your Work Email"]', customTestConfig.validWorkEmail);

  console.log("Step 4: Click Submit button");
  await page.click('//input[@type="submit"]');

  console.log("Step 5: Enter Password");
  await page.fill('//input[@placeholder="Password"]', customTestConfig.validPassword);

  // console.log("Step 5: Enter Password");
  // await page.fill('//input[@placeholder="Password"]', customTestConfig.validPasswordPoc);

  console.log("Step 6: Click Login button");
  await page.click("//button[text()='Log in']");

  console.log("Step 7: Waiting for home/dashboard page to load...");
  await page.waitForURL(`${baseURL}/home`, { timeout: 60000 });

  console.log("Step 8: Saving authentication state...");
  await context.storageState({ path: 'LoginAuthCQ.json' });

  console.log("Step 9: Closing login page");
  await page.close();
  await browser.close();

  console.log("Global setup completed successfully!");
}

export default globalSetup;
