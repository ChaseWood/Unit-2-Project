import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import FilterColor from './FilterColor';
import FilterType from './FilterType';
import FilterSet from './FilterSet';
import FilterFormat from './FilterFormat';
import FilterNameSearch from './FilterNameSearch';
import FilterText from './FilterText';

function Filter(props) {
	const [searchTerm, setSearchTerm] = useState([]);

	const sendColor = (color) => {
		setSearchTerm([...searchTerm, color]);
	};

	const sendFormat = (format) => {
		setSearchTerm([...searchTerm, format]);
	};

	console.log('this is searchTerm', searchTerm);

	return (
		<Form className='container'>
			<FilterNameSearch />
			<FilterText />
			<FilterType />
			<FilterColor sendColor={sendColor} />
			<FilterFormat sendFormat={sendFormat} />
			<FilterSet />
		</Form>
	);
}

export default Filter;
