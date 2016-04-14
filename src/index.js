import React from 'react';
import ReactDOM from 'react-dom';
// import {Router, Route, IndexRoute, hashHistory, Redirect, IndexRedirect} from 'react-router';
import Router from 'react-router/lib/Router';
import Route from 'react-router/lib/Route';
import IndexRoute from 'react-router/lib/IndexRoute';
import hashHistory from 'react-router/lib/hashHistory';
import Redirect from 'react-router/lib/Redirect';
import IndexRedirect from 'react-router/lib/IndexRedirect';

import App from './js/app';
import Index from './js/index';
import User from './js/user';
import NoMatch from './js/noMatch';

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			{ /*<IndexRoute component={Index} />*/ }
			<IndexRedirect to="index" />
			<Route path="index" component={Index} />
			<Route path="user(/:id(/:name))" component={User} />
			<Redirect from="*" to="/" />
		</Route>
 	</Router>,
	document.getElementById('app')
);
