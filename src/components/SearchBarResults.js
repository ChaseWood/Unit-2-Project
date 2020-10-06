import React from 'react';

function SearchBarResults(props) {
	props.fuzzySearchArray[0]
		? console.log('this is props.fuzzySearchArray', props.fuzzySearchArray[0])
		: null;

	const searchResultsArray = props.fuzzySearchArray[0]
		? props.fuzzySearchArray.map((item) => {
				return (
					<div className='mt-2' key={item.name}>
						<img
							src={item.image_uris && item.image_uris.small}
							alt={item.name}
						/>
					</div>
				);
		  })
		: null;

	return (
		<div className=' d-flex flex-wrap justify-content-around align-content-between'>
			{searchResultsArray}
		</div>
	);
}

export default SearchBarResults;
