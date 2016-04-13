import React from 'react'; 
import ReactDOM from 'react-dom'; 

class App extends React.Component{
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<nav>this is nav</nav>
				{this.props.children}
			</div>
		);
	}
}

module.exports = App;