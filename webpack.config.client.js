const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'inline-source-map',
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:3001',
        'webpack/hot/only-dev-server',
        './client/index'
    ],
    target: 'web',
    module: {
        rules: [{
            test: /\.js?$/,
            use: 'babel-loader',
            include: [
                path.join(__dirname, 'client'),
                path.join(__dirname, 'common')
            ]
        }, {
            test: /\.css/,
            loader: ExtractTextPlugin.extract("css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]")
        }]
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            "process.env": {
                "BUILD_TARGET": JSON.stringify("client")
            }
        }),
        new ExtractTextPlugin("styles.css")
    ],
    devServer: {
        host: 'localhost',
        port: 3001,
        historyApiFallback: true,
        hot: true
    },
    output: {
        path: path.join(__dirname, '.build'),
        publicPath: 'http://localhost:3001/',
        filename: 'client.js'
    }
};