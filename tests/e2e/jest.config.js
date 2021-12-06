const config = require( '@wordpress/scripts/config/jest-e2e.config' );

const jestE2EConfig = {
	...config,
	setupFilesAfterEnv: [
		'<rootDir>/config/bootstrap.js',
		'@wordpress/jest-console',
		'@wordpress/jest-puppeteer-axe',
	],
};

module.exports = jestE2EConfig;