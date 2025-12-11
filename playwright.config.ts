import { defineConfig, devices } from '@playwright/test';
import { testConfig } from './testConfig';

const ENV = (process.env.ENV as keyof typeof testConfig.envURL) || 'qa';

export default defineConfig({
  testDir: './tests',
  timeout: 120 * 1000,
  retries: 0,
  fullyParallel: false,
  workers: 1,

  globalSetup: './global-setup.ts',
  globalTeardown: './global-teardown.ts',

  use: {
    // 👇 Check env variable to run headless in CI, headed locally
    headless: process.env.HEADLESS === 'true',
    baseURL: testConfig.envURL[ENV],
    storageState: 'LoginAuthCQ.json',
    ignoreHTTPSErrors: true,
    screenshot: 'on',
    video: 'on',
    trace: 'on',
  },

  projects: [
    {
      name: 'Chrome',
      use: { ...devices['Desktop Chrome'] },
    },
  ],

  reporter: [
    ['list'],
    ['html', { outputFolder: 'html-report', open: 'never', attachments: true }],
    ['allure-playwright'],
  ],
});
