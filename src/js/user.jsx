import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import {Row, Col, Breadcrumb} from 'react-bootstrap';

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
				<Row>
					<Col md={12}>
						<Breadcrumb>
							<Breadcrumb.Item active>
								<Link to="/">Home</Link>
							</Breadcrumb.Item>
							<Breadcrumb.Item active>
								{ this.state.id ? <Link to="/user">User</Link> : "User" }
							</Breadcrumb.Item>
							{ this.state.id ? (
								<Breadcrumb.Item active> 
									{ this.state.name ? (<Link to={`/user/${this.state.id}`}>{this.state.id}</Link>) : this.state.id } 
								</Breadcrumb.Item>) : null 
							}
							{ this.state.name ? (<Breadcrumb.Item active> {this.state.name} </Breadcrumb.Item>) : null }
						</Breadcrumb>
						<h2>This is User component</h2>
					</Col>
				</Row>
				<Row>
					<Col md={12}>
						<ul>
							<li>User ID: {this.state.id || "UNDEFINED"}</li>
							<li>User name: {this.state.name || "UNDEFINED"}</li>
						</ul>
					</Col>
				</Row>
			</div>
		);
	}
}

module.exports = User;