//import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { RawHTML } from '@wordpress/element';

// import parse from 'html-react-parser';

export default function save({ attributes }) {
	const { svgTag } = attributes;
	if (!svgTag) {
		return null;
	}
	return (
		<div {...useBlockProps.save()}>
			<RawHTML>{svgTag}</RawHTML>
		</div>
	);
}
