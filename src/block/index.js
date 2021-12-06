/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
// import metadata from './block.json';
import edit from './edit';
import save from './save';

import './style.scss';

registerBlockType( 'alternative-site-logo/alternative-site-logo', {
	// ...metadata,
	edit,
	save,
} );
