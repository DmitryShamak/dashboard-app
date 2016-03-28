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
        }]
    }
};