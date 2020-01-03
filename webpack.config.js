const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const ExtractTextPlugin = require ('extract-text-webpack-plugin');

module.exports = [{
  mode: 'development',
  entry: {
    arch: './src/index.js',
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
	  },
	  {
		test: /\.scss$/,
		use: [
		  {
			loader: 'file-loader',
			options: {
			  name: 'bundle.css',
			},
		  },
		  { loader: 'extract-loader' },
		  { loader: 'css-loader' },
		  {
		    loader: 'sass-loader',
			options: {
			  includePaths: ['./node_modules']
			}
		  },
		  {
		    loader: 'postcss-loader',
			options: {
			  plugins: () => [autoprefixer()]
			}
		  }
		]
	  },
	  // {
		// test: /\.css$/,
		// loader: ExtractTextPlugin.extract({
		//   fallback: 'style-loader',
		//   use: 'css-loader'
		// })
	  // }
	]
  },
  plugins: [
	new CleanWebpackPlugin(),
	new HtmlWebpackPlugin({
	  template: "./public/index.html",
	  title: 'DEV: 2Arch Client'
	})
	// new ExtractTextPlugin('bundle.css')
  ]
}];
