import React, { PropTypes } from 'react';
import { Row, Col, ListGroupItem, ListGroup } from 'react-bootstrap';
import { connect } from 'react-redux';
import { filterAccounts } from '../actions';
import Account from '../components/Account';
import AccountRow from '../components/AccountRow';

const Accounts = ({accounts, filter, onFilter, params}) => {
	let rows = [];
	for (const i in accounts) {
		if(accounts.hasOwnProperty(i)) {
			const p = accounts[i];
			const nameLC = p.name.toLowerCase();
			const filterLC = filter.toLowerCase();

			if (nameLC.indexOf(filterLC) !== -1) {
				rows.push(
					<ListGroupItem  key={p.name}>
						<AccountRow data={p} />
					</ListGroupItem>
				);
			}
		}
	}

	let input;

	return(
			<Row>
				<Col xs={12} md={4}>
					<input className="form-control" placeholder="Имя"
						value={filter}
						ref={node => {input = node;}}
						onChange={() => onFilter(input.value)} />
					<ListGroup className="nav-links account-list">
						{rows}
					</ListGroup>
				</Col>
				<Col xs={12} md={8}>{ params.accountId ? <Account data={accounts[params.accountId]} tab={params.tab}/> : null}</Col>
			</Row>
	);
};

Accounts.propTypes = {
	accounts: PropTypes.object,
	filter: PropTypes.string,
	onFilter: PropTypes.func,
	params: PropTypes.object,
	route: PropTypes.object
};

const mapStateToProps = (state) => {
	return {
		filter: state.filter,
		accounts: state.accounts
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onFilter: filterText => dispatch(filterAccounts(filterText))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Accounts);
