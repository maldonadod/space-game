const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, '/src/main'),
  module: {
    loaders: [
      { test: /\.js?$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.s?css$/, loader: 'style-loader!css-loader!sass-loader' }
    ]
  },
  resolve: {
    extensions: ['.js','.scss']
  },
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '/dist',
    filename: 'bundle.js'
  },
  devtool: 'cheap-eval-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
    historyApiFallback: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '/index.html'),
      inject: 'body',
    })
  ]
};
