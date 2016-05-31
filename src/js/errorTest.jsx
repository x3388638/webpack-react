import React from 'react';

class SomeComponent extends React.Component {
	constructor(props) {
		super(props);
	}
	shouldComponentUpdate(nextProps, nextState) {
		if(JSON.stringify(nextProps) != JSON.stringify(this.props) || JSON.stringify(nextState) != JSON.stringify(this.state)) {
			console.log('update');
		} else {
			console.log('this.props.a');
			console.log(this.props.a);

			console.log('nextProps.a');
			console.log(nextProps.a);

			console.log('no update !!!! ');
		}
		return (
			JSON.stringify(nextProps) != JSON.stringify(this.props) ||
			JSON.stringify(nextState) != JSON.stringify(this.state)
		);
	}
	render() {
		return (
			<div>{JSON.stringify(this.props.a)}</div>
		)
	}
}

export default class ErrorTest extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick1 = this.handleClick1.bind(this);
		this.handleClick2 = this.handleClick2.bind(this);
		this.state = {
			a: ['a']
		}
	}

	handleClick1() {
		var newA = this.state.a;
		newA.push('@');
		this.setState({
			a: newA
		});

		console.log('== new state setted ==');
		console.log(JSON.stringify({
			a: this.state.a
		}));
		console.log('== new state setted ==');
	}

	handleClick2() {
		this.setState({
			a: [...this.state.a, '@']
		});

		console.log('== new state setted ==');
		console.log(JSON.stringify({
			a: this.state.a
		}));
		console.log('== new state setted ==');
	}

	render() {
		return (
			<div>
				<button onClick={this.handleClick1}>Button 1</button>&nbsp;
				<button onClick={this.handleClick2}>Button 2</button>
				<SomeComponent
					a={this.state.a}
				/>
				<hr />
				<p>Open the browser dev tool and click the Button 1, however, you will find that the state of parent is changed but <code>this.props</code> and <code>nextProps</code> in <code>shouldComponentUpdate()</code> of child are always the same.<br />
				To resolve it, you should ensure that <code>state</code> is immutable. As a result, it will work correctly like clicking the Button 2.</p>
				<h3>The different about clicking the two buttons</h3>
				<h4>Button 1</h4>
				<pre><code>{`var newA = this.state.a;\nnewA.push('@');\nthis.setState({\n    a: newA\n});`}</code></pre>
				<h4>Button 2</h4>
				<pre><code>{`this.setState({\n    a: [...this.state.a, '@']\n});`}</code></pre>
			</div>
		);
	}
}
