module.exports = {
	collectCoverageFrom: ["src/**"],
	coverageDirectory: "coverage",
	coveragePathIgnorePatterns: ["index.js"],
	coverageThreshold: {
		global: {
			branches: 100,
			functions: 100,
			lines: 100,
			statements: 100,
		},
	},
	setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
	testEnvironment: "jsdom",
	transform: {
		"^.+\\.(js|jsx)$": "babel-jest",
	},
};
