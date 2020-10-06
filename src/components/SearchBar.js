import React, { useState } from 'react';
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
		// console.log('this is fuzzySearchArray', fuzzySearchArray);
	};

	const handleChange = (event) => {
		setFuzzySearch(event.target.value);
		console.log('this is fuzzySearch', fuzzySearch);
	};

	const handleSubmit = (event) => {
		console.log('this is handleSubmit', fuzzySearch);
		event.preventDefault();
		setClickSubmit(true);
		makeApiCall();
	};

	return (
		<div className='container'>
			<Form.Group controlId='exampleForm.ControlSelect1'>
				<Form onSubmit={handleSubmit}>
					<Form.Label>MTG Search</Form.Label>
					<Form.Control
						type='text'
						onChange={handleChange}
						placeholder='Search'></Form.Control>
					<Button
						className='mt-2'
						type='submit'
						variant='primary'
						size='sm'
						block>
						Submit
					</Button>
					<Button variant='secondary' size='sm' block>
						Random Card
					</Button>
					<Button variant='secondary' size='sm' block>
						Filter Cards
					</Button>
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
