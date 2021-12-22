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
} from '@wordpress/e2e-test-utils';

async function upload( selector ) {
	await page.waitForSelector( selector );
	const inputElement = await page.$( selector );
	const testImagePath = path.join(
		__dirname,
		'..',
		'assets',
		'upload_test_svg.svg'
	);
	const filename = uuid();
	const tmpFileName = path.join( os.tmpdir(), filename + '.png' );
	fs.copyFileSync( testImagePath, tmpFileName );
	await inputElement.uploadFile( tmpFileName );
	return filename;
}

async function waitForImage( filename ){
	await page.waitForSelector(
		'.wp-block-alternative-site-logo-alternative-site-logo svg'
	);
}

describe('Alternative Site Logo', () => {
	beforeEach(async () => {
		await createNewPost();
	});
	it('can upload svg file', async () => {
		await insertBlock('Alternative Site Logo');
		const filename = await upload(`.wp-block-alternative-site-logo-alternative-site-logo input[type=file]` );
		// await waitForImage( filename );
		expect( await getEditedPostContent() ).toMatchSnapshot();
	});
});
