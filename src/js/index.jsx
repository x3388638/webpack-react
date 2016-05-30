import React from 'react';
import ReactDOM from 'react-dom';
import Link from 'react-router/lib/Link';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Button from 'react-bootstrap/lib/Button';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

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
								<Link to="/user/980510/jonilars"><Button bsStyle="default">/user/980510/jonilars</Button></Link><br />
								<Link to="/sidebar"><Button bsStyle="default">/sidebar for Sidebar example</Button></Link><br /> 
								<Link to="/errorTest"><Button bsStyle="default">/errorTest for testing the problem about status & props</Button></Link>
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