import React, { useState, useEffect } from 'react';
import '../css/style.css';
import Card from 'react-bootstrap/Card';

function Home(props) {
	//this is going to get props.searchCard from APP to do the search for a specific name
	//need to refactor the fetch to accept the state pass down from app
	console.log(props.searchCard);
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

	let cardData = '';
	if (card.name) {
		cardData = (
			<div className='data container top-padding'>
				<div>Example Card</div>
				<Card style={{ width: '18rem' }}>
					<Card.Img variant='top' src={card.image_uris.png} />
					<Card.Body className='container'>
						<Card.Title>{card.name}</Card.Title>
						<Card.Text>
							Some quick example text to build on the card title and make up the
							bulk of the card's content.
						</Card.Text>
					</Card.Body>
				</Card>
			</div>
		);
	}

	return <>{cardData}</>;
}

export default Home;
