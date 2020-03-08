const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: 'development',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({
            template: path.join(__dirname, '../index.html'),
            filename: 'index.html'
        })
    ],
    devServer: {
        contentBase: './dist',
        hot: true,
    }
}