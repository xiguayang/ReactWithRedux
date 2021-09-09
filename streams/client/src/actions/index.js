import streams from '../APIs/streams';
import history from '../history';
import { SIGN_IN, SIGN_OUT, CREATE_STREAM, FETCH_STREAM, FETCH_STREAMS, DELETE_STREAM, EDIT_STREAM } from './types';
export const signIn = (userId) => {
	return {
		type: SIGN_IN,
		payload: userId,
	};
};
export const signOut = () => {
	return {
		type: SIGN_OUT,
	};
};

// export const createStream = (formValues) => {
// 	return (dispatch) => {};
// };

export const createStream = (formValues) => async (dispatch, getState) => {
	const { userId } = getState().auth;
	const response = await streams.post('/streams', { ...formValues, userId });
	dispatch({ type: CREATE_STREAM, payload: response.data });
	//Do some programmatic navigation to
	//get the user back to the root route
	history.push('/');
};

export const fetchStreams = () => async (dispatch) => {
	const response = await streams.get('/streams');
	dispatch({ type: FETCH_STREAMS, payload: response.data });
};

export const fetchStream = (id) => async (dispatch) => {
	const response = await streams.get(`/streams/${id}`);
	dispatch({ type: FETCH_STREAM, payload: response.data });
};

export const editStream = (id, formValues) => async (dispatch) => {
	const response = await streams.patch(`/streams/${id}`, formValues);
	dispatch({ type: EDIT_STREAM, payload: response.data });
	history.push('/');
};

export const deleteStream = (id) => async (dispatch) => {
	await streams.delete(`/streams/${id}`);
	dispatch({ type: DELETE_STREAM, payload: id });
};

//Sample Code
//Array-based approach
// const streamReducer = (state = [], action) => {
// 	switch (action.type) {
// 		case EDIT_STREAM:
// 			return state.map((stream) => {
// 				if (stream.id === action.payload) {
// 					return action.payload;
// 				} else {
// 					return stream;
// 				}
// 			});
// 		default:
// 			return state;
// 	}
// };

//Object-based approach
// const streamReducer = (state = {}, action) => {
// 	switch (action.type) {
// 		case EDIT_STREAM:
// 			// const newState = { ...state };
// 			// newState[action.payload.id] = action.payload;
// 			// return newState;
// 			//using es25 sytax
// 			return { ...state, [action.payload.id]: action.payload };
// 		default:
// 			return state;
// 	}
// };
