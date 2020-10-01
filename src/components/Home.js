import React, { useState, useEffect } from 'react';

function Home() {
	const [card, setCard] = useState({});

	const makeApiCall = async () => {
		const res = await fetch(
			'https://api.scryfall.com/cards/named?exact=dreadwurm'
		);
		const json = await res.json();

		console.log('this is json data', json);
		console.log('this is card img', json.image_uris.large);

		const uri = json.image_uris.large;
		const newUri = uri.substring(0, uri.lastIndexOf('?'));
		console.log('this is newURI', newUri);

		setCard(json);
	};

	useEffect(() => {
		makeApiCall();
	}, []);
	// console.log('this is card img', card.image_uris.large);

	let cardData = '';
	if (card) {
		// const uri = card.image_uris.small;
		// const newUri = uri.substring(0, uri.lastIndexOf('?'));
		// console.log('this is newURI', newUri);

		cardData = (
			<div className='data'>
				{/* <img src={newUri} alt='card'></img> */}
				<div>{card.name}</div>
				<div>{card.flavor_text}</div>
				{/* <div>{card.keywords[0]}</div> */}
			</div>
		);
	}

	return <>{cardData}</>;
}

export default Home;
