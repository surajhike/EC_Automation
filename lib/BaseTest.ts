import { test as baseTest, BrowserContext, Page } from '@playwright/test';
import { ECLoginPage } from '@pages/LoginPage';
import { ECDashboardPage } from '@pages/DashboardPage';

// Extend Playwright test to include page objects
type MyFixtures = {
  ecLoginPage: ECLoginPage;
  ecdashboardPage: ECDashboardPage;
};

export const test = baseTest.extend<MyFixtures>({
  ecLoginPage: async ({ page, context }, use) => {
    await use(new ECLoginPage(page, context));
  },

  ecdashboardPage: async ({ page, context }, use) => {
    await use(new ECDashboardPage(page, context));
  },
});

// Auto-navigate to dashboard before each test
test.beforeEach(async ({ page, baseURL }) => {
  await page.goto(`${baseURL}/home`);
});

export { test as default };
export { expect } from '@playwright/test';
