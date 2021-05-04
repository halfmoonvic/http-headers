const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/app.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
  },
  devServer: {
    contentBase: './dist',
    hot: true,
    open: false,
    proxy: {
      '/proxy/native': {
        target: 'http://127.0.0.1:3000',
        pathRewrite: { '^/proxy/native': '' },
        changeOrigin: true,
      },

      '/proxy/express': {
        target: 'http://127.0.0.1:3001',
        pathRewrite: { '^/proxy/express': '' },
        changeOrigin: true,
      },

      '/proxy/github': {
        target: 'https://api.github.com',
        pathRewrite: { '^/proxy/github': '' },
        changeOrigin: true,
      },
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [['@babel/preset-env', { targets: 'defaults' }]],
            },
          },
          {
            loader: 'eslint-loader',
          },
        ],
      },
    ],
  },
};
