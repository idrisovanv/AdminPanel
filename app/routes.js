import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Accounts from './containers/Accounts';
import Settings from './components/Settings';

export default (
	<Route path="/" component={App}>
		<IndexRoute/>
		<Route path="/accounts" component={Accounts} />
		<Route path="/accounts/:accountId" component={Accounts}/>
		<Route path="/accounts/:accountId/:tab" component={Accounts}/>
		<Route path="/settings" component={Settings} />
		<Route path="/settings/:sectionId" component={Settings} />
	</Route>
);
