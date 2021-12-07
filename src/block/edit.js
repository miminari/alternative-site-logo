import { useBlockProps, MediaPlaceholder } from '@wordpress/block-editor';

import './editor.scss';

export default function edit({ setAttributes }) {
	return (
		<div {...useBlockProps()}>
			<MediaPlaceholder
				onSelect={(el) => {
					setAttributes({ url: el.url });
				}}
				allowedTypes={['image']}
			/>
		</div>
	);
}
