module.exports = {
	env: {
		browser: true,
		es2022: true,
		jest: true,
		node: true,
	},
	extends: ["eslint:recommended", "plugin:react/recommended", "plugin:jest/recommended"],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["react", "jest"],
	rules: {
		"no-console": ["error"],
		semi: ["error", "always"],
		quotes: ["error", "double"],
	},
	settings: {
		react: {
			version: "detect",
		},
	},
};
