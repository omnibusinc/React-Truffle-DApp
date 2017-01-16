'use strict';
var webpack = require('webpack');
var env = process.env.ENVIRONMENT || 'dev';

module.exports = {
    entry: './client/js/app.jsx',
    output: {path: __dirname, filename: '/client/js/bundle.js'},
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {compact: true,
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {compact: true,
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.es6'],
        alias: {
          'ie': 'component-ie'
        }
    },
    plugins: env === 'prod' ? [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {warnings: false}})
    ] : [],
    watch: env == 'prod' ? false : true
};
