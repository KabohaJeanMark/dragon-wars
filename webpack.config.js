const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    app: ['regenerator-runtime/runtime.js', './src/index.js'],
  },
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'build'),
    clean: true,
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        include: path.resolve(__dirname, 'src/'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: [/\.vert$/, /\.frag$/],
        use: 'raw-loader',
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'index.html'),
          to: path.resolve(__dirname, 'build'),
        },
        {
          from: path.resolve(__dirname, './src/assets'),
          to: path.resolve(__dirname, 'build'),
        },
      ],
    }),
    new webpack.DefinePlugin({
      'typeof WEBGL_RENDERER': JSON.stringify(true),
    }),
  ],
};
