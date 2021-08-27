import React from 'react';

const Link = ({ className, href, children }) => {
	const onClick = (event) => {
		//add control+click in page
		if (event.metaKey || event.ctrlKey) {
			return;
		}
		//prevent default full page reload
		event.preventDefault();
		window.history.pushState({}, '', href);
		//the event that tells the components that the URL hhas changed
		const navEvent = new PopStateEvent('popstate');
		window.dispatchEvent(navEvent);
	};
	return (
		<a onClick={onClick} className={className} href={href}>
			{children}
		</a>
	);
};
export default Link;
