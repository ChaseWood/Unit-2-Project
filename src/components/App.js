import React, { useState, useEffect } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Header from './Header';
import RandomCard from './RandomCard';
import Filter from './Filter';

const mtgApi = 'https://api.scryfall.com/cards/';

function App() {
	const [card, setCard] = useState({});
	console.log('this is card', card);

	const makeApiCall = async (card) => {
		const res = await fetch(`https://api.scryfall.com/cards/${card}`);
		const json = await res.json();

		console.log('this is json data', json);
		console.log('this is card img', json);

		setCard(json);
	};

	useEffect(() => {
		makeApiCall('random');
	}, []);

	const handleSubmit = (cardName) => {
		makeApiCall(`named?exact=${cardName}`);
	};

	return (
		<div>
			{/* <Header handleSubmit={handleSubmit} /> */}
			{/* <RandomCard card={card} /> */}
			<Filter />
		</div>
	);
}

export default App;
