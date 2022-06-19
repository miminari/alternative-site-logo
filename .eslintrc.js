module.exports = {
	extends: [
		'plugin:@wordpress/eslint-plugin/recommended',
		// 'plugin:@typescript-eslint/eslint-recommended',
	],
	//plugins: [ '@typescript-eslint' ],
	//parser: '@typescript-eslint/parser',
	// parser: '@babel/eslint-parser',
	parserOptions: {
		sourceType: 'module',
		requireConfigFile: false,
	},
	rules: {
		'import/no-extraneous-dependencies': 'off',
		'import/no-unresolved': 'off',
		'@wordpress/no-unsafe-wp-apis': 'off',
		'jsdoc/require-param-type': 0,
	},
	overrides: [
		{
			files: [
				'**/tests/**/*.ts',
				'**/tests/**/*.js',
				'**/__tests__/**/*.ts',
				'**/__tests__/**/*.js',
				'**/*.spec.ts',
				'**/*.spec.js',
			],
			extends: ['plugin:@wordpress/eslint-plugin/test-unit'],
			settings: {
				jest: {
					version: 26,
				},
			},
		},
		{
			files: ['tests/e2e/**/*.js', 'tests/e2e/**/*.ts'],
			extends: ['plugin:@wordpress/eslint-plugin/test-e2e'],
			rules: {
				'jest/expect-expect': 'off',
			},
		},
	],
};
