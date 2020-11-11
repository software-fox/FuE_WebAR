const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader' },
      { test: /\.vue$/, use: 'vue-loader' },
      { test: /\.css$/, use: ['vue-style-loader', /*'css-loader'*/ { loader: 'css-loader', options: { esModule: false }}]},
      { test: /\.(jpg|png)$/, use: { loader: 'url-loader'}},
    ]
  },
  devServer: {
    open: true,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'head',
    }),
    new VueLoaderPlugin(),
    new webpack.HotModuleReplacementPlugin(),

    new CopyPlugin({
      patterns: [
        { from: './node_modules/saiba/three.js/', to: './node_modules/saiba/three.js/' },
        { from: './node_modules/saiba/data/', to: './node_modules/saiba/data/' },
        { from: './src/resources/Arla_11_Test.glb', to: './src/resources/Arla_11_Test.glb' },
        
      ],
    }),
  ]
};