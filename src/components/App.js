import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
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

	return (
		<div className='container'>
			<Header />

			<Route exact={true} path='/'>
				<SearchBar />
			</Route>
			<Route exact={true} path='/Filter'>
				<Filter />
			</Route>
			<Route exact={true} path='/random'>
				<RandomCard card={card} />
			</Route>
			<Route
				exact={true}
				path='/:name'
				render={(routerProps) => <SingleCard {...routerProps} />}></Route>
		</div>
	);
}

export default App;
