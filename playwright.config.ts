import path from 'path';
import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    testMatch: '**/*.spec.ts',
    use: {
        baseURL: process.env.WP_BASE_URL || 'http://localhost:8182',
        headless: true,
        viewport: {
			width: 960,
			height: 700,
		},
        contextOptions: {
			reducedMotion: 'reduce',
			strictSelectors: true,
		},
        ignoreHTTPSErrors: true,
        locale: 'en-US',
        actionTimeout: 10_000, // 10 seconds.
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