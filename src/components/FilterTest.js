import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FilterResults from './FilterResults';

function FilterTest(props) {
	const [searchTerms, setSearchTerms] = useState({});
	const [data, setData] = useState({});
	const [state, setState] = useState({
		cardName: '',
		cardText: '',
		type: '',
		color: '',
		format: '',
		set: '',
		white: '',
		blue: '',
		black: '',
		red: '',
		green: '',
	});

	const handleChange = (event) => {
		if (event.target.type === 'checkbox' && !event.target.checked) {
			setState({ ...state, [event.target.name]: '' });
		} else {
			setState({ ...state, [event.target.name]: event.target.value });
		}
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		const makeApiCall = async () => {
			const res = await fetch(
				`https://api.scryfall.com/cards/search?q=${state.cardName}${state.cardText}${state.type}${state.white}${state.blue}${state.black}${state.red}${state.green}${state.format}${state.set}`
			);
			const json = await res.json();

			setSearchTerms(json);
		};

		makeApiCall();
	};

	const makeApiCall = async (card) => {
		const res = await fetch('https://api.scryfall.com//sets');
		const json = await res.json();
		const newArr = await json.data.filter(function (e) {
			return e.set_type === 'expansion' || e.set_type === 'core';
		});

		setData(newArr);
	};

	useEffect(() => {
		makeApiCall();
	}, []);

	const newFilterArr = data[1]
		? data.map((item) => {
				return (
					<option value={`+set%3A${item.code}`} key={item.id}>
						{item.name}
					</option>
				);
		  })
		: null;

	let boxSetFilter = '';
	if (data[0]) {
		boxSetFilter = (
			<Form>
				<Form.Label>What set is it in?</Form.Label>
				<Form.Control name='set' as='select' onChange={handleChange}>
					<option value=''></option>
					{newFilterArr}
				</Form.Control>
			</Form>
		);
	}

	return (
		<>
			<Form.Group className='container' controlId='exampleForm.ControlSelect1'>
				<Form onSubmit={handleSubmit}>
					<Form>
						<Form.Label>Card Name</Form.Label>
						<Form.Control
							type='text'
							name='cardName'
							onChange={handleChange}
							placeholder='Any word in the name'></Form.Control>
					</Form>
					<Form>
						<Form.Label>Text</Form.Label>
						<Form.Control
							type='text'
							name='cardText'
							onChange={handleChange}
							placeholder='Any text, e.g. "draw a card"'></Form.Control>
					</Form>
					<Form.Label>Type</Form.Label>
					<Form.Control name='type' as='select' onChange={handleChange}>
						<option value=''></option>
						<option value='+t%3Aartifact'>Artifact</option>
						<option value='+t%3Acreature'>Creature</option>
						<option value='+t%3Aenchantment'>Enchantment</option>
						<option value='+t%3Ainstant'>Instant</option>
						<option value='+t%3Asorcery'>Sorcery</option>
						<option value='+t%3Aland'>Land</option>
					</Form.Control>
					<Form.Label>Color</Form.Label>
					<div key={`inline-checkbox`} className='mb-3'>
						<Form.Check
							onChange={handleChange}
							inline
							name='white'
							value='+c%3Awhite'
							label='white'
							type='checkbox'
							id={`inline-checkbox-1`}
						/>
						<Form.Check
							onChange={handleChange}
							inline
							name='blue'
							value='+c%3Ablue'
							label='Blue'
							type='checkbox'
							id={`inline-checkbox-2`}
						/>
						<Form.Check
							onChange={handleChange}
							inline
							name='black'
							value='+c%3Ablack'
							label='Black'
							type='checkbox'
							id={`inline-checkbox-3`}
						/>
						<Form.Check
							onChange={handleChange}
							inline
							name='red'
							value='+c%3Ared'
							label='Red'
							type='checkbox'
							id={`inline-checkbox-3`}
						/>
						<Form.Check
							onChange={handleChange}
							inline
							name='green'
							value='+c%3Agreen'
							label='Green'
							type='checkbox'
							id={`inline-checkbox-3`}
						/>
					</div>

					<Form.Label>Format</Form.Label>
					<Form.Control name='format' as='select' onChange={handleChange}>
						<option value=''></option>
						<option value='+legal%3Astandard'>Standard</option>
						<option value='+legal%3Ahistoric'>Historic</option>
						<option value='+legal%3Amodern'>Modern</option>
						<option value='+legal%3Alegacy'>Legacy</option>
						<option value='+legal%3Acommander'>Commander</option>
						<option value='+legal%3Abrawl'>Brawl</option>
					</Form.Control>
					{boxSetFilter}
					<Button
						className='mt-2'
						type='submit'
						variant='primary'
						size='sm'
						block>
						Submit
					</Button>
				</Form>
			</Form.Group>
			<FilterResults searchTerms={searchTerms} />
		</>
	);
}

export default FilterTest;
