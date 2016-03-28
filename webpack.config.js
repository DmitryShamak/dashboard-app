//var webpack = require("webpack");
//
//module.exports = {
//    entry: [
//        'webpack-hot-middleware/client',
//        "./app/app.js"
//    ],
//    output: {
//        path: "./build",
//        filename: "app.js"
//    },
//    plugins: [
//        new webpack.optimize.OccurenceOrderPlugin()
//    ],
//    module: {
//        loaders: [{
//            test: /\.js?$/,
//            loader: 'babel',
//            exclude: /node_modules/,
//            query: {
//                presets: ['es2015', 'react']
//            }
//        }]
//    }
//};

var path = require('path');
var webpack = require('webpack');

module.exports = {
    //devtool: 'cheap-module-eval-source-map',
    entry: [
        'webpack-hot-middleware/client',
        './app/app.js'
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'app.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: [ 'babel?presets[]=react,presets[]=es2015,presets[]=react-hmre' ],
                exclude: /node_modules/,
                include: __dirname
            },
            {
                test: /\.json$/,
                loaders: [ 'json' ],
                exclude: /node_modules/,
                include: __dirname
            }
        ]
    }
};