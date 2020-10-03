import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';

function FilterType(props) {
	const [type, setType] = useState('');

	const handleChange = (event) => {
		console.log('this is type', type);
		setType(event.target.value);
	};

	return (
		<div className='container'>
			<Form.Group controlId='exampleForm.ControlSelect1'>
				<Form.Label>Type</Form.Label>
				<Form.Control as='select' onChange={handleChange}>
					<option></option>
					<option>Artifact</option>
					<option>Creature</option>
					<option>Enchantment</option>
					<option>Instant</option>
					<option>Sorcery</option>
					<option>Land</option>
				</Form.Control>
			</Form.Group>
		</div>
	);
}
export default FilterType;
