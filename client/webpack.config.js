var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'eval',
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js|.jsx?$/,
                loaders: ['react-hot', 'babel'],
                exclude: /(node_modules|bower_components)/,
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192' ,
                exclude: /(node_modules|bower_components|path.join(__dirname, 'src'))/,
                include: path.join(__dirname, 'resources')
            },
            {
                test: /\.css$/,
                loader: 'style!css?modules',
                include: [
                    /flexboxgrid/,
                    path.join(__dirname, 'src')
                ]
            },
            {
                test: /\.less$/,
                loader: "style!css!less",
                include: path.join(__dirname, 'src')
            }
        ]
    }
};