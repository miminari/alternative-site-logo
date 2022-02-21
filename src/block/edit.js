import { useBlockProps } from '@wordpress/block-editor';
import { FormFileUpload, SandBox } from '@wordpress/components';
import { useEntityProp } from '@wordpress/core-data';

import DOMPurify from 'dompurify';
import { ReactSVG } from 'react-svg';

import './editor.scss';

export default function Edit({ setAttributes, attributes }) {
	const { svgTag, logoTitle } = attributes;
	const [title, setTitle] = useEntityProp('root', 'site', 'title');

	// const titledSvg = (
	// 		<SVG xmlns="http://www.w3.org/2000/svg" aria-labelledby="svgLogoTitle" viewBox={viewBox}>
	// 			{titleTag}
	// 			{svgContents}
	// 		</SVG>
	// )

	// const addTitleTag = (node) => {
	// 	if (node.name === 'svg') {
	// 		return (
	// 			<SVG {...node.attribs} aria-labelledby="svgLogoTitle">
	// 				<title id="svgLogoTitle">{title}</title>
	// 				{domToReact(node.children)}
	// 			</SVG>
	// 		)
	// 	}
	// }

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
							reader.onload = (e) => {
								// console.log(e.target.result);
								// row SVGをサニタイズする
								const cleanSvg = DOMPurify.sanitize(e.target.result);
								console.log(cleanSvg);
								// titleTagを付与する
								const parsedSvg = parser.parseFromString(cleanSvg, "image/svg+xml");
								// const titledSvg = parse(cleanSvg, {addTitleTag} );
								console.log(parsedSvg);
								// const titleTag = `<title id="svgLogoTitle">${ title }</title>`;
								// const titledSvg = (
								// 	<ReactSVG
								// 	beforeInjection={(svg) => {
								// 		const title = document.createElementNS(
								// 			'http://www.w3.org/2000/svg',
								// 			'title'
								// 		  )
								// 		  title.innerHTML = 'A title'
								// 		  svg.prepend(title)
								// 	}}
								// 	src={e.target.result}
								// 	/>
								// )
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
