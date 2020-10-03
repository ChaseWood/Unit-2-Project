import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';

function FilterColor(props) {
	const [color, setColor] = useState('');

	const handleChange = (event) => {
		console.log('this is color', color);
		setColor(event.target.value);
	};

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
export default FilterColor;
