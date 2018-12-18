const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
            exclude: '/node_modules/'
         }
      ]
   },
   plugins: [
      new HtmlWebpackPlugin({
         cache: true,
         template: path.join(__dirname, 'src/index.html')
      })
   ]
};
