export const ActionAdmin = {

	onChangeMessage: (message) => {
		return {
			type: 'CHANGE_MESSAGE',
			payload: message
		}
	}
}
