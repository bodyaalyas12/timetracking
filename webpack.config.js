const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

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
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Time tracker',
			favicon: './static/baseline_alarm_black_18dp.png'
		})
	]
}
