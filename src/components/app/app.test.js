import React from "react";
import { render } from "@testing-library/react";
import App from "./app";

const dataTestId = "app";
const required = {};

const setup = (optional) => {
	const props = Object.assign(required, optional);
	const component = render(<App {...props} />);
	const element = component.getByTestId(dataTestId);

	expect(element).toBeInTheDocument();

	return component;
};

describe("<App />", () => {
	it("should render required props", () => {
		const component = setup();

		expect(component).toBeTruthy();
	});

	it("should render optional props", () => {
		const optional = {
			content: "welcome",
		};
		const component = setup(optional);
		const content = component.getByText(optional.content);

		expect(content).toBeInTheDocument();
	});
});
