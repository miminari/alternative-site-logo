//import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { RawHTML } from '@wordpress/element';

// import parse from 'html-react-parser';

export default function save({ attributes }) {
	const { svgTag, siteUrl } = attributes;
	if (!svgTag) {
		return null;
	}
	return (
		<div {...useBlockProps.save()}>
			<a href={siteUrl}>
				<RawHTML>{svgTag}</RawHTML>
			</a>
		</div>
	);
}
