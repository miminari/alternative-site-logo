import { useBlockProps } from '@wordpress/block-editor';
import { FormFileUpload, SandBox } from '@wordpress/components';
import { useEntityProp } from '@wordpress/core-data';

import DOMPurify from 'dompurify';
//import { ReactSVG } from 'react-svg';

import './editor.scss';

export default function Edit({ setAttributes, attributes }) {
	const { svgTag, logoTitle } = attributes;
	const [title, setTitle] = useEntityProp('root', 'site', 'title');

	if (!logoTitle) {
		setAttributes({ logoTitle: title });
	}

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
							// console.log(file);
							const reader = new window.FileReader();
							const parser = new window.DOMParser();
							const serialize = new window.XMLSerializer();
							const ariaId = 'altslogoTitle';
							reader.onload = (e) => {
								// row SVGをサニタイズする
								const cleanSvg = DOMPurify.sanitize(e.target.result);
								// console.log(cleanSvg);
								// titleTagなどを付与する
								const parsedSvg = parser.parseFromString(cleanSvg, 'image/svg+xml').firstChild;
								parsedSvg.setAttribute('role', 'img');
								parsedSvg.setAttribute('aria-describedby', ariaId);
								const newTitle = document.createElement('title');
								newTitle.setAttribute('id', ariaId);
								const newTitleContent = document.createTextNode(logoTitle);
								newTitle.appendChild(newTitleContent);
								parsedSvg.appendChild(newTitle);
								// console.log(parsedSvg);
								// 文字列に戻す
								const a11ySvg = serialize.serializeToString(parsedSvg);
								// console.log(a11ySvg);
								// もう一度サニタイズ
								const rearrangedSvg = DOMPurify.sanitize(a11ySvg);
								// console.log(rearrangedSvg);
								setAttributes({ svgTag: rearrangedSvg });
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
