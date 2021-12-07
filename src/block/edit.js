import { useBlockProps, MediaPlaceholder } from '@wordpress/block-editor';

import './editor.scss';

export default function Edit({ setAttributes, attributes }) {
	const { url } = attributes;
	return (
		<div {...useBlockProps()}>
			{url ? (
				<img src={url} alt="" />
			) : (
				<MediaPlaceholder
					onSelect={(el) => {
						setAttributes({ url: el.url });
					}}
					allowedTypes={['image/svg+xml']}
				/>
			)}
		</div>
	);
}
