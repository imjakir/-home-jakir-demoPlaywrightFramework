import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    globalSetup: './global.setup',
    testDir: './tests',

    timeout: 30 * 1000, // Maximum time one test can run for.
    fullyParallel: true, // Run tests in files in parallel.
    reporter: [['list'], ['html', { open: 'never', outputFolder: 'report' }]],
    expect: { timeout: 30 * 1000 },

    use: {
        trace: 'on-first-retry',
        ignoreHTTPSErrors: true,
        headless: true,
        storageState: './LoginAuth.json',
    },
});
