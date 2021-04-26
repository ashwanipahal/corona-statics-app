const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');

// this configuration is for just local webpack server

module.exports = merge(common, {
    mode: 'development',
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "public"),
        publicPath: '/'
      },
    devtool: 'inline-source-map',
    devServer: {
        historyApiFallback: true,
        contentBase: path.join(__dirname, 'public'),
    }
})

