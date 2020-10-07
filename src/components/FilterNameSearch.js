import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

function FilterNameSearch() {
	const [searchInput, setSearchInput] = useState();

	const handleChange = (event) => {
		setSearchInput(event.target.value);
	};

	return (
		<Form.Group className='container' controlId='exampleForm.ControlSelect1'>
			<Form onSubmit>
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
