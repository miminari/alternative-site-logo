const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const path = require('path');

module.exports = {
	...defaultConfig,
	entry: {
		index: './src/block/index.js',
	},
	//アウトプット先
	output: {
		...defaultConfig.output,
		path: path.resolve(__dirname, 'build/block/'),
	},
};
