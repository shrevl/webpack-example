var path = require('path'),
	HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	devtool: "source-map",
	entry: "./app/app.js",
	output: {
		path: path.join(__dirname, "dist"),
		filename: "[hash].[name].js"
	},
	module: {
		loaders: [
			{
				test: /\.js$/, 
				exclude: /node_modules/,
				loaders: ['ng-annotate', 'babel?presets[]=es2015']
			},
			{
				test: /\.html$/,
				loader: 'raw'
			},
			{
				test: /\.scss$/,
				loaders: ["style", "css?sourceMap", "sass?sourceMap"]
			},
			{ 
				test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
				loader: 'url-loader?limit=10000' 
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({ template: "./assets/html/index.html" })
	]
};