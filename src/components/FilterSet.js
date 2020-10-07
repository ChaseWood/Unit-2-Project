import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';

function FilterSet(props) {
	const [set, setSet] = useState({});
	const [setCode, setSetCode] = useState('');

	const handleChange = (event) => {
		setSetCode(event.target.value);
		props.sendSet(setCode);
	};

	const makeApiCall = async (card) => {
		const res = await fetch('https://api.scryfall.com//sets');
		const json = await res.json();
		const newArr = await json.data.filter(function (e) {
			return e.set_type === 'expansion' || e.set_type === 'core';
		});

		setSet(newArr);
	};

	useEffect(() => {
		makeApiCall();
	}, []);

	const newFilterArr = set[1]
		? set.map((item) => {
				return (
					<option value={`+set%3A${item.code}`} key={item.id}>
						{item.name}
					</option>
				);
		  })
		: null;

	let boxSetFilter = '';
	if (set[0]) {
		boxSetFilter = (
			<div className='container'>
				<Form.Group controlId='exampleForm.ControlSelect1'>
					<Form.Label>What set is it in?</Form.Label>
					<Form.Control as='select' onChange={handleChange}>
						<option value=''></option>
						{newFilterArr}
					</Form.Control>
				</Form.Group>
			</div>
		);
	}

	return <div>{boxSetFilter}</div>;
}

export default FilterSet;
