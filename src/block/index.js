/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import metadata from './block.json';
import edit from './edit';
import save from './save';

import './style.scss';

registerBlockType( metadata.name, {
	...metadata,
	edit: edit,
	save: save,
} );
