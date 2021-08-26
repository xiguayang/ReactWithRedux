import React, { useState, useEffect, useRef } from 'react';
const Dropdown = ({ label, options, selected, onSelectedChange }) => {
	const [open, setOpen] = useState(false);
	const ref = useRef();

	//set eventlistener in the hook, only run once
	useEffect(() => {
		const onBodyClick = (event) => {
			//to check if the event clicked on is inside the component
			if (ref.current.contains(event.target)) {
				return;
			}
			setOpen(false);
		};
		document.body.addEventListener('click', onBodyClick, { capture: true });
		return () => {
			document.body.removeEventListener('click', onBodyClick, { capture: true });
		};
	}, []);
	const renderedOptions = options.map((option) => {
		if (option.value === selected.value) {
			return null;
		}
		return (
			<div
				key={option.value}
				className="item"
				onClick={() => {
					// console.log('Click Item');
					onSelectedChange(option);
				}}
			>
				{option.label}
			</div>
		);
	});
	// console.log(ref.current);
	return (
		<div ref={ref} className="ui form">
			<div className="field">
				<label className="label">{label}</label>
				<div
					onClick={() => {
						// console.log('Click Dropdown');
						setOpen(!open);
					}}
					className={`ui selection dropdown ${open ? 'visible active' : ''}`}
				>
					<i className="dropdown icon"></i>
					<div className="text">{selected.label}</div>
					<div className={`menu ${open ? 'visible transition' : ''}`}>{renderedOptions}</div>
				</div>
				{/* <p style={{ color: `${selected.value}` }}>Your select color text</p> */}
			</div>
		</div>
	);
};
export default Dropdown;
