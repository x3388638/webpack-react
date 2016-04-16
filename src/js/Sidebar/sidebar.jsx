import React from 'react';

import './style';

class Item extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="sidebar-item">{this.props.children}</div>
		);
	}
}

class Sidebar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: this.props.isOpen
		};
		this.handleOpenSidebar = this.handleOpenSidebar.bind(this);
	}
	componentWillReceiveProps(nextProps) {
		if(nextProps.isOpen != this.props.isOpen) {
			this.setState({
				open: nextProps.isOpen
			})
		}
	}
	handleOpenSidebar() {
		this.props.onToggle(!this.props.isOpen);
	}
	render() {
		return (
			<div id="sidebar" className={this.state.open ? 'open' : ''}>
				<span className="glyphicon glyphicon-menu-hamburger btn-toggleSidebar" aria-hidden="true" onClick={this.handleOpenSidebar}></span>
				<div className="content">
					{this.props.children}
				</div>
			</div>
		);
	}
}

Sidebar.Item = Item;

module.exports = Sidebar;