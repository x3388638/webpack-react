import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory, Redirect} from 'react-router';

import App from './js/app';
import Index from './js/index';
import User from './js/user';
import NoMatch from './js/noMatch';

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Index} />
			<Route path="user" component={User} >
				<Route path=":id" component={User} >
					<Route path=":name" component={User} />
				</Route>
			</Route>
			<Redirect from="*" to="/" />
		</Route>
 	</Router>,
	document.getElementById('app')
);

const routes = {
	path: ''
}
