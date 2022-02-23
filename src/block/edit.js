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
	// Get Site title
	const [title, setTitle] = useEntityProp('root', 'site', 'title');
	// Get Site url
	const { url } = useSelect((select) => {
		const { getEntityRecord } = select(coreStore);
		const siteData = getEntityRecord('root', '__unstableBase');
		return {
			url: siteData?.url,
		};
	}, []);
	// const ref = useRef();
	// const clientWidth = useClientWidth(ref, [align]);

	/**
	 * SanitizeSvg
	 *
	 * @param {*} string
	 * @return {*} string
	 */
	const SanitizeSvg = (string) => {
		const sanitizedSvg = DOMPurify.sanitize(string);
		return sanitizedSvg;
	};

	/**
	 * ParseSvg
	 *
	 * @param {*} string
	 * @return {*} obj
	 */
	const ParseSvg = (string) => {
		const parser = new window.DOMParser();
		const parsedSvg = parser.parseFromString(string, 'image/svg+xml').firstChild;
		return parsedSvg;
	};

	/**
	 * SrializeSvg
	 *
	 * @param {*} obj
	 * @return {*} string
	 */
	const SrializeSvg = (obj) => {
		const serialize = new window.XMLSerializer();
		const serializedSvg = serialize.serializeToString(obj);
		return serializedSvg;
	};

	/**
	 * AddA11yTags
	 *
	 * @param {*} string
	 * @return {*} string
	 */
	const AddA11yTags = (string) => {
		const ariaId = 'altslogoTitle';

		const parsedSvg = ParseSvg(string);
		parsedSvg.setAttribute('role', 'img');
		parsedSvg.setAttribute('aria-describedby', ariaId);
		const newTitle = document.createElement('title');
		newTitle.setAttribute('id', ariaId);
		const newTitleContent = document.createTextNode(logoTitle);
		newTitle.appendChild(newTitleContent);
		parsedSvg.appendChild(newTitle);
		const serializedSvg = SrializeSvg(parsedSvg);
		return serializedSvg;
	};

	/**
	 * ChangeSvgSize
	 */
	const ChangeSvgSize = () => {
		if (svgTag) {
			const parsedSvg = ParseSvg(svgTag);
			// 初期設定のheightを取得
			const viewBoxValue = parsedSvg.getAttribute('viewBox');
			const viewBoxArr = viewBoxValue.split(' ');
			const defaultWidth = parseInt(viewBoxArr[2]);
			const defaultHeight = parseInt(viewBoxArr[3]);
			const resizeHeight = Math.ceil((defaultHeight / defaultWidth) * parseInt(width));
			parsedSvg.setAttribute('width', width);
			parsedSvg.setAttribute('height', resizeHeight);
			const serializedSvg = SrializeSvg(parsedSvg);
			setAttributes({ svgTag: serializedSvg });
		}
	};

	useEffect(() => {
		if (!logoTitle) {
			setAttributes({ logoTitle: title });
		}
		if (width) {
			ChangeSvgSize();
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
								const reader = new window.FileReader();
								reader.onload = (e) => {
									const cleanSvg = SanitizeSvg(e.target.result);
									const a11ySvg = AddA11yTags(cleanSvg);
									// もう一度サニタイズをかけて整形
									const rearrangedSvg = SanitizeSvg(a11ySvg);
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
