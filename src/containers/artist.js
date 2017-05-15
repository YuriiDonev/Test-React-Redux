import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {ActionArtists} from '../actions/actions-artists';
import Header from '../components/header';

class Artist extends Component {

	addArtist () {
		if (this.newArtist.value === '') {
			return;
		}
		const newArtist = this.newArtist.value;
		this.props.onAddArtist(newArtist);
		this.newArtist.value = '';
	}
	editArtist(event) {
		const id = +event.target.dataset.id;
		console.log('Редактируем артиста: ', id);
		this.props.onEditArtist(id);
	}
	deleteArtist(event) {
		const id = +event.target.dataset.id;
		this.props.onDeleteArtist(id);
	}
	saveArtist(id) {
		if (this.changes.value === '') {
			return;
		}
		const editedArtist = this.changes.value;
		this.props.onSaveArtist(id, editedArtist);
		this.changes.value = '';
	}
	renderArtists(artist) {
		if (artist.edit === true) {
			return ( <div>
					<input type="text" placeholder={artist.name} ref={(input) => this.changes = input} />
					<button onClick={this.saveArtist.bind(this, artist.id)}>Save</button>
					</div>
					);
			} else {
			return ( <div>{artist.id+1}. {artist.name}</div> );
		}
	}

	render() {
		return (
		<div className="Artist">
			<Header />
		<div>
			Add or edit artists:
			<hr />
			<input type="text" placeholder="Enter artist name..." ref={(input) => this.newArtist = input} />
			<button onClick={this.addArtist.bind(this)}>Add artist</button>
			{this.props.artists.map((artist, index) => <div key={index}>{this.renderArtists(artist)}
				<button data-id={index} onClick={this.editArtist.bind(this)}>Edit</button>
				<button data-id={index} onClick={this.deleteArtist.bind(this)}>Delete</button>
			</div>)}
		</div>
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
		onAddArtist: ActionArtists.onAddArtist,
		onDeleteArtist: ActionArtists.onDeleteArtist,
		onEditArtist: ActionArtists.onEditArtist,
		onSaveArtist: ActionArtists.onSaveArtist
	}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Artist);
