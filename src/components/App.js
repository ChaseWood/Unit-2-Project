import React, { useState, useEffect } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Header from './Header';
import RandomCard from './RandomCard';
import Filter from './Filter';
import SearchBar from './SearchBar';
import SingleCard from './SingleCard';

const mtgApi = 'https://api.scryfall.com/cards/';

function App() {
	const [card, setCard] = useState({});

	const makeApiCall = async (card) => {
		const res = await fetch(`https://api.scryfall.com/cards/${card}`);
		const json = await res.json();

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

			<Route exact path='/'>
				<SearchBar />
			</Route>
			<Route exact={true} path='/Filter'>
				<Filter />
			</Route>
			<Route exact={true} path='/random'>
				<RandomCard card={card} />
			</Route>
			{/* <SingleCard /> */}
		</div>
	);
}

export default App;

// useContext or props to pass state back up from grandchild to be used here at APP to change the
