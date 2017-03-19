import React from 'react';
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory, hashHistory } from 'react-router';

import AppLayout from './App.layout';

const router = (
	<Router history={browserHistory}>
		<Route path="/" component={AppLayout} >
			
		</Route>
	</Router>
)

export default router;