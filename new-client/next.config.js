// const withImages = require('next-images');
// module.exports = withImages({
// 	webpack(config, options) {
// 		return config;
// 	},
// });

// config.module.rules.map((rule) => {
// 	if (rule.test !== undefined && rule.test.source.includes('|svg|')) {
// 		rule.test = new RegExp(rule.test.source.replace('|svg|', '|'));
// 	}
// });

module.exports = {
	webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
		config.module.rules.push({
			test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
			use: {
				loader: 'url-loader',
				options: {
					limit: 100000,
					name: '[name].[ext]',
					esModule: false,
				},
			},
		});
		return config;
	},
};
