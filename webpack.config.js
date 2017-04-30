var path = require('path');
var src = './src';
var dist = './dist';
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, src),
  entry: {
	  frontend: './frontend/js/entry.js',
	  backend: './backend/app.js'
  },
  output: {
	path: path.resolve(__dirname, dist),
    filename: '[name].bundle.js'
  },
  module: {
	loaders: [{
		test: /\.js$/,
		loader: 'babel-loader',
		include: [
			path.resolve(__dirname, src + "/frontend"),
			path.resolve(__dirname, src + "/modules")
		],
		exclude: [
			path.resolve(__dirname, src + "/backend")
		],
		query: {
			presets: ['es2015']
		}
	}]
  },
  plugins: [
	  new CopyWebpackPlugin([{
		from: path.resolve(__dirname, src + '/frontend/html'),
		to: path.resolve(__dirname, dist + '/static/html')
	  }])
  ]
}
