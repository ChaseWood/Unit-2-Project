import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';

function SingleCard() {
	const [singleCard, setSingleCard] = useState({});

	const makeApiCall = async (card) => {
		const res = await fetch(
			`https://api.scryfall.com/cards/named?exact=cancel`
		);
		const json = await res.json();

		setSingleCard(json);
	};

	useEffect(() => {
		makeApiCall();
	}, []);

	let singleCardContainer = '';
	if (singleCard.name) {
		singleCardContainer = (
			<div className='d-flex p-2 justify-content-center flex-wrap grid-gap-1 align-items-start'>
				<img
					className=' mt-3'
					style={{ objectFit: 'contain', width: '250px', position: 'relative' }}
					src={singleCard.image_uris.normal}
					alt={singleCard.name}
				/>
				<div className='ml-3 mt-3'>
					<Card className='card w-100' style={{ width: '18rem' }}>
						<Card.Body>
							<Card.Title>{singleCard.name}</Card.Title>
							<Card.Subtitle className='mb-2 text-muted'>
								{singleCard.flavor_text}
							</Card.Subtitle>
							<Card.Text>
								<div className='container'>
									<div className='row d-flex'>
										<div className='col text-right'>CMC:</div>
										<div className='col text-left'>{singleCard.cmc}</div>
									</div>
									<div className='row d-flex'>
										<div className='col text-right'>Type:</div>
										<div className='col text-left'>{singleCard.type_line}</div>
									</div>
									<div className='row'>
										<div className='col text-right'>Card Text:</div>
										<div className='col text-left'>
											{singleCard.oracle_text}
										</div>
									</div>
									<div className='row'>
										<div className='col text-right'>Rarity:</div>
										<div className='col text-left'>{singleCard.rarity}</div>
									</div>
									<div className='row'>
										<div className='col text-right'>Expansion:</div>
										<div className='col text-left'>{singleCard.set_name}</div>
									</div>
									<div className='row'>
										<div className='col text-right'>Artist:</div>
										<div className='col text-left'>{singleCard.artist}</div>
									</div>
									<div className='row'>
										<div className='col text-right'>Non-Foil Price:</div>
										<div className='col text-left'>
											${singleCard.prices.usd}
										</div>
									</div>
								</div>
							</Card.Text>
							<div className='d-flex justify-content-center'>
								<Card.Link href={singleCard.purchase_uris.tcgplayer}>
									TCG Market
								</Card.Link>
								<Card.Link href={singleCard.related_uris.tcgplayer_decks}>
									TCG Decks
								</Card.Link>
							</div>
						</Card.Body>
					</Card>
				</div>
			</div>
		);
	}

	return <>{singleCardContainer}</>;
}

export default SingleCard;
