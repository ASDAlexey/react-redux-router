const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

module.exports = {
    devtool: 'source-map',
    resolve: {
        extensions: ['', '.js', '.styl', '.jade', '.jsx'],
    },
    entry: {
        bundle: [
            'webpack-dev-server/client?http://localhost:8080',
            'webpack/hot/only-dev-server',
            'babel-polyfill',
            './src/index.jsx',
        ],
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist/',
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.ProvidePlugin({
            _: 'lodash',
            classNames: 'classNames',
        }),
        // new CompressionPlugin({
        //     asset: "[path].gz[query]",
        //     algorithm: "gzip",
        //     test: /\.css$|\.js$|\.html\.svg$/,
        //     threshold: 10240,
        //     minRatio: 0.8
        // })
    ],
    postcss: () => [autoprefixer],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                include: path.join(__dirname, 'src'),
                loader: 'react-hot!babel',
                plugins: ['transform-runtime'],
            },
            {
                test: /\.css$/,
                loader: 'style!css?sourceMap',
            },
            {
                test: /\.styl$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'style-loader!css-loader?sourceMap!postcss-loader!stylus?resolve url',
            },
        ],
    },
};
