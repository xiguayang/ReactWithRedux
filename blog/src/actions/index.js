import jsonPlaceholder from '../apis/jsonPlaceholder';
import _ from 'lodash';

export const fetchPosts = () => async (dispatch) => {
	const response = await jsonPlaceholder.get('/posts');
	dispatch({
		type: 'FETCH_POSTS',
		payload: response.data,
	});
};
export const fetchUser = (id) => async (dispatch) => {
	const response = await jsonPlaceholder.get(`/users/${id}`);
	dispatch({
		type: 'FETCH_USER',
		payload: response.data,
	});
};
//call action creator inside action creator, must use dispatch too
export const fetchPostAndUsers = () => async (dispatch, getState) => {
	//use await to get all posts before next execution
	await dispatch(fetchPosts());
	//use getState() to get data from ReduceStore
	//use _.map to get all userId from the data
	//use _.uniq to return all differen unique userIds
	// const userIds = _.uniq(_.map(getState().posts, 'userId'));
	// //for each unique userId call fetchUser
	// userIds.forEach((id) => dispatch(fetchUser(id)));

	_.chain(getState().posts)
		.map('userId') //ignore the first argument for the return data
		.uniq()
		.forEach((id) => dispatch(fetchUser(id)))
		.value(); //like execute _.chain
};

//Method 1:
// export const fetchUser = (id) => (dispatch) => _fetchUser(id, dispatch);
// //a helper function to do memoize
// const _fetchUser = _.memoize(async (id, dispatch) => {
// 	const response = await jsonPlaceholder.get(`/users/${id}`);
// 	dispatch({
// 		type: 'FETCH_USER',
// 		payload: response.data,
// 	});
// });
