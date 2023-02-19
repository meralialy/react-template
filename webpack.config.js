const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
	entry: path.resolve(__dirname, "src/index.js"),

	mode: "production",

	module: {
		rules: [
			{
				test: /\.(js|jsx)$/i,
				use: ["babel-loader"],
				exclude: /node_modules/,
			},
			{
				test: /\.(css|scss|sass)$/i,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, "css-loader"],
			},
		],
	},

	output: {
		path: path.resolve(__dirname, "dist"),
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "src/index.html"),
		}),
		new MiniCssExtractPlugin(),
	],

	resolve: {
		extensions: [".jsx", ".js"],
	},
};
