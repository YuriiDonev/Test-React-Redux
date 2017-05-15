import { DefaultAdmin } from '../default/default-admin';

export default function admin (state = DefaultAdmin, action) {

    if (action.type === 'CHANGE_MESSAGE') {
		if (action.payload === 'Success!') {
			const newState = {};
			for (let key in state) {
			  newState[key] = state[key];
			}
			newState.message = action.payload;
			newState.isAdmin = true;
			return newState;
		} else {
			const newState = {};
			for (let key in state) {
			  newState[key] = state[key];
			}
			newState.message = action.payload;
			newState.isAdmin = false;
			return newState;
		}
	}
	    return state;
}
