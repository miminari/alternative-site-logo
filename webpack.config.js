const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
const path = require('path');

module.exports = {
	...defaultConfig,
	entry: './src/block/index.js',
    //アウトプット先
	output: {
		path: path.resolve(__dirname, 'build/block/'),
		filename: '[name].js',
	},
}