const React = require("react");

module.exports = class App extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		console.log("Hello from react lifecycle-componentDidMount()");
	}
	render() {
		console.log("TEST");
		return (
			<div>
				<h1>Welcome To React!!!!!</h1>
			</div>
		);
	}
};
