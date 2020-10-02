import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import SearchForm from './SearchForm';

function App() {
	return (
		<div>
			<Header />
			<SearchForm />
			<Home />
		</div>
	);
}

export default App;
