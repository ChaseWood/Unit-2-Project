import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function FilterTest(props) {
	const [color, setColor] = useState('');

	const handleChange = (event) => {
		const chosenColor = event.target.value;
		setColor(chosenColor);
		props.sendColor(color);
	};

	const handleSubmit = (event) => {
		props.makeApiCall;
		event.preventDefault();
	};

	return (
		///FILTER COLOR
		<Form className='container'>
			<Form.Group
				onSubmit={handleSubmit}
				controlId='exampleForm.ControlSelect1'>
				<Form.Label>Color</Form.Label>
				<Form.Control as='select' onChange={handleChange}>
					<option value=''></option>
					<option value='+c%3Awhite'>White</option>
					<option value='+c%3Ablue'>Blue</option>
					<option value='+c%3Ablack'>Black</option>
					<option value='+c%3Ared'>Red</option>
					<option value='+c%3Agreen'>Green</option>
				</Form.Control>
				<Button
					className='mt-2'
					type='submit'
					variant='primary'
					size='sm'
					block>
					Submit
				</Button>
			</Form.Group>
		</Form>
	);
}

export default FilterTest;
