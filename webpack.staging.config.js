const { merge } = require("webpack-merge");
const production = require("./webpack.config");

module.exports = merge(production, {
	devtool: "cheap-module-eval-source-map",

	mode: "development",
});
