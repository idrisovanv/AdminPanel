import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

const AccountRow = ({ data }) =>{
    const statuses = ['green', 'orange', 'red'];
    return(
        <Link activeClassName="active" to={'/accounts/' + data.id}>
            <span className={'status ' + statuses[data.status - 1]}/>{data.name}
            <ListGroup className="account-detail">
                <ListGroupItem><span>Email:</span> {data.email}</ListGroupItem>
                <ListGroupItem><span>Дата создания:</span> {data.date}</ListGroupItem>
                <ListGroupItem><span>Название тарифа:</span> {data.tariff}</ListGroupItem>
                <ListGroupItem><span>Срок действия:</span> {data.expired}</ListGroupItem>
                <ListGroupItem><span>Кол-во страниц:</span> {data.pages}</ListGroupItem>
            </ListGroup>
        </Link>
    );
};

AccountRow.propTypes = {
    data: PropTypes.object
};

export default AccountRow;
