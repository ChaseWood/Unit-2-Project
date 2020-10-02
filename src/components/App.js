import React, { useState } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Header from './Header';
import RandomCard from './RandomCard';

function App() {
	//this useState is setting the state to what was searched for in header to pass down to randomCard
	const [searchCard, setSearchCard] = useState('');
	// this is getting the cardName from Header
	const handleSubmitCard = (cardName) => {
		setSearchCard(cardName);
	};

	return (
		<div>
			<Header handleSubmitCard={handleSubmitCard} />
			<RandomCard searchCard={searchCard} />
		</div>
	);
}

export default App;
