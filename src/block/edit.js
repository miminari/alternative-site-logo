/**
 * WordPress dependencies
 */
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import {
	FormFileUpload,
	PanelBody,
	RangeControl,
	TextareaControl,
	SandBox,
} from '@wordpress/components';
import { useEffect } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { useEntityProp, store as coreStore } from '@wordpress/core-data';

/**
 * Internal dependencies
 */
import { SanitizeSvg, ParseSvg, SrializeSvg } from '../utils/editSvg';

import './editor.scss';

export default function Edit({ setAttributes, attributes }) {
	const { svgTag, logoTitle, width, siteUrl } = attributes;
	// Get Site title
	const [title] = useEntityProp('root', 'site', 'title');
	// Get Site url
	const { url } = useSelect((select) => {
		const { getEntityRecord } = select(coreStore);
		const siteData = getEntityRecord('root', '__unstableBase');
		return {
			url: siteData?.url,
		};
	}, []);

	/**
	 * hasAriaDescribedby
	 *
	 * @param {*} obj
	 * @return {*} boolean
	 */
	const hasAriaDescribedby = (obj) => {
		const ariaDescribedby = obj.getAttribute('aria-describedby');
		if (ariaDescribedby && ariaDescribedby.length > 0) {
			return true;
		}
		return false;
	};

	/**
	 * hasTitle
	 *
	 * @param {*} obj
	 * @return {*} boolean
	 */
	const hasTitle = (obj) => {
		// Check title tag.
		const titleTag = obj.getElementsByTagName('title');
		if (titleTag.length > 0) {
			setAttributes({ logoTitle: titleTag[0].textContent });
			return true;
		}
		return false;
	};

	/**
	 * updateSvgTitle
	 *
	 * @param {*} string
	 * @param {*} newTitle
	 * @return {*} boolean
	 */
	const updateSvgTitle = (string, newTitle) => {
		const parsedSvg = ParseSvg(string);
		const titleTag = parsedSvg.getElementsByTagName('title');
		if (titleTag.length > 0) {
			titleTag[0].innerText = newTitle;
			const serializedSvg = SrializeSvg(parsedSvg);
			setAttributes({ svgTag: serializedSvg });
			return true;
		}
		return false;
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
		if (!hasAriaDescribedby(parsedSvg)) {
			parsedSvg.setAttribute('aria-describedby', ariaId);
		}
		if (!hasTitle(parsedSvg)) {
			const newTitle = document.createElement('title');
			newTitle.setAttribute('id', ariaId);
			const newTitleContent = document.createTextNode(logoTitle);
			newTitle.appendChild(newTitleContent);
			parsedSvg.appendChild(newTitle);
		}
		const serializedSvg = SrializeSvg(parsedSvg);
		return serializedSvg;
	};

	/**
	 * ChangeSvgSize
	 */
	const ChangeSvgSize = () => {
		if (svgTag) {
			const parsedSvg = ParseSvg(svgTag);
			// Get the default height.
			const viewBoxValue = parsedSvg.getAttribute('viewBox');
			let defaultWidth = parseInt(width);
			let defaultHeight = parseInt(width);
			if (!viewBoxValue) {
				// set up viewBox
				parsedSvg.setAttribute(
					'viewBox',
					`0 0 ${parseInt(width)} ${parseInt(width)}`
				);
			} else {
				const viewBoxArr = viewBoxValue.split(' ');
				defaultWidth = parseInt(viewBoxArr[2]);
				defaultHeight = parseInt(viewBoxArr[3]);
			}
			const resizeHeight = Math.ceil(
				(defaultHeight / defaultWidth) * parseInt(width)
			);
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
	}, []);
	useEffect(() => {
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
					{svgTag && (
						<TextareaControl
							label={__('Title / Alt text (alternative text)')}
							value={logoTitle}
							onChange={(newTitle) => {
								setAttributes({ logoTitle: newTitle });
								updateSvgTitle(svgTag, newTitle);
							}}
							help={
								<>
									{__(
										'The default value is the site title. If this value is changed, only the logo title will change, not the site title.'
									)}
								</>
							}
						/>
					)}
				</PanelBody>
			</InspectorControls>
			<div {...useBlockProps()}>
				{svgTag ? (
					<a href={siteUrl}>
						<SandBox html={svgTag} />
					</a>
				) : (
					<FormFileUpload
						variant="primary"
						accept="image/svg+xml"
						onChange={(event) => {
							if (event.target.files && event.target.files[0]) {
								const file = event.target.files[0];
								const reader = new window.FileReader();
								reader.onload = (e) => {
									const cleanSvg = SanitizeSvg(
										e.target.result
									);
									const a11ySvg = AddA11yTags(cleanSvg);
									// Sanitize and rearranged again.
									const rearrangedSvg = SanitizeSvg(a11ySvg);
									setAttributes({ svgTag: rearrangedSvg });
									// Setup siteUrl.
									setAttributes({ siteUrl: url });
								};
								// Read the contents from the fetched file.
								reader.readAsText(file);
							}
						}}
					>
						{__('Upload')}
					</FormFileUpload>
				)}
			</div>
		</>
	);
}
