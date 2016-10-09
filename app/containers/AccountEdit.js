import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { editAccount } from '../actions';
import ReactDOM from 'react-dom';
import { Form, FormGroup, Col, FormControl, ControlLabel, Button, Radio } from 'react-bootstrap';

const AccountEdit = ({data, onEdit}) => {
	const form = {status: data.status};
	const statusChange = (e) => {
		form.status = e.target.value;
	};

	return (<Form horizontal>
		<FormGroup>
			<Col componentClass={ControlLabel} sm={2}>
				Имя
			</Col>
			<Col sm={10}>
				<FormControl key={'name' + data.id} ref={node => {form.name = ReactDOM.findDOMNode(node);}} type="text" placeholder="Имя" defaultValue={data.name}/>
			</Col>
		</FormGroup>

		<FormGroup>
			<Col componentClass={ControlLabel} sm={2}>
				Email
			</Col>
			<Col sm={10}>
				<FormControl key={'email' + data.id} ref={node => {form.email = ReactDOM.findDOMNode(node);}} type="email" placeholder="Email"  defaultValue={data.email}/>
			</Col>
		</FormGroup>
		<FormGroup>
			<Col componentClass={ControlLabel} sm={2}>
				Дата создания
			</Col>
			<Col sm={10}>
				<FormControl key={'date' + data.id} ref={node => {form.date = ReactDOM.findDOMNode(node);}} type="text" placeholder="Дата создания"  defaultValue={data.date}/>
			</Col>
		</FormGroup>
		<FormGroup>
			<Col componentClass={ControlLabel} sm={2}>
				Статус
			</Col>
			<Col sm={10}>
				<Radio key={'status1' + data.id} inline name="status" value={1} onChange={e => {statusChange(e);}} defaultChecked={form.status === 1}>1
				</Radio>
				<Radio key={'status2' + data.id} inline name="status" value={2} onChange={e => {statusChange(e);}} defaultChecked={form.status === 2}>2
				</Radio>
				<Radio key={'status3' + data.id} inline name="status" value={3} onChange={e => {statusChange(e);}} defaultChecked={form.status === 3}>3
				</Radio>
			</Col>
		</FormGroup>
		<FormGroup>
			<Col componentClass={ControlLabel} sm={2}>
				Тариф
			</Col>
			<Col sm={10}>
				<FormControl key={'tariff' + data.id} ref={node => {form.tariff = ReactDOM.findDOMNode(node);}} type="text" placeholder="Тариф"  defaultValue={data.tariff}/>
			</Col>
		</FormGroup>
		<FormGroup>
			<Col componentClass={ControlLabel} sm={2}>
				Срок действия
			</Col>
			<Col sm={10}>
				<FormControl key={'expired' + data.id} ref={node => {form.expired = ReactDOM.findDOMNode(node);}} type="text" placeholder="Срок действия"  defaultValue={data.expired}/>
			</Col>
		</FormGroup>
		<FormGroup controlId="formHorizontalPassword">
			<Col componentClass={ControlLabel} sm={2}>
				Кол-во страниц
			</Col>
			<Col sm={10}>
				<FormControl key={'pages' + data.id} ref={node => {form.pages = ReactDOM.findDOMNode(node);}} type="text" placeholder="Кол-во страниц"  defaultValue={data.pages}/>
			</Col>
		</FormGroup>

		<FormGroup>
			<Col smOffset={2} sm={10}>
				<Button type="submit" onClick={(event) => onEdit(event, data.id, form)}>
					Сохранить
				</Button>
			</Col>
		</FormGroup>
	</Form>);
};

AccountEdit.propTypes = {
	data: PropTypes.object,
	onEdit: PropTypes.func
};

const mapStateToProps = (state, ownProps) => {
	return {
		data: state.accounts[ownProps.data.id]
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onEdit: (event, id, form) => {
			event.preventDefault();
			const data = {id: id};
			for( const i in form ) {
				if(form.hasOwnProperty(i)) {
					data[i] = i === 'status' ? form[i] : form[i].value;
				}
			}
			dispatch(editAccount(data));
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AccountEdit);
