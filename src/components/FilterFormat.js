import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';

function FilterFormat(props) {
	const [format, setFormat] = useState('');

	const handleChange = (event) => {
		setFormat(event.target.value);
		props.sendFormat(format);
	};

	return (
		<div className='container'>
			<Form.Group controlId='exampleForm.ControlSelect1'>
				<Form.Label>Format</Form.Label>
				<Form.Control as='select' onChange={handleChange}>
					<option></option>
					<option value='+legal%3Astandard'>Standard</option>
					<option value='+legal%3Ahistoric'>Historic</option>
					<option value='+legal%3Amodern'>Modern</option>
					<option value='+legal%3Alegacy'>Legacy</option>
					<option value='+legal%3Acommander'>Commander</option>
					<option value='+legal%3Abrawl'>Brawl</option>
				</Form.Control>
			</Form.Group>
		</div>
	);
}
export default FilterFormat;
