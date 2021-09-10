import React from 'react';
import ColorContext from '../contexts/ColorContext';
import LanguageContext from '../contexts/LanguageContext';

class Button extends React.Component {
	//specific contextType, the property is added to the Component itself
	// static contextType = LanguageContext;
	renderSubmit(language) {
		return language === 'english' ? 'Submit' : 'Voorleggen';
	}
	renderButton(color) {
		return (
			<button className={`ui button ${color}`}>
				<LanguageContext.Consumer>{({ language }) => this.renderSubmit(language)}</LanguageContext.Consumer>
			</button>
		);
	}
	render() {
		//this.context get the value out of Context Object
		//const text = this.context === 'english' ? 'Submit' : 'Voorleggen';
		return <ColorContext.Consumer>{(color) => this.renderButton(color)}</ColorContext.Consumer>;
	}
}
//second way to add contextType to Button out of Button class
//Button.contextType = LanguageContext
export default Button;
