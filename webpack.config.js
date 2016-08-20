var path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: path.join(__dirname, 'app'),
    entry: "./js/app.js",
    output: {
        path: path.join(__dirname, "dist"),
        filename: "main.js"
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loaders: ["style", "css?sourceMap", "sass?sourceMap"]
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: "index.html"
    })]
};