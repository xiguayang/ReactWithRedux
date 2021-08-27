import React, { useState } from 'react';

const SearchBar = ({ onUserTermSubmit }) => {
	const [term, setTerm] = useState('');
	// const onInputChange = (event) => {
	// 	setTerm({ term: event.target.value });
	// };
	const onFormSubmit = (event) => {
		//prevent default 'enter' refresh
		event.preventDefault();
		//TODO: Make sure we call callback from parent component
		onUserTermSubmit(term);
	};
	return (
		<div className="search-bar ui segment">
			<form onSubmit={onFormSubmit} className="ui form">
				<div className="field">
					<label>Video Search</label>
					{/* <input type="text" value={term} onChange={onInputChange} /> */}
					<input type="text" value={term} onChange={(event) => setTerm(event.target.value)} />
				</div>
			</form>
		</div>
	);
};
export default SearchBar;
