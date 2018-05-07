const webpack = require('webpack');
const path = require('path')
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
    // entry:  __dirname + '/js/index.jsx',
    // output: {
    //     path: path.resolve(__dirname, 'dist'),
    //     filename: 'bundle.js',
    // },
    // resolve: {
    //     extensions: [".js", ".jsx", ".css"]
    // },

    module: {
        rules: [
            {
              test: /\.jsx?/,
              exclude: /node_modules/,
              use: 'raw-loader'
            },
            // {
            //     test: /\.css$/,
            //     use: ExtractTextPlugin.extract({
            //         fallback: 'style-loader',
            //         use: 'css-loader',
            //     })
            // },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: 'file-loader'
            }
        ]
    },
    plugins: [
      new webpack.DefinePlugin({
        'CANVAS_RENDERER': JSON.stringify(true),
        'WEBGL_RENDERER': JSON.stringify(true)
      })    ]
};

module.exports = config;
