import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import artists from './reducer-artists';
import admin from './reducer-admin';

export default combineReducers({
	admin,
	artists,
	routing: routerReducer
})
