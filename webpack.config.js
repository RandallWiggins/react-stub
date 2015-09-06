var path = require('path');
var webpack = require('webpack');
var bourbon = require('node-bourbon');
var sassPaths = require("node-neat").includePaths.map(function(sassPath) {
  return "includePaths[]=" + sassPath;
}).join("&");


var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: "./app/main.js",
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.styl$/,
            loader: "style!css!stylus"
        }, {
            test: /\.scss/,
            loader: "style!css!sass?"+sassPaths
        }, {
            test: /\.css$/,
            loader: "style!css"
        }, {
            test: /\.jpeg|png$/,
            loader: "url"
        }, {
            test: /\.html$/,
            loader: "html"
        }, {
            test: /\.js$/,
            loader: "babel"
        }]
    },
    plugins: [new HtmlWebpackPlugin()]

/*
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false
        })
    ],
*/
};