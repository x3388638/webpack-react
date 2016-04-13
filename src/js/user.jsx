import React from 'react';
import ReactDOM from 'react-dom';

class User extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			id: null
		}
	}
	componentDidMount() {
		this.setState({
			id: this.props.params.id || null
		});
	}
	componentWillReceiveProps(nextProps) {
		if(nextProps.params.id !== this.props.params.id) {
			this.setState({
				id: nextProps.params.id || null
			});
		}
	}
	render() {
		return (
			<div>
				this is User component, 
				{
					this.state.id ? ` user id is ${this.state.id}` : ' no user id'
				}
			</div>
		);
	}
}

module.exports = User;