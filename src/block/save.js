//import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { url } = attributes;
	if (!url) {
		return null;
	}
	return (
		<div {...useBlockProps.save()}>
			<img src={url} alt="" />
		</div>
	);
}
