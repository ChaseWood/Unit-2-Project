import React, { useState, useEffect } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Header from './Header';
import RandomCard from './RandomCard';

function App() {
	const [card, setCard] = useState({});

	const makeApiCall = async () => {
		const res = await fetch('https://api.scryfall.com/cards/random');
		const json = await res.json();

		console.log('this is json data', json);
		console.log('this is card img', json);

		setCard(json);
	};

	useEffect(() => {
		makeApiCall();
	}, []);

	//this useState is setting the state to what was searched for in header to pass down to randomCard

	// this is getting the cardName from Header

	return (
		<div>
			<Header />
			<RandomCard card={card} />
		</div>
	);
}

export default App;
