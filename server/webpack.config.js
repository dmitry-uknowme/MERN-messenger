const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
	mode: 'development',
	target: 'node',
	externals: [nodeExternals()],
	entry: './src/index.ts',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'index.js',
	},
	devServer: {
		stats: 'errors-only',
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				// exclude: /node_modules/,
				exclude: path.resolve(__dirname, 'node_modules'),
				use: ['ts-loader'],
			},
		],
	},

	resolve: {
		extensions: ['.ts', '.js'],
	},
};
