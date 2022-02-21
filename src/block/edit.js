import { useBlockProps } from '@wordpress/block-editor';
import { FormFileUpload, SandBox } from '@wordpress/components';
import { useEntityProp } from '@wordpress/core-data';

import DOMPurify from 'dompurify';
//import { ReactSVG } from 'react-svg';

import './editor.scss';

export default function Edit({ setAttributes, attributes }) {
	const { svgTag, logoTitle } = attributes;
	const [title, setTitle] = useEntityProp('root', 'site', 'title');

	return (
		<div {...useBlockProps()}>
			{svgTag ? (
				<SandBox html={svgTag} />
				// {svgTag}
			) : (
				<FormFileUpload
					accept="image/svg+xml"
					onChange={(event) => {
						if (event.target.files && event.target.files[0]) {
							const file = event.target.files[0];
							console.log(file);
							const reader = new window.FileReader();
							const parser = new DOMParser();
							const serialize = new XMLSerializer();
							reader.onload = (e) => {
								// console.log(e.target.result);
								// row SVGをサニタイズする
								const cleanSvg = DOMPurify.sanitize(e.target.result);
								console.log(cleanSvg);
								// titleTagなどを付与する
								let parsedSvg = parser.parseFromString(cleanSvg, "image/svg+xml").firstChild;
								parsedSvg.setAttribute('role','img');
								let newTitle = document.createElement("title");
								let newTitleContent = document.createTextNode(title);
								newTitle.appendChild(newTitleContent);
								parsedSvg.appendChild(newTitle);
								console.log(parsedSvg);
								// 文字列に戻す
								const a11ySvg = serialize.serializeToString(parsedSvg);
								console.log(a11ySvg);
								
								setAttributes({ svgTag: a11ySvg });
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
