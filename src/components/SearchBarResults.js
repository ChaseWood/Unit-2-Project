import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function SearchBarResults(props) {
	if (props.fuzzySearchArray) {
		props.fuzzySearchArray[0]
			? console.log('this is props.fuzzySearchArray', props.fuzzySearchArray[0])
			: null;

		const searchResultsArray = props.fuzzySearchArray[0]
			? props.fuzzySearchArray.map((item) => {
					if (item.image_uris) {
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
					} else {
						return (
							<div className='mt-2' key={item.name}>
								<Link to={'/' + item.name}>
									<img
										style={{ width: '146px' }}
										src='https://i.imgur.com/eDjHXRP.jpg'
										alt={item.name}
									/>
								</Link>
							</div>
						);
					}
			  })
			: null;

		return (
			<div className=' d-flex flex-wrap justify-content-around align-content-between'>
				{searchResultsArray}
			</div>
		);
	} else {
		return <div>Your search returned no results</div>;
	}
}

export default SearchBarResults;

('https://i.imgur.com/eDjHXRP.jpg');
