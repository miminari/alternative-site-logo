const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const path = require('path');

module.exports = {
	...defaultConfig,
	entry: './src/admin/index.js',
	//アウトプット先
	output: {
		path: path.resolve(__dirname, 'build/admin/'),
		filename: '[name].js',
	},
};
