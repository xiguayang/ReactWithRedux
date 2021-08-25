import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Search = () => {
	const [term, setTerm] = useState('programming');
	const [debouncedTerm, setDebouncedTerm] = useState(term);
	const [results, setResults] = useState([]);
	// console.log('I RUN WITH EVERY RENDER');
	// console.log(results);
	//this effect is for 'term', any time updates, set a timer to update debouncedTerm
	useEffect(() => {
		const timerId = setTimeout(() => {
			setDebouncedTerm(term);
		}, 1000);
		//after immediately update 'term', cancel previous timer, set a new timer
		return () => {
			clearTimeout(timerId);
		};
	}, [term]);

	useEffect(() => {
		const search = async () => {
			const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
				params: {
					action: 'query',
					list: 'search',
					origin: '*',
					format: 'json',
					srsearch: debouncedTerm,
				},
			});
			setResults(data.query.search);
		};
		if (debouncedTerm) {
			search();
		}
	}, [debouncedTerm]);

	// useEffect(() => {
	// 	//run code here anytime term changed
	// 	// console.log('I RUN AFTER EVERY RENDER AND AT INITIAL RENDER');
	// 	//not allowed to use async and await directly
	// 	//solution 1: use helper function
	// 	//solution 2: use ()()call the function in first()
	// 	//(async()=>{await axios.get('xxxx')})();
	// 	//solution 3: use the promise.then
	// 	// axios.get('xxxx').then((response) => {
	// 	// 	console.log(response.data);
	// 	// });
	// 	const search = async () => {
	// 		const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
	// 			params: {
	// 				action: 'query',
	// 				list: 'search',
	// 				origin: '*',
	// 				format: 'json',
	// 				srsearch: term,
	// 			},
	// 		});
	// 		setResults(data.query.search);
	// 	};

	// 	if (term && !results.length) {
	// 		//first time render
	// 		search();
	// 	} else {
	// 		//setTimeout():every time call this function will return a identifier
	// 		//use the returned identifier to clear the timer
	// 		const timeoutId = setTimeout(() => {
	// 			if (term) {
	// 				search();
	// 			}
	// 		}, 1000);

	// 		return () => {
	// 			clearTimeout(timeoutId);
	// 		};
	// 	}
	// }, [term]);

	const renderedResults = results.map((result) => {
		return (
			<div key={result.pageid} className="item">
				<div className="content">
					<div className="header">{result.title}</div>
					<span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
				</div>
				<div className="right floated content">
					<a className="ui button" href={`https://en.wikipedia.org?curid=${result.pageid}`}>
						Go
					</a>
				</div>
			</div>
		);
	});
	return (
		<div>
			<h1>Search</h1>
			<div className="ui form">
				<div className="field">
					<label>Enter Search Term</label>
					<input value={term} className="input" onChange={(e) => setTerm(e.target.value)} />
				</div>
			</div>
			<div className="ui celled list">{renderedResults}</div>
		</div>
	);
};
export default Search;
