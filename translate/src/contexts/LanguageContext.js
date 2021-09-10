import React from 'react';
const Context = React.createContext('english');

export class LanguageStore extends React.Component {
	state = { language: 'english' };

	onLanguageChange = (language) => {
		this.setState({ language });
	};

	render() {
		return (
			<Context.Provider value={{ ...this.state, onLanguageChange: this.onLanguageChange }}>
				{this.props.children}
			</Context.Provider>
		);
	}
}
export default Context;
// import LanguageContext
// import {LanguageStore}

//set default value in the context object to nested child
// export default React.createContext('english');
// const context = React.createContext('english');
// //context has a property: Provider, which is a React Component created by context systems
// console.log(context);
// export default context;
