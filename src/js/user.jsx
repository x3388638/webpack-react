import React from 'react';
import ReactDOM from 'react-dom';

class User extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			id: null, 
			name: null
		}
	}
	componentDidMount() {
		this.setState({
			id: this.props.params.id || null, 
			name: this.props.params.name || null
		});
	}
	componentWillReceiveProps(nextProps) {
		if(nextProps.params.id !== this.props.params.id || 
			nextProps.params.name !== this.props.params.name) {
			this.setState({
				id: nextProps.params.id || null, 
				name: nextProps.params.name || null
			});
		}
	}
	render() {
		console.log(this.props.params);
		return (
			<div>
				this is User component, <br />
				{ this.state.id ? ` user id is ${this.state.id}` : ' no user id' }, <br />
				{ this.state.name ? ` user name is ${this.state.name}` : ' no user name'}
			</div>
		);
	}
}

module.exports = User;