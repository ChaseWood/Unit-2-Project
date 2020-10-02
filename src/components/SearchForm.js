import React from 'react';
import Form from 'react-bootstrap/Form';

function SearchForm() {
	return (
		<Form>
			<Form.Group>
				<Form.Control type='text' placeholder='Normal text' />
			</Form.Group>
		</Form>
	);
}

export default SearchForm;
