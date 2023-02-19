/* eslint no-console: "off" */
require("@testing-library/jest-dom");

const consoleError = global.console.error;

beforeEach(() => {
	global.console.error = (...args) => {
		const propTypeFailures = [/Failed prop type/, /Warning: Received/];

		if (propTypeFailures.some((p) => p.test(args[0]))) {
			throw new Error(args[0]);
		}

		consoleError.apply(...args);
	};
});
