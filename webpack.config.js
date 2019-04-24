const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// Environment variable that stores the environment that you're currently in.
process.env.NODE_ENV = process.env.NODE_ENV || 'development'; // : Heroku automatically sets this string to 'production'

if (process.env.NODE_ENV === 'test') {
	require('dotenv').config({ path: '.env.test' });
} else if (process.env.NODE_ENV === 'development') {
	require('dotenv').config({ path: '.env.development' });
}

// Exporting a function, webpack configuration types
// Returning as a function gives us access to env 
// babel-polyfill must be the first item in entry array
module.exports = (env) => {
	const isProduction = env === 'production';
	const CSSExtract = new ExtractTextPlugin('styles.css');
	return {
		mode: 'development',
		entry: ['babel-polyfill','./src/app.js'],
		output: {
			path: path.join(__dirname, 'public', 'dist'), 
			// Absolute path on machine where we want to output the webpack file
			filename: 'bundle.js' // Can be anything we'd like, bundle is common
		},
		module: {
			rules: [{
				loader: 'babel-loader',
				test: /\.js$/,
				exclude: /node_modules/,
				query: {
					presets: ['react']
				}
			}, {
				test: /\.s?css$/,
				use: CSSExtract.extract({
					use: [
						{
							loader: 'css-loader',
							options: {
								sourceMap: true
							}
						},
						{
							loader: 'sass-loader',
							options: {
								sourceMap: true
							}
						}
					]
				})
			}]
		},
		plugins: [
			CSSExtract,
			new webpack.DefinePlugin({
				'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
				'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
				'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
				'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
				'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
				'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID)
			  })
		],
		// devtool allows Chrome to identify exactly where the original line of the error lies
		devtool: isProduction ? 'source-map' : 'inline-source-map',
		devServer: {
			contentBase: path.join(__dirname, 'public'),
			historyApiFallback: true, // tells dev-server we are going to be handling routing via client-side code
			publicPath: '/dist/'
		}
	};
};


