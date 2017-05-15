import React, { Component } from 'react';
import { connect } from 'react-redux';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import {bindActionCreators} from 'redux';
import {ActionConcertPlace} from '../actions/actions-concertPlaces';
import Header from '../components/header';

class ConcertPlace extends Component {

	addConcertPlace (id) {
		this.props.onAddConcertPlace(id);
	}
	saveConcertPlace (event) {
		const id = +event.target.dataset.id;
		const concertPlace = this.concertPlace.value;
		this.props.onSaveConcertPlace(concertPlace, id);
		this.concertPlace.value = '';
	}
	editConcertPlace (id) {
		console.log('Редактируем концерт плейс', id);
		this.props.onEditConcertPlace(id);
	}
	chooseConcertTime (id) {
		this.props.onChooseConcertTime(id);
	}
	saveDateTime (event) {
		const current = event.target;
		const id = +event.target.dataset.id;
		if (current.tagName !== 'BUTTON') {
			return;
		} else {
			const dateTime = document.getElementsByTagName('INPUT')[0].value;
			if (dateTime === '') {
				return;
			} else {
				this.props.onSaveDateTime(dateTime, id);
			}
		}
	}
	renderCalendar(artist){
		if (artist.editDateTime === true) {
			return ( <div onClick={this.saveDateTime.bind(this)}>
						<Datetime locale="ru"/>
						<button data-id={artist.id}>Save</button>
					</div>
					);
			} else {
			return ( <div>
					<div>Concert date: {this.props.artists[artist.id].concertDate}</div>
					<div>Concert time: {this.props.artists[artist.id].concertTime}</div>
					</div> );
		}
	}
	renderConcertPlace(artist){
		if (artist.editConcertPlace) {
			return ( <div>
						<input type="text" placeholder={artist.concertPlace} ref={(input) => this.concertPlace = input} />
						<button data-id={artist.id} onClick={this.saveConcertPlace.bind(this)}>Save</button>
					</div>
					);
			} else {
				if (artist.concertPlace === '') {
					return (
						<div>
						<button onClick={this.addConcertPlace.bind(this, artist.id)}>Add concert place</button>
						</div>
					);
				} else {
					return (
						<div>
						Concert place: {this.props.artists[artist.id].concertPlace}
						<br/>
						<button onClick={this.editConcertPlace.bind(this, artist.id)}>Edit concert place</button>
						</div>
					);
				}
		}
	}

	render() {
		return (
		<div className="ConcertPlace">
			<Header />
			Add or edit concert place, date and time:
			<hr />
			{this.props.artists.map((artist, index) => <div key={index}>{artist.id+1}. {artist.name}
			{this.renderConcertPlace(artist)}
			{this.renderCalendar(artist)}
			<button onClick={this.chooseConcertTime.bind(this, artist.id)}>Edit concert time</button>
			<hr />
			</div>)}
		</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
	        artists: state.artists
	   };
};

const matchDispatchToProps = dispatch => {
	return bindActionCreators({
		onAddConcertPlace: ActionConcertPlace.onAddConcertPlace,
		onSaveConcertPlace: ActionConcertPlace.onSaveConcertPlace,
		onEditConcertPlace: ActionConcertPlace.onEditConcertPlace,
		onChooseConcertTime: ActionConcertPlace.onChooseConcertTime,
		onSaveDateTime: ActionConcertPlace.onSaveDateTime
	}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(ConcertPlace);
