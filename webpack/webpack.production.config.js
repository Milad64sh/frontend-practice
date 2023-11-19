const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
import React from 'react';

module.exports = {
  entry: {
    'hello-world': './src/index.js',
    'image-page': './src/img.js',
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '',
  },
  mode: 'production',
  optimization: {
    splitChunks: {
      chunk: 'all',
      minSize: 3000,
    },
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 3 * 1024,
          },
        },
      },
      {
        test: /\.txt/,
        type: 'asset/source',
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env'],
            plugins: ['@babel/plugin-proposal-class-properties'],
          },
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    new CleanWebpackPlugin(),

    // Use to change html file, because after creating new hashed files in dist folder the reference to those files should be changed in html file
    new HtmlWebpackPlugin({
      filename: 'hello-world.html',
      chunks: ['hello-world'],
      title: 'Hello World',
      template: 'src/page-template.html',
      description: 'hello world',
      minify: false,
    }),
    new HtmlWebpackPlugin({
      filename: 'image-page.html',
      chunks: ['image-page'],
      title: 'Image Page',
      template: 'src/page-template.html',
      description: 'Image page',
      minify: false,
    }),
  ],
};
