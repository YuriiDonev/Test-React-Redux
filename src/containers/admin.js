import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {ActionAdmin} from '../actions/actions-admin';
import Artist from './artist';
import ConcertPlace from './concert-place';
import PerformanceRecords from './performance-records';

class Admin extends Component {

	renderComponent () {
		const path = window.location.pathname;
		if (path === '/') {
			return <Artist />
		} else if (path === '/concert-place') {
			return <ConcertPlace />
		} else if (path === '/performance-records') {
			return <PerformanceRecords />
		}
	}

	checkData() {
		const username = this.admin.value;
		const password = this.password.value;

		if (this.props.admin.username !== username && this.props.admin.password !== password) {
			const message = 'Check your username and password please';
			this.props.onChangeMessage(message);
			this.admin.value = '';
			this.password.value = '';
		} else if (this.props.admin.username !== username) {
			const message = 'Check your username please';
			this.props.onChangeMessage(message);
			this.admin.value = '';
			this.password.value = '';
		} else if (this.props.admin.password !== password) {
			const message = 'Check your password please';
			this.props.onChangeMessage(message);
			this.admin.value = '';
			this.password.value = '';
		} else {
			const message = 'Success!';
			this.props.onChangeMessage(message);
		}
	}

	renderForm() {
		if (!this.props.admin.isAdmin) {
			return (
				<div>
					<div>Are you Admin?</div>
				<hr/>
					<div>Log in:</div>
					<input type="text" placeholder="Username..." ref={(input) => this.admin = input} />
					<div>Password:</div>
					<input type="text" placeholder="Password..." ref={(input) => this.password = input} />
					<button onClick={this.checkData.bind(this)}>LogIn</button>
				<hr/>
					<div>{this.props.admin.message}</div>
				</div>
			);
		} else {
			return <div>{this.renderComponent()}</div>;
		}
	}

	render() {
		return (
		<div className="Admin">
			{this.renderForm()}
		</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
	        admin: state.admin
	   };
};

const matchDispatchToProps = dispatch => {
	return bindActionCreators({
		onChangeMessage: ActionAdmin.onChangeMessage
	}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Admin);
