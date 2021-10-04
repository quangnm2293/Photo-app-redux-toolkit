const { createSlice } = require('@reduxjs/toolkit');

const photo = createSlice({
	name: 'photo',
	initialState: [],
	reducers: {
		addPhoto: (state, action) => {
			state.push(action.payload);
		},
		removePhoto: (state, action) => {
			const index = state.findIndex(photo => photo.photo === action.payload);
			state.splice(index, 1);
		},
		hydrate: (state, action) => {
			// do not do state = action.payload it will not update the store
			return action.payload.photos;
		},
		updatePhoto: (state, action) => {
			const index = state.findIndex(photo => photo.id === Number(action.payload.id));
			if (index >= 0) state[index] = action.payload;
		},
	},
});

const { actions, reducer } = photo;
export const { addPhoto, removePhoto, loadFromStorage, updatePhoto } = actions;

export default reducer;
