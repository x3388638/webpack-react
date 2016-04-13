import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import {Jumbotron, Button, Row, Col} from 'react-bootstrap';

class Index extends React.Component{
	constructor(props) {
		super(props);
	}
	render() {
		var style = {
			border: '1px solid #f3f3f3'
		};
		return (
			<div>
				<Row>
					<Col md={12}>
						<Jumbotron>
							<h1>Hello, world!</h1>
							<p>This is Index component</p>
							<p>
								<Link to="/user"><Button bsStyle="default">/user</Button></Link><br />
								<Link to="/user/101213"><Button bsStyle="default">/user/101213</Button></Link><br />
								<Link to="/user/980510/jonilars"><Button bsStyle="default">/user/980510/jonilars</Button></Link>
							</p>
						</Jumbotron>
					</Col>
				</Row>
				<Row>
					<Col md={4} style={style}>.col-md-4</Col>
					<Col md={6} style={style}>.col-md-6</Col>
					<Col md={2} style={style}>.col-md-2</Col>
				</Row>
			</div>
		);
	}
}

module.exports = Index;