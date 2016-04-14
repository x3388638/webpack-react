import React from 'react'; 
import ReactDOM from 'react-dom'; 
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import Grid from 'react-bootstrap/lib/Grid';

class App extends React.Component{
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Grid>
				<Navbar>
					<Navbar.Header>
						<Navbar.Brand>
							<a href="./">React-Bootstrap</a>
						</Navbar.Brand>
					</Navbar.Header>
					<Nav>
						<NavItem eventKey={1} href="#">Link</NavItem>
						<NavItem eventKey={2} href="#">Link</NavItem>
						<NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
							<MenuItem eventKey={3.1}>Action</MenuItem>
							<MenuItem eventKey={3.2}>Another action</MenuItem>
							<MenuItem eventKey={3.3}>Something else here</MenuItem>
							<MenuItem divider />
							<MenuItem eventKey={3.3}>Separated link</MenuItem>
						</NavDropdown>
					</Nav>
				</Navbar>
				{this.props.children}
			</Grid>
		);
	}
}

module.exports = App;