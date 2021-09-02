import axios from 'axios';

export default (state = [], action) => {
	// //bad!
	// return document.querySelector('input');
	// //bad
	// return axios.get('/post');
	// //good
	// return state + action;
	// //All bad mutation for state
	// state[0] = 'Sam';
	// state.pop();
	// state.push();
	// state.name = 'Same';
	// state.age = 30;
	// if (action.type === 'FETCH_POSTS') {
	// 	return action.payload;
	// }
	// return state;
	switch (action.type) {
		case 'FETCH_POSTS':
			return action.payload;
		default:
			return state;
	}
};
