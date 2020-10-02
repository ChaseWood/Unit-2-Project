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

	let cardData = '';
	if (card.name) {
		cardData = (
			<div className='data'>
				<img src={card.image_uris.small} alt='card'></img>
				<div>{card.name}</div>
				<div>{card.flavor_text}</div>
			</div>
		);
	}

	return <>{cardData}</>;
}

export default Home;

// seems like I am having the same problems again with not being able to go one level deeper...trying to pull anything past the first level of objects comes back undefined even though I am waiting for the "card" state
