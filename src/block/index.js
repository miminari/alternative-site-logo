/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';

import { default as icon } from './icon';

/**
 * Internal dependencies
 */
import edit from './edit';
import save from './save';

import './style.scss';

registerBlockType('altslogo/altslogo', {
	icon,
	edit,
	save,
});
