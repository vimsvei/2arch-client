const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: {
    arch: "./src/index.js"
  },
  output: {
	filename: '[name].bundle.js',
	path: path.resolve(__dirname, 'dist')
  },
  devtool: 'inline-source-map',
  devServer: {
	contentBase: './dist',
	port: 51081
  },
  module: {
	rules: [
	  {
		test: /\.js/,
		exclude: /node_modules/,
		use: ["babel-loader"]
	  },
	  {
		test: /\.css$/,
		use: [
		  'style-loader',
		  'css-loader',
		]
	  },
	  {
		test: /\.(png|svg|jpg|gif)$/,
		use: [
		  'file-loader'
		]
	  },
	  {
		test: /\.(woff|woff2|eot|ttf|otf)$/,
		use: [
		  'file-loader'
		]
	  }
	]
  },
  plugins: [
	new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
	  template: "./public/index.html",
	  title: 'DEV: 2Arch Client'
	})
  ]
};
