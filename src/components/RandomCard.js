import React, { useState, useEffect } from 'react';
import '../css/style.css';
import Card from 'react-bootstrap/Card';

function Home(props) {
	let cardData = '';
	if (props.card.name) {
		cardData = (
			<div
				style={{ marginTop: '80px' }}
				className='d-flex p-2 justify-content-center flex-wrap grid-gap-1 align-items-start'>
				<img
					className=' mt-3'
					style={{ objectFit: 'contain', width: '250px', position: 'relative' }}
					src={props.card.image_uris.normal}
					alt={props.card.name}
				/>
				<div className='ml-3 mt-3'>
					<Card className='card w-100' style={{ width: '18rem' }}>
						<Card.Body>
							<Card.Title>{props.card.name}</Card.Title>
							<Card.Subtitle className='mb-2 text-muted'>
								{props.card.flavor_text}
							</Card.Subtitle>
							<Card.Text>
								<div className='container'>
									<div className='row d-flex'>
										<div className='col text-right'>CMC:</div>
										<div className='col text-left'>{props.card.cmc}</div>
									</div>
									<div className='row d-flex'>
										<div className='col text-right'>Type:</div>
										<div className='col text-left'>{props.card.type_line}</div>
									</div>
									<div className='row'>
										<div className='col text-right'>Card Text:</div>
										<div className='col text-left'>
											{props.card.oracle_text}
										</div>
									</div>
									<div className='row'>
										<div className='col text-right'>Rarity:</div>
										<div className='col text-left'>{props.card.rarity}</div>
									</div>
									<div className='row'>
										<div className='col text-right'>Expansion:</div>
										<div className='col text-left'>{props.card.set_name}</div>
									</div>
									<div className='row'>
										<div className='col text-right'>Artist:</div>
										<div className='col text-left'>{props.card.artist}</div>
									</div>
									<div className='row'>
										<div className='col text-right'>Non-Foil Price:</div>
										<div className='col text-left'>
											${props.card.prices.usd}
										</div>
									</div>
								</div>
							</Card.Text>
							<div className='d-flex justify-content-center'>
								<Card.Link href={props.card.purchase_uris.tcgplayer}>
									TCG Market
								</Card.Link>
								<Card.Link href={props.card.related_uris.tcgplayer_decks}>
									TCG Decks
								</Card.Link>
							</div>
						</Card.Body>
					</Card>
				</div>
			</div>
		);
	}

	return <>{cardData}</>;
}

export default Home;
