
export const ActionArtists = {
	onAddArtist: (artist) => {
		const payload = {
			id: 0,
			name: artist,
			edit: false,
			concertPlace: '',
			editConcertPlace: false,
			concertDate: '00.00.00',
			concertTime: '00:00',
			editDateTime: false
		};
		return {
			type: 'ADD_ARTIST',
			payload
		}
	},
	onEditArtist: (id) => {
		return {
			type: 'EDIT_ARTIST',
			payload: id
		}
	},
	onSaveArtist: (id, editedArtist) => {
		const payload = {
			id,
			editedArtist
		};
		return {
			type: 'SAVE_ARTIST',
			payload
		}
	},
	onDeleteArtist: (id) => {
		return {
			type: 'DELETE_ARTIST',
			payload: id
		}
	}
}
