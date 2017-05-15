
export const ActionConcertPlace = {
	onAddConcertPlace: (id) => {
		return {
			type: 'ADD_CONCERT_PLACE',
			payload: id
		}
	},
	onSaveConcertPlace: (concertPlace, id) => {
				const payload = {
					id,
					concertPlace
				};
		return {
			type: 'SAVE_CONCERT_PLACE',
			payload
		}
	},
	onEditConcertPlace: (id) => {
		return {
			type: 'EDIT_CONCERT_PLACE',
			payload: id
		}
	},
	onChooseConcertTime: (id) => {
		return {
			type: 'CHOOSE_CONCERT_TIME',
			payload: id
		}
	},
	onSaveDateTime: (dateTime, id) => {
				const payload = {
					id,
					dateTime
				};
		return {
			type: 'SAVE_CONCERT_TIME',
			payload
		}
	}
}
