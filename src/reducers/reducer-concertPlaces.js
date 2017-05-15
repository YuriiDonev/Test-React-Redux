import { DefaultArtists } from '../default/default-artists';

export default function concertPlace (state = DefaultArtists, action) {

	if (action.type === 'ADD_CONCERT_PLACE') {
		console.log('Добавляем место концерта в редюсере');
		const newState = state.slice();
		return newState;

	}
    return state;
}
