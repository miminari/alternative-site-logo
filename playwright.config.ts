import { PlaywrightTestConfig, devices } from "@playwright/test";

const config: PlaywrightTestConfig = {
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    testMatch: '**/*.spec.ts',
    use: {
        baseURL: 'http://localhost:8182',
        trace: 'on-first-retry',
    },
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome']},
        },
        {
            name: 'firefox',
            use: { ...devices['Desktop Firefox']},
        },
        {
            name: 'webkit',
            use: { ...devices['Desktop Safari']},
        },
    ],
};
export default config;