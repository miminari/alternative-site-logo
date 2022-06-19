/**
 * External dependencies
 */
import DOMPurify from 'dompurify';

/**
 * SanitizeSvg
 *
 * @param  string
 * @return string
 */
export const SanitizeSvg = (string: string): string => {
	const sanitizedSvg = DOMPurify.sanitize(string);
	return sanitizedSvg;
};

/**
 * ParseSvg
 *
 * @param  string
 * @return parsed svg
 */
export const ParseSvg = (string: string): ChildNode | null => {
	const parser = new window.DOMParser();
	const parsedSvg = parser.parseFromString(
		string,
		'image/svg+xml'
	).firstChild;
	return parsedSvg;
};

/**
 * SrializeSvg
 *
 * @param  node
 * @return string
 */
export const SrializeSvg = (node: Node): string => {
	const serialize = new window.XMLSerializer();
	const serializedSvg = serialize.serializeToString(node);
	return serializedSvg;
};
