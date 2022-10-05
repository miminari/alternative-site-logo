/**
 * External dependencies
 */
import path from 'path';
import fs from 'fs';
import os from 'os';
import { v4 as uuid } from 'uuid';

/**
 * WordPress dependencies
 */
import {
	createNewPost,
	insertBlock,
	getEditedPostContent,
	openDocumentSettingsSidebar,
} from '@wordpress/e2e-test-utils';

async function upload(selector, svg) {
	await page.waitForSelector(selector);
	const inputElement = await page.$(selector);
	const testImagePath = path.join(__dirname, '..', 'assets', svg);
	const filename = uuid();
	const tmpFileName = path.join(os.tmpdir(), filename + '.png');
	fs.copyFileSync(testImagePath, tmpFileName);
	await inputElement.uploadFile(tmpFileName);
	return filename;
}

describe('Alternative Site Logo', () => {
	beforeEach(async () => {
		await createNewPost();
	});
	it('can upload svg file', async () => {
		await insertBlock('Alternative Site Logo');
		await upload(
			`.wp-block-altslogo-altslogo input[type=file]`,
			'upload_test_svg.svg'
		);
		await page.waitForSelector('.wp-block-altslogo-altslogo iframe');
		expect(await getEditedPostContent()).toMatchSnapshot();
	});
	it('should sanitize svg file', async () => {
		await insertBlock('Alternative Site Logo');
		await upload(
			`.wp-block-altslogo-altslogo input[type=file]`,
			'invalid.svg'
		);
		expect(await getEditedPostContent()).toMatchSnapshot();
	});
	it('should insert title tag and role attribute', async () => {
		await insertBlock('Alternative Site Logo');
		await upload(
			`.wp-block-altslogo-altslogo input[type=file]`,
			'upload_test_svg.svg'
		);
		const regex = new RegExp(
			`<!-- wp:altslogo\\/altslogo [^]+ -->\\s*<div class="wp-block-altslogo-altslogo">\\s*<a [^>]*>\\s*<svg aria-describedby="[^"]+" role="img" [^]+>[^]*<title id="[^"]+"[^>]+>[^]+<\\/title>[^]*<\\/svg>\\s*<\\/a>\\s*<\\/div>\\s*<!-- /wp:altslogo\\/altslogo -->`
		);
		expect(await getEditedPostContent()).toMatch(regex);
	});
	it('should change the viewBox size by width', async () => {
		await insertBlock('Alternative Site Logo');
		await upload(
			`.wp-block-altslogo-altslogo input[type=file]`,
			'upload_test_svg_horizontal.svg'
		);
		await page.waitForSelector('.wp-block-altslogo-altslogo iframe');
		// Changing width
		await openDocumentSettingsSidebar();
		await page.waitForSelector(
			'.components-panel input[aria-label="Image width"]'
		);
		await page.focus('.components-panel input[aria-label="Image width"]');
		await page.keyboard.press('Tab');
		await page.keyboard.type('120');
		await page.keyboard.press('Escape');
		const regex = new RegExp(
			`<!-- wp:altslogo\\/altslogo [^]+ -->\\s*<div class="wp-block-altslogo-altslogo">\\s*<a [^>]*>\\s*<svg [^]* width="120" height="75"[^>]*>[^]*<\\/svg>\\s*<\\/a>\\s*<\\/div>\\s*<!-- /wp:altslogo\\/altslogo -->`
		);
		expect(await getEditedPostContent()).toMatch(regex);
	});
	it('should link to home', async () => {
		await insertBlock('Alternative Site Logo');
		await upload(
			`.wp-block-altslogo-altslogo input[type=file]`,
			'upload_test_svg.svg'
		);
		await page.waitForSelector('.wp-block-altslogo-altslogo iframe');
		// Get current site url
		const currentUrl = page.url();
		const currentUrlArr = currentUrl.split('/');
		const currentHome = currentUrlArr[0] + '//' + currentUrlArr[2];
		const regex = new RegExp(
			`<!-- wp:altslogo\\/altslogo [^]+ -->\\s*<div class="wp-block-altslogo-altslogo">\\s*<a href="${currentHome}"[^>]*>\\s*<svg [^>]*>[^]*<\\/svg>\\s*<\\/a>\\s*<\\/div>\\s*<!-- /wp:altslogo\\/altslogo -->`
		);
		expect(await getEditedPostContent()).toMatch(regex);
	});
	it('can change the style to Animation Dash', async () => {
		await insertBlock('Alternative Site Logo');
		await upload(
			`.wp-block-altslogo-altslogo input[type=file]`,
			'upload_test_svg_horizontal.svg'
		);
		await page.waitForSelector('.wp-block-altslogo-altslogo iframe');
		await openDocumentSettingsSidebar();
		await page.waitForSelector(
			'.block-editor-block-styles .block-editor-block-styles__item[aria-label="Animation Dash"]'
		);
		await page.click(
			'.block-editor-block-styles .block-editor-block-styles__item[aria-label="Animation Dash"]'
		);
		const regex = new RegExp(
			`<!-- wp:altslogo\\/altslogo [^]+ -->\\s*<div class="wp-block-altslogo-altslogo is-style-animation-dash">[^]*<!-- /wp:altslogo\\/altslogo -->`
		);
		expect(await getEditedPostContent()).toMatch(regex);
	});
	it('should keep the original title tag', async () => {
		await insertBlock('Alternative Site Logo');
		await upload(
			`.wp-block-altslogo-altslogo input[type=file]`,
			'upload_test_svg_has_title.svg'
		);
		const regex = new RegExp(
			`<!-- wp:altslogo\\/altslogo [^]+ -->\\s*<div class="wp-block-altslogo-altslogo">\\s*<a [^>]+>\\s*<svg aria-describedby="[^"]+" role="img" [^>]*>[^]*<title[^>]*>Code is Poetry.<\\/title>[^]*<\\/svg>\\s*<\\/a>\\s*<\\/div>\\s*<!-- /wp:altslogo\\/altslogo -->`
		);
		expect(await getEditedPostContent()).toMatch(regex);
	});
});
