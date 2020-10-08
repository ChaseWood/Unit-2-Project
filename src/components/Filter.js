import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import FilterColor from './FilterColor';
import FilterType from './FilterType';
import FilterSet from './FilterSet';
import FilterFormat from './FilterFormat';
import FilterNameSearch from './FilterNameSearch';
import FilterText from './FilterText';
import FilterResults from './FilterResults';
import FilterTest from './FilterTest';

function Filter(props) {
	const [searchName, setSearchName] = useState('');
	const [searchText, setSearchText] = useState('');
	const [searchType, setSearchType] = useState('');
	const [searchColor, setSearchColor] = useState('');
	const [searchFormat, setSearchFormat] = useState('');
	const [setName, setSetName] = useState('');
	const [allSearches, setAllSearches] = useState('');
	// const [submit, setSubmit] = useState('');
	//THIS IS FOR TH TEST FILTER

	const sendNameSearch = (searchInput) => {
		setSearchName(searchInput);
	};

	const sendText = (text) => {
		setSearchText(text);
	};

	const sendType = (type) => {
		setSearchType(type);
	};

	const sendColor = (color) => {
		setSearchColor(color);
	};

	const sendFormat = (format) => {
		setSearchFormat(format);
	};

	const sendSet = (setCode) => {
		setSetName(setCode);
	};

	//BELOW THIS IS FOR THE TEST FILTER
	// const handleSubmit = (color) => {
	// 	setSubmit(color);
	// 	makeApiCall();
	// };

	const newSearch = searchType + searchColor;
	console.log(newSearch);

	const makeApiCall = async () => {
		const res = await fetch(
			`https://api.scryfall.com/cards/search?q=${searchName}${searchText}${searchType}${searchColor}${searchFormat}${setName}`
		);
		const json = await res.json();

		setAllSearches(json.data);
		console.log(json);
	};

	console.log(allSearches);

	// useEffect(() => {
	// 	makeApiCall();
	// }, []);

	return (
		<div style={{ marginTop: '80px' }} className='container'>
			{/* <FilterNameSearch sendNameSearch={sendNameSearch} />
			<FilterText sendText={sendText} />
			<FilterType sendType={sendType} />
			<FilterColor sendColor={sendColor} />
			<FilterFormat sendFormat={sendFormat} />
			<FilterSet sendSet={sendSet} />
			<Button
				className='mt-2'
				type='submit'
				variant='primary'
				size='sm'
				block
				onClick={makeApiCall}>
				Submit
			</Button>
			<FilterResults /> */}
			<FilterTest
			// sendColor={sendColor}
			// makeApiCall={makeApiCall}
			// handleSubmit={handleSubmit}
			/>
		</div>
	);
}

export default Filter;
