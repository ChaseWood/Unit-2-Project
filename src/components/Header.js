import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

function Header(props) {
	const [cardName, setCardName] = useState('');

	const handleChange = (event) => {
		console.log('handle change handled');
		setCardName(event.target.value);
	};

	const handleClick = (event) => {
		console.log('this is handleSubmit', cardName);
		props.handleSubmitCard(cardName);
	};

	return (
		<>
			<Navbar bg='dark' variant='dark' fixed='top'>
				<Navbar.Brand href='#home'>MTG Card Search</Navbar.Brand>
				<Form inline className='container'>
					<FormControl
						type='text'
						placeholder='Name'
						className='mr-sm-2'
						onChange={handleChange}
					/>
					<Button type='submit' variant='outline-info' onSubmit={handleClick}>
						Search
					</Button>
				</Form>
			</Navbar>
		</>
	);
}

export default Header;
