import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

function FilterText() {
	const [text, setText] = useState('');

	const handleChange = (event) => {
		setText(event.target.value);
	};

	const handleSubmit = (event) => {
		setText(event.target.value);
		props.sendText(text);
	};

	return (
		<Form.Group className='container' controlId='exampleForm.ControlSelect1'>
			<Form onSubmit={handleSubmit}>
				<Form.Label>Text</Form.Label>
				<Form.Control
					type='text'
					onChange={handleChange}
					placeholder='Any text, e.g. "draw a card"'></Form.Control>
			</Form>
		</Form.Group>
	);
}

export default FilterText;
