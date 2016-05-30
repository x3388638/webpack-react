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
			<div>
				<div>{JSON.stringify(this.props.a)}</div>
				<div>{this.props.b}</div>
				<div>{this.props.c}</div>
			</div>
		)
	}
}

export default class ErrorTest extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.state = {
			a: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
		}
	}
	handleClick() {
		var newA = this.state.a;
		newA[(new Date()).getTime() % 8] += '@';
		this.setState({
			a: newA
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
				<button onClick={this.handleClick}>random state</button>
				<SomeComponent
					a={this.state.a}
				/>
				<hr />
				<p>Open the browser dev tool and click the button, however, you will find that the state of parent is changed but <code>this.props</code> and <code>nextProps</code> in <code>shouldComponentUpdate()</code> of child are always the same.<br />
				To resolve, <code>JSON.stringify()</code> the object in state of parent.</p>
			</div>
		);
	}
}
