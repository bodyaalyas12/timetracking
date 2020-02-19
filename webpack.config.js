const path = require('path')
module.exports = {
	// define entry file and output
	entry: './src/index.js',
	output: {
		path: path.resolve('dist'),
		filename: 'main.js'
	},
	// define babel loader
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/
				// resolve: {
				// 	extensions: ['','.js', '.jsx']
				// }
			},
			{
				test: /\.(png|jpe?g|gif|svg)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							limit: 10000
						}
					}
				]
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx', '.es6', '.svg']
	}
}
