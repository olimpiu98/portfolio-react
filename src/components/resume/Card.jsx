import React from "react";
import { GiDiploma } from "react-icons/gi";

const Card = ({ name, offer, issuer, year, credentials }) => {
	return (
		<div className='timeline__item'>
			<span>
				<GiDiploma className='timeline__icon' />
				<span className='timeline__date'>{year}</span>
				<h3 className='timeline__title'>{name}</h3>
				<p className='timeline__text'>
					Offer by {offer} on {issuer}.
				</p>
				<p className='timeline__text'>
					For credentials click <a href={credentials}>here</a>.
				</p>
			</span>
		</div>
	);
};

export default Card;
