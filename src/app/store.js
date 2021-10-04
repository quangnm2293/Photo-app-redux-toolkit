import { configureStore } from '@reduxjs/toolkit';
import photoSlice from 'features/Photo/photoSlice';

const store = configureStore({
	reducer: {
		photos: photoSlice,
	},
});

// store.subscribe(() => {
// 	localStorage.setItem('reduxState', JSON.stringify(store.getState()));
// });

export default store;
