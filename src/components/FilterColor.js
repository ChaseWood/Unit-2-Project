import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';

function FilterColor(props) {
	const [color, setColor] = useState('');

	const handleChange = (event) => {
		setColor(event.target.value);
		props.sendColor(color);
	};

	return (
		<div className='container'>
			<Form.Group controlId='exampleForm.ControlSelect1'>
				<Form.Label>Color</Form.Label>
				<Form.Control as='select' onChange={handleChange}>
					<option></option>
					<option value='c%3Awhite'>White</option>
					<option value='c%3Ablue'>Blue</option>
					<option value='c%3Ablack'>Black</option>
					<option value='c%3Ared'>Red</option>
					<option value='c%3Agreen'>Green</option>
				</Form.Control>
			</Form.Group>
		</div>
	);
}
export default FilterColor;

///https://c2.scryfall.com/file/scryfall-symbols/card-symbols/W.svg
//https://scryfall.com/docs/api/colors
//above is the link to the SVG to possible add the symbols to the app somehow
