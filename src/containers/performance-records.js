import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {Action} from '../actions/actions-artists';
import Header from '../components/header';

class PerformanceRecords extends Component {

	render() {
		return (
		<div className="PerformanceRecords">
			<Header />
			Rerformance records - displayed artists names, concert places, concert dates and time:
			<hr/>
			{this.props.artists.map((artist, index) => <div key={index}>
			Artist: {artist.id+1}. {artist.name} <br/>
			Concert place: {artist.concertPlace} <br/>
			Concert date: {artist.concertDate} <br/>
			Concert time: {artist.concertTime}
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

export default connect(mapStateToProps)(PerformanceRecords);
