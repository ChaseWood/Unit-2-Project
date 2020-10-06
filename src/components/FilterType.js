import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';

function FilterType(props) {
	const [type, setType] = useState('');

	const handleChange = (event) => {
		setType(event.target.value);
	};

	return (
		<div className='container'>
			<Form.Group controlId='exampleForm.ControlSelect1'>
				<Form.Label>Type</Form.Label>
				<Form.Control as='select' onChange={handleChange}>
					<option></option>
					<option value='+t%3Aartifact'>Artifact</option>
					<option value='+t%3Acreature'>Creature</option>
					<option value='+t%3Aenchantment'>Enchantment</option>
					<option value='+t%3Ainstant'>Instant</option>
					<option value='+t%3Asorcery'>Sorcery</option>
					<option value='+t%3Aland'>Land</option>
				</Form.Control>
			</Form.Group>
		</div>
	);
}
export default FilterType;

// https://api.scryfall.com/cards/search?q=t%3Aartifact
