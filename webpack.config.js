const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './index.html',
  filename: 'index.html',
  inject: 'body',
});

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve('./dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [{
      include: [path.resolve(__dirname, './src')],
      test: /\.(jsx|js)$/,
      use: [{ loader: 'babel-loader' }],
    }, {
      include: [path.resolve(__dirname, './src')],
      test: /\.(css|sass|scss)$/,
      use: [
        { loader: 'style-loader' },
        { loader: 'css-loader',
          options: {
            importLoaders: 1,
            localIdentName: '[name]__[local]___[hash:base64:5]',
            modules: true,
            sourceMap: true,
          },
        },
        { loader: 'sass-loader' }],
    }],
  },

  plugins: [HtmlWebpackPluginConfig],
};
