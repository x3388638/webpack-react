import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import App from './js/app';
import Index from './js/index';
import User from './js/user';

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Index} />
			<Route path="user" component={User} />
			<Route path="user/:id" component={User} />
		</Route>
	</Router>,
	document.getElementById('app')
);
