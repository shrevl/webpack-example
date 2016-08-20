var path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: path.join(__dirname, 'app'),
    devtool: "source-map",
    entry: "./js/app.js",
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[hash].[name].js"
    },
    module: {
        loaders: [
            {
                test: /app.*\.js$/, 
                loader: 'ng-annotate'
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
        new HtmlWebpackPlugin({ template: "index.html" })
    ]
};