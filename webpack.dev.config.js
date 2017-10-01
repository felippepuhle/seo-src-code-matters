/* eslint-disable */

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dotEnv = require('dotenv-webpack');

const common = require('./webpack.common');

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || '3000';

module.exports = {
  devtool: 'source-map',
  entry: [
    'react-hot-loader/patch',
    `webpack-dev-server/client?http://${HOST}:${PORT}`,
    `webpack/hot/only-dev-server`,
    common.entry,
  ],
  output: Object.assign({}, common.output, {
    filename: 'bundle.js',
  }),

  module: {
    rules: [common.loaders.babel],
  },

  devServer: {
    contentBase: common.paths.build,
    noInfo: true,
    hot: true,
    inline: true,
    historyApiFallback: true,
    port: PORT,
    host: HOST,
    stats: {
      assets: true,
      colors: true,
      version: false,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
    },
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin(common.plugins.html),
    new dotEnv(common.plugins.dotEnv),
    new webpack.NamedModulesPlugin(),
  ],
};
