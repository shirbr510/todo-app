var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.js');

var port = 3000;
var hostname = 'localhost';

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true
}).listen(port, hostname, function (err, result) {
    if (err) {
        return console.log(err);
    }

    console.log('Listening at http://' + hostname + ':' + port + '/');
});