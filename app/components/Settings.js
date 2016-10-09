import React, { PropTypes } from 'react';
import { Row, Col, ListGroupItem, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router';

const Settings = ({params}) => {
	const sectionContents = {
		section1: 'Содержимое раздела 1',
		section2: 'Содержимое раздела 2',
		section3: 'Содержимое раздела 3'
	};
	return(
		<Row>
			<Col xs={12} md={4}>
				<ListGroup className="nav-links">
					<ListGroupItem  key={'section1'}>
						<Link to={'/settings/section1'}>Раздел1</Link>
					</ListGroupItem>
					<ListGroupItem  key={'section2'}>
						<Link to={'/settings/section2'}>Раздел2</Link>
					</ListGroupItem>
					<ListGroupItem  key={'section3'}>
						<Link to={'/settings/section3'}>Раздел3</Link>
					</ListGroupItem>
				</ListGroup>
			</Col>
			<Col xs={12} md={8}>{ params.sectionId ? sectionContents[params.sectionId] : null}</Col>
		</Row>
	);
};

Settings.propTypes = {
	params: PropTypes.object
};

export default Settings;
