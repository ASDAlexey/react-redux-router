const webpack = require('webpack');
const WebPackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

new WebPackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
}).listen(8080, 'localhost', (err, result) => {
    if (err) {
        return console.log(err);
    }
    console.log('Listening on localhost:8080');
});