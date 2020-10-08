import React, { useState } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
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

	const handleSubmit = (event) => {
		console.log('this is handleSubmit', cardName);
		props.handleSubmit(cardName);
		event.preventDefault();
	};

	return (
		<>
			<Navbar bg='dark' variant='dark' className='fixed-top'>
				<Link to='/'>
					<Navbar.Brand href='#home'>MTG Card Search</Navbar.Brand>
				</Link>
				<Form inline className='container' onSubmit={handleSubmit}></Form>
			</Navbar>
		</>
	);
}

export default Header;
