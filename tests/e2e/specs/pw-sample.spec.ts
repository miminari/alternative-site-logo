import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
    await page.goto('http://localhost:8182/');
    const name = await page.innerText('.wp-block-site-title');
    expect(name).toBe('alternative-site-logo');
})