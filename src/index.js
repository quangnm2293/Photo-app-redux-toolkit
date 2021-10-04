import store from 'app/store';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';

// const GetTodosFromLocalStorage = () => {
// 	try {
// 		const persistedState = localStorage.getItem('reduxState');
// 		console.log(store);
// 		if (persistedState) store.dispatch(hydrate(JSON.parse(persistedState)));
// 	} catch (e) {
// 		console.log(e);
// 	}
// };
// GetTodosFromLocalStorage();

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
