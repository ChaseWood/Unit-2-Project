import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import FilterColor from './FilterColor';
import FilterType from './FilterType';
import FilterSet from './FilterSet';
import FilterFormat from './FilterFormat';
import FilterNameSearch from './FilterNameSearch';
import FilterText from './FilterText';

function Filter(props) {
	const [filterColor, setFilterColor] = useState('');

	const sendColor = (data) => {
		setFilterColor(data);
	};
	console.log('this is filterColor', filterColor);

	return (
		<Form className='container'>
			<FilterNameSearch />
			<FilterText />
			<FilterType />
			<FilterColor sendColor={sendColor} />
			<FilterFormat />
			<FilterSet />
		</Form>
	);
}

export default Filter;
