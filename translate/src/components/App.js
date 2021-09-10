import React from 'react';
import ColorContext from '../contexts/ColorContext';
import { LanguageStore } from '../contexts/LanguageContext';
import UserCreate from './UserCreate';
import LanguageSelector from './LanguageSelector';
class App extends React.Component {
	render() {
		return (
			<div className="ui container">
				<LanguageStore>
					<LanguageSelector />
					<ColorContext.Provider value="red">
						<UserCreate />
					</ColorContext.Provider>
				</LanguageStore>
				{/* will change default value and always show dutch */}
				{/* <LanguageContext.Provider value="dutch">
					<UserCreate />
				</LanguageContext.Provider>
				{/* will use default context value 'english' *
				<UserCreate /> */}
			</div>
		);
	}
}
export default App;
