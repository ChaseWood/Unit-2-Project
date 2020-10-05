import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';

function FilterSet(props) {
	const [set, setSet] = useState({});

	const handleChange = (event) => {
		console.log('this is set', set.data);
		setSet(event.target.value);
	};

	const makeApiCall = async (card) => {
		const res = await fetch('https://api.scryfall.com//sets');
		const json = await res.json();
		const newArr = await json.data.filter(function (e) {
			return e.set_type === 'expansion' || e.set_type === 'core';
		});

		setSet(newArr);
	};

	console.log('this is set2', set);

	useEffect(() => {
		makeApiCall();
	}, []);

	const newFilterArr = set[0]
		? set.map((item) => {
				return <option key={item.id}>{item.name}</option>;
		  })
		: null;

	let boxSetFilter = '';
	if (set[0]) {
		boxSetFilter = (
			<div className='container'>
				<Form.Group controlId='exampleForm.ControlSelect1'>
					<Form.Label>What set is it in?</Form.Label>
					<Form.Control as='select' onChange={handleChange}>
						{newFilterArr}
						{/* <option></option>
						<option>{set[0].name}</option>
						<option>Blue</option>
						<option>Black</option>
						<option>Red</option>
						<option>Green</option> */}
					</Form.Control>
				</Form.Group>
			</div>
		);
	}

	return <div>{boxSetFilter}</div>;
}

export default FilterSet;

// https://api.scryfall.com//cards/search?q=e%3Awar
