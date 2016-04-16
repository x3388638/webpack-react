import React from 'react';

import Sidebar from './Sidebar/sidebar';

class SidebarWrap extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			sidebarOpen: false
		};
		this.handleToggleSidebar = this.handleToggleSidebar.bind(this);
	}
	handleToggleSidebar(open) {
		this.setState({
			sidebarOpen: open
		});
	}
	render() {
		return (
			<div className="liveView sidebarWrap">
				<Sidebar isOpen={this.state.sidebarOpen} onToggle={this.handleToggleSidebar}>
					<Sidebar.Item>Sidebar.Item 01</Sidebar.Item>
					<Sidebar.Item>Sidebar.Item 02</Sidebar.Item>
					<Sidebar.Item>Sidebar.Item 03</Sidebar.Item>
				</Sidebar>
				<div className={ `outerWrap ${this.state.sidebarOpen ? 'open' : ''}` } > 
					<h2>outerWrap</h2>
				</div>
			</div>
		);
	}
}

module.exports = SidebarWrap;