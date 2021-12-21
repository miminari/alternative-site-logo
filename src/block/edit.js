import { useBlockProps, MediaPlaceholder } from '@wordpress/block-editor';
import { FormFileUpload, SandBox } from '@wordpress/components';

import DOMPurify from 'dompurify';

import './editor.scss';

export default function Edit({ setAttributes, attributes }) {
	const { url, svgTag } = attributes;
	return (
		<div {...useBlockProps()}>
			{ url || svgTag ? (
				// <img src={url} alt="" />
				<SandBox html={ svgTag } />
			) : (
				// <MediaPlaceholder
				// 	onSelect={(el) => {
				// 		setAttributes({ url: el.url });
				// 	}}
				// 	allowedTypes={['image/svg+xml']}
				// />
				<FormFileUpload
					accept="image/svg+xml"
					onChange={(event) => {
						if (event.target.files && event.target.files[0]) {
							const file = event.target.files[0];
							const reader = new FileReader;
							reader.onload = (event) => {
								console.log(event)
								console.log(event.target.result)
								//setValue(event.target.result)
								const cleanSvg = DOMPurify.sanitize(event.target.result);
								console.log( cleanSvg );
								setAttributes({ svgTag: cleanSvg })
							}
							// reader.readAsDataURL(file)
							reader.readAsText(file)
						}
						console.log(event)
					}
					}
				>
					Upload
				</FormFileUpload>
			)}
		</div>
	);
}
