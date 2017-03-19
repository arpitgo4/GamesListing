import React from 'react';
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory, hashHistory } from 'react-router';

import AppLayout from './App.layout';

import Login from '../components/Login/Login.component';
import Register from '../components/Register/Register.component';

const router = (
	<Router history={browserHistory}>
		<Route path="/" component={AppLayout} >
			<IndexRoute component={Login} />
			<Route path="register" component={Register} />
		</Route>
	</Router>
)

export default router;