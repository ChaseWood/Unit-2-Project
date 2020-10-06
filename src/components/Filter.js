import React from 'react';
import Form from 'react-bootstrap/Form';
import FilterColor from './FilterColor';
import FilterType from './FilterType';
import FilterSet from './FilterSet';

function Filter(props) {
	return (
		<Form className='container'>
			{/* <FilterType /> */}
			{/* <FilterColor /> */}
			<FilterSet />
		</Form>
	);
}

export default Filter;
