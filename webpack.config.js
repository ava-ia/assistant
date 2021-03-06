const pkg = require('./package');
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: __dirname,

  entry: {
    app: ['./app/index.js'],
  },

  devtool: process.env.WEBPACK_DEVTOOL || 'source-map',

  output: {
    path: path.join(__dirname, '/static/build'),
    filename: pkg.name + '.[name].js',
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.json'],
    alias: {
      rx$: path.join(__dirname, './node_modules/falcor/node_modules/rx/dist/rx.js')
    },
  },

  module: {
    loaders: [
      {
        test: /(\.js|\.jsx)$/,
        exclude: /(node_modules)/,
        loaders: ['babel'],
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css?modules!postcss'),
      },
    ],
  },

  plugins: [
    new ExtractTextPlugin(pkg.name + '.[name].css', { allChunks: true }),
  ],

  postcss(webpackInstance) {
    return [
      require('postcss-import')({
        addDependencyTo: webpackInstance,
        root: __dirname,
        path: []
      }),
      require('postcss-mixins')(),
      require('postcss-each')(),
      require('postcss-cssnext')(),
      require('postcss-reporter')({ clearMessages: true }),
    ];
  },

  watch: true,
};
