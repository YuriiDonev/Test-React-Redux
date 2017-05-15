import { DefaultArtists } from '../default/default-artists';

export default function artists (state = DefaultArtists, action) {

    if (action.type === 'ADD_ARTIST') {
        const newState = state.slice();
        newState.push(action.payload);
        newState.map((artist, index)=> {
            newState[index].id = index;
         });
        return newState;

    } else if (action.type === 'EDIT_ARTIST') {
		const newState = state.slice();
		for (let i = 0; i < newState.length; i++) {
				newState[i].edit = false;
		}
		newState[action.payload].edit = true;
		return newState;

	} else if (action.type === 'SAVE_ARTIST') {
		const newState = state.slice();
		newState[action.payload.id].name = action.payload.editedArtist;
		newState[action.payload.id].edit = false;
		return newState;

	} else if (action.type === 'DELETE_ARTIST') {
		const newState = state.slice();
		newState.splice(action.payload, 1);
		newState.map((artist, index)=> {
			newState[index].id = index;
		 });
		return newState;

	} else if (action.type === 'ADD_CONCERT_PLACE') {
		const newState = state.slice();
		for (let i = 0; i < newState.length; i++) {
				newState[i].editDateTime = false;
				newState[i].editConcertPlace = false;
		}
		newState[action.payload].editConcertPlace = true;
		return newState;

	} else if (action.type === 'SAVE_CONCERT_PLACE') {
		const newState = state.slice();
		newState[action.payload.id].concertPlace = action.payload.concertPlace;
		newState[action.payload.id].editConcertPlace = false;
		return newState;

	} else if (action.type === 'EDIT_CONCERT_PLACE') {
		const newState = state.slice();
		newState[action.payload].editConcertPlace = true;
		return newState;

	} else if (action.type === 'CHOOSE_CONCERT_TIME') {
		const newState = state.slice();
		for (let i = 0; i < newState.length; i++) {
				newState[i].editConcertPlace = false;
				newState[i].editDateTime = false;
		}
		newState[action.payload].editDateTime = true;
		return newState;

	} else if (action.type === 'SAVE_CONCERT_TIME') {
		const newState = state.slice();
		newState[action.payload.id].concertDate = action.payload.dateTime.slice(0, 10);
		newState[action.payload.id].concertTime = action.payload.dateTime.slice(11);
		newState[action.payload.id].editDateTime = false;
		return newState;
	}
	    return state;
}
