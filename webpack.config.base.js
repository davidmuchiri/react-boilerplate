const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoPrefixer = require('autoprefixer');
const postCssColorMod = require('postcss-color-mod-function');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
   entry: './src/index.js',
   output: {
      path: path.join(__dirname, 'dist'),
      filename: 'app.bundle.js'
   },
   module: {
      rules: [
         {
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            exclude: /node_modules/
         },
         {
            test: /\.s?[ac]ss$/,
            exclude: '/node_modules/',
            use: [
               MiniCssExtractPlugin.loader,
               {
                  loader: 'css-loader',
                  options: { url: false, sourceMap: true }
               },
               'postcss-loader',
               {
                  loader: 'sass-loader',
                  options: { sourceMap: true }
               }
            ]
         }
      ]
   },
   resolve: {
      extensions: ['.js', '.jsx']
   },
   plugins: [
      new HtmlWebpackPlugin({
         cache: true,
         template: path.join(__dirname, 'src/index.html')
      }),
      new MiniCssExtractPlugin({ filename: 'styles.css' }),
      new webpack.LoaderOptionsPlugin({
         options: {
            postcss: [autoPrefixer(), postCssColorMod()]
         }
      })
   ]
};
