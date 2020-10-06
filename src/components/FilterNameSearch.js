import React from 'react';
import Form from 'react-bootstrap/Form';

function FilterNameSearch() {
	return (
		<Form.Group className='container' controlId='exampleForm.ControlSelect1'>
			<Form onSubmit>
				<Form.Label>Card Name</Form.Label>
				<Form.Control
					type='text'
					onChange
					placeholder='Any word in the name'></Form.Control>
			</Form>
		</Form.Group>
	);
}

export default FilterNameSearch;
