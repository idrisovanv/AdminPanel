import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import {  Grid, Row, Col, ListGroup, ListGroupItem, PageHeader} from 'react-bootstrap';

const App = ({children}) =>
    <Grid>
        <PageHeader>Панель администрирования</PageHeader>
        <Row className="show-grid">
            <Col xs={2}>
                <ListGroup className="nav-links">
                    <ListGroupItem><Link to="/accounts" activeClassName="active">Аккаунты</Link></ListGroupItem>
                    <ListGroupItem><Link to="/settings" activeClassName="active">Настройки</Link></ListGroupItem>
                </ListGroup>
            </Col>
            <Col xs={10}> { children }</Col>
        </Row>
    </Grid>;

App.propTypes = {
    children: PropTypes.object
};

export default App;
