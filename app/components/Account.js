import React, { PropTypes } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { browserHistory } from 'react-router';
import AccountEdit from '../containers/AccountEdit';

const Account = ({data, tab}) => {
	const tabs = { 'pages': 2, 'domens': 3, 'applications': 4};
	const tabIds = {1: '', 2: 'pages', 3: 'domens', 4: 'applications'};

	let currentTab = tab ? tabs[tab] : 1;

	const onTabSelect = (key) => {
		let path = '/accounts/' + data.id;
		if (tabIds[key]) path += '/' + tabIds[key];
		browserHistory.push(path);
	};

	return (<Tabs defaultActiveKey={currentTab} id="uncontrolled-tab-example" onSelect={(key) => onTabSelect(key)} >
		<Tab eventKey={1} title="Аккаунт"><AccountEdit data={data}/></Tab>
		<Tab eventKey={2} title="Страницы">Список страниц</Tab>
		<Tab eventKey={3} title="Домены">Список доменов</Tab>
		<Tab eventKey={4} title="Заявки">Список заявок</Tab>
	</Tabs>);
};

Account.propTypes = {
	data: PropTypes.object,
	tab: PropTypes.string
};

export default Account;

