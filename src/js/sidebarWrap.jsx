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
			<div className="sidebarWrap">
				<Sidebar isOpen={this.state.sidebarOpen} onToggle={this.handleToggleSidebar}>
					<Sidebar.Item>Sidebar.Item 01</Sidebar.Item>
					<Sidebar.Item>Sidebar.Item 02</Sidebar.Item>
					<Sidebar.Item>Sidebar.Item 03</Sidebar.Item>
				</Sidebar>
				<div className={ `outerWrap ${this.state.sidebarOpen ? 'open' : ''}` } > 
					<h2>Needed</h2>
					<ol>
						<li>
							Import
							<pre><code>
							## import Sidebar from '/PATH/TO/Sidebar/sidebar';
							</code></pre>
						</li>
						<li>
							Structure
							<pre><code>
							## &lt;div className=".sidebarWrap" &gt;<br />
							##     &lt;Sidebar&gt;<br />
							##         &lt;Sidebar.Item&gt;<br />
							##             sidebar item<br />
							##         &lt;/Sidebar.Item&gt;<br />
							##     &lt;/Sidebar&gt;<br />
							##     &lt;div className=".outerWrap" &gt;<br />
							##         OuterWrap<br />
							##     &lt;/div&gt;<br />
							## &lt;/div&gt;
							</code></pre>
						</li>
						<li>
							Handler
							<pre><code>
							## &lt;Sidebar isOpen={"{this.state.sidebarOpen}"} onToggle={"{this.handleToggleSidebar}"}&gt;<br />
							## <br />
							## constructor(props) {"{"}<br />
							##     super(props);<br />
							##     this.state = {"{"}<br />
							##         sidebarOpen: false<br />
							##     };<br />
							##     this.handleToggleSidebar = this.handleToggleSidebar.bind(this);<br />
							## }<br />
							## handleToggleSidebar(open) {"{"}<br />
							##     this.setState({"{"}<br />
							##         sidebarOpen: open<br />
							##     });<br />
							## }
							</code></pre>
						</li>
					</ol>
				</div>
			</div>
		);
	}
}

module.exports = SidebarWrap;