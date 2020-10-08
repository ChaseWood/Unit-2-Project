import React, { useState } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Form from 'react-bootstrap/Form';

function FilterNameSearch(props) {
	const [searchInput, setSearchInput] = useState();

	const handleChange = (event) => {
		setSearchInput(event.target.value);
	};

	const handleSubmit = (event) => {
		setSearchInput(event.target.value);
		props.sendNameSearch(searchInput);
	};

	return (
		<Form.Group className='container' controlId='exampleForm.ControlSelect1'>
			<Form onSubmit={handleSubmit}>
				<Form.Label>Card Name</Form.Label>
				<Form.Control
					type='text'
					onChange={handleChange}
					placeholder='Any word in the name'></Form.Control>
			</Form>
		</Form.Group>
	);
}

export default FilterNameSearch;
