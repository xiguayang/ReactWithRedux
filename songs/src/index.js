import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import reducers from './reducers';

ReactDOM.render(
	//create a Redux store and pass it as props in Provider
	//componnets can access the Redux store through Provdier tag
	<Provider store={createStore(reducers)}>
		<App />
	</Provider>,
	document.querySelector('#root')
);
