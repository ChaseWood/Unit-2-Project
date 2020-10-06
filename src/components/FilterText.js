import React from 'react';
import Form from 'react-bootstrap/Form';

function FilterText() {
	return (
		<Form.Group className='container' controlId='exampleForm.ControlSelect1'>
			<Form onSubmit>
				<Form.Label>Text</Form.Label>
				<Form.Control
					type='text'
					onChange
					placeholder='Any text, e.g. "draw a card"'></Form.Control>
			</Form>
		</Form.Group>
	);
}

export default FilterText;
