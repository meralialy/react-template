import React from "react";
import PropTypes from "prop-types";

const App = ({ content }) => {
	return <div data-testid="app">{content}</div>;
};

App.propTypes = {
	content: PropTypes.string,
};

export default App;
