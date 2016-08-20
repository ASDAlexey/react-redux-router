const webpack = require('webpack');
const WebPackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

new WebPackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    watchOptions: {
        poll: true
    },
}).listen(8080, '0.0.0.0', (err) => {
    msg = err ? err : 'Listening on localhost:8080';
    console.log(msg);
});