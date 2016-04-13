import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';

class Index extends React.Component{
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				this is Index component<br />
				<Link to="/user">/user/</Link><br />
				<Link to="/user/jonilars">/user/jonilars</Link>
			</div>
		);
	}
}

module.exports = Index;