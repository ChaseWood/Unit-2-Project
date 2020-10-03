import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';

function FilterSet(props) {
	const [set, setSet] = useState('');

	const handleChange = (event) => {
		console.log('this is filterSet', set);
		setSet(event.target.value);
	};

	const makeApiCall = async (card) => {
		const res = await fetch('https://api.scryfall.com//cards/search?q=e%3Awar');
		const json = await res.json();

		setSet(json);
	};

	useEffect(() => {
		makeApiCall();
	}, []);

	return (
		<div className='container'>
			<Form.Group controlId='exampleForm.ControlSelect1'>
				<Form.Label>Color</Form.Label>
				<Form.Control as='select' onChange={handleChange}>
					<option></option>
					<option>White</option>
					<option>Blue</option>
					<option>Black</option>
					<option>Red</option>
					<option>Green</option>
				</Form.Control>
			</Form.Group>
		</div>
	);
}
export default FilterSet;
