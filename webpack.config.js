var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: "./app/app.js",
    output: {
        path: "./build",
        filename: "app.js"
    },
    module: {
        loaders: [{
            test: /\.js?$/,
            loader: 'babel',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react']
            }
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract(["css-loader", "sass-loader"])
        }, {
            test: /\.(woff|woff2)$/,
            loader: "url-loader?limit=10000&mimetype=application/font-woff"
        }, {
            test: /\.ttf$/,
            loader: "file-loader"
        }, {
            test: /\.eot$/,
            loader: "file-loader"
        }, {
            test: /\.svg$/,
            loader: "file-loader"
        }]
    },
    plugins: [
        new ExtractTextPlugin("styles.css")
    ]
};
