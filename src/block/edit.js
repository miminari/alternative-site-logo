/**
 * External dependencies
 */
import DOMPurify from 'dompurify';

/**
 * WordPress dependencies
 */
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { FormFileUpload, PanelBody, RangeControl, SandBox } from '@wordpress/components';
import { useEffect } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { useEntityProp, store as coreStore } from '@wordpress/core-data';

/**
 * Internal dependencies
 */
// import useClientWidth from './use-client-width';

import './editor.scss';

export default function Edit({ setAttributes, attributes }) {
	const { svgTag, logoTitle, width, siteUrl } = attributes;
	const [title, setTitle] = useEntityProp('root', 'site', 'title');
	const { url } = useSelect((select) => {
		const { getEntityRecord } = select(coreStore);
		const siteData = getEntityRecord('root', '__unstableBase');
		return {
			url: siteData?.url,
		};
	}, []);
	// const ref = useRef();

	// const clientWidth = useClientWidth(ref, [align]);

	// widthが指定されたらviewBoxを変更する
	const ChangeViewBox = () => {
		if (svgTag) {
			const parser = new window.DOMParser();
			const serialize = new window.XMLSerializer();
			const parsedSvg = parser.parseFromString(svgTag, 'image/svg+xml').firstChild;
			// 初期設定のheightを取得
			const viewBoxValue = parsedSvg.getAttribute('viewBox');
			// console.log(viewBoxValue);
			const viewBoxArr = viewBoxValue.split(' ');
			const defaultWidth = parseInt(viewBoxArr[2]);
			const defaultHeight = parseInt(viewBoxArr[3]);
			const resizeHeight = Math.ceil((defaultHeight / defaultWidth) * parseInt(width));
			// console.log(resizeHeight);
			parsedSvg.setAttribute('width', width);
			parsedSvg.setAttribute('height', resizeHeight);
			// 文字列に戻す
			const changedSvg = serialize.serializeToString(parsedSvg);
			// console.log(changedSvg);
			setAttributes({ svgTag: changedSvg });
		}
	};

	useEffect(() => {
		if (!logoTitle) {
			setAttributes({ logoTitle: title });
		}
		if (width) {
			ChangeViewBox();
		}
	});
	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Settings')}>
					<RangeControl
						label={__('Image width')}
						value={width || ''}
						onChange={(newWidth) => {
							setAttributes({ width: newWidth });
						}}
						min={1}
						max={2000}
					/>
				</PanelBody>
			</InspectorControls>
			<div {...useBlockProps()}>
				{svgTag ? (
					<a href={siteUrl}>
						<SandBox html={svgTag} />
					</a>
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
									// もう一度サニタイズをかけて整形
									const rearrangedSvg = DOMPurify.sanitize(a11ySvg);
									// console.log(rearrangedSvg);
									setAttributes({ svgTag: rearrangedSvg });
									// siteUrlを設定する
									setAttributes({ siteUrl: url });
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
		</>
	);
}
