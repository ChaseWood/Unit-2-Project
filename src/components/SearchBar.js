import React, { useState } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import SearchBarResults from './SearchBarResults';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function SearchBar(props) {
	const [fuzzySearch, setFuzzySearch] = useState('');
	const [fuzzySearchArray, setFuzzySearchArray] = useState([]);
	const [clickSubmit, setClickSubmit] = useState(false);

	const makeApiCall = async () => {
		const res = await fetch(
			`https://api.scryfall.com/cards/search?q=name%3A%2F%5C${fuzzySearch}`
		);
		const json = await res.json();

		setFuzzySearchArray(json.data);
	};

	const handleChange = (event) => {
		setFuzzySearch(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setClickSubmit(true);
		makeApiCall();
	};

	return (
		<div style={{ marginTop: '80px' }} className='container align-items-center'>
			<Form.Group controlId='exampleForm.ControlSelect1'>
				<Form onSubmit={handleSubmit}>
					<Form.Control
						className='form-control-inline'
						type='text'
						onChange={handleChange}
						placeholder='Search Name'></Form.Control>

					<Button
						className='mt-2'
						type='submit'
						variant='primary'
						size='sm'
						block>
						Submit
					</Button>
					<Link to='/random'>
						<Button className='mt-2' variant='secondary' size='sm' block>
							Random Card
						</Button>
					</Link>
					<Link to='/Filter'>
						<Button className='mt-2' variant='secondary' size='sm' block>
							Filter Cards
						</Button>
					</Link>
				</Form>
			</Form.Group>
			{clickSubmit === true ? (
				<SearchBarResults
					fuzzySearchArray={fuzzySearchArray}
					handleSubmit={handleSubmit}
				/>
			) : null}
		</div>
	);
}

export default SearchBar;

// 'https://api.scryfall.com/cards/search?q=name%3A%2F%5C'
//API to search the name field
