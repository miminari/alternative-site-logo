import { useBlockProps } from '@wordpress/block-editor';
import { FormFileUpload, SandBox } from '@wordpress/components';

import DOMPurify from 'dompurify';

import './editor.scss';

export default function Edit({ setAttributes, attributes }) {
	const { svgTag } = attributes;
	return (
		<div {...useBlockProps()}>
			{svgTag ? (
				<SandBox html={svgTag} />
			) : (
				<FormFileUpload
					accept="image/svg+xml"
					onChange={(event) => {
						if (event.target.files && event.target.files[0]) {
							const file = event.target.files[0];
							const reader = new window.FileReader();
							reader.onload = (e) => {
								// row SVGをサニタイズする
								const cleanSvg = DOMPurify.sanitize(e.target.result);
								console.log(cleanSvg);
								setAttributes({ svgTag: cleanSvg });
							};
							// 取得したファイルから中身を読み出す
							reader.readAsText(file);
						}
					}}
				>
					Upload
				</FormFileUpload>
			)}
		</div>
	);
}
