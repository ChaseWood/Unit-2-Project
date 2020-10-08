import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function FilterResults(props) {
	props.searchTerms ? console.log(props.searchTerms.data) : null;

	const dataArray = props.searchTerms.data
		? props.searchTerms.data.map((item) => {
				return (
					<div className='mt-2' key={item.name}>
						<Link to={'/' + item.name}>
							<img
								src={item.image_uris && item.image_uris.small}
								alt={item.name}
							/>
						</Link>
					</div>
				);
		  })
		: null;

	return (
		<div className=' d-flex flex-wrap justify-content-around align-content-between'>
			{dataArray}
		</div>
	);
}

export default FilterResults;
