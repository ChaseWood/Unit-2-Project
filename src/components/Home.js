import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';

function Home() {
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
			<div className='data'>
				<Card style={{ width: '18rem' }}>
					<Card.Img variant='top' src={card.image_uris.png} />
					<Card.Body>
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
