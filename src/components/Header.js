import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';

function Header() {
	return (
		<>
			<Navbar bg='dark' variant='dark' className='fixed-top'>
				<Link to='/'>
					<Navbar.Brand href='#home'>MTG Card Search</Navbar.Brand>
				</Link>
				<Form inline className='container'></Form>
			</Navbar>
		</>
	);
}

export default Header;
