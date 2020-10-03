import React, { useState, useEffect } from 'react';
import '../css/style.css';
import Card from 'react-bootstrap/Card';

function Home(props) {
	let cardData = '';
	if (props.card.name) {
		cardData = (
			<div className='data container top-padding'>
				<div>Example Card</div>
				<Card style={{ width: '18rem' }}>
					<Card.Img variant='top' src={props.card.image_uris.png} />
					<Card.Body className='container'>
						<Card.Title>{props.card.name}</Card.Title>
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
