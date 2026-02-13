import React from "react";
import { FiExternalLink } from "react-icons/fi";
import { HiOutlineAcademicCap } from "react-icons/hi";

const Card = ({ name, offer, issuer, year, credentials }) => {
	return (
		<div className='resume__card'>
			<div className='resume__card-accent'></div>
			<div className='resume__card-body'>
				<div className='resume__card-header'>
					<span className='resume__card-icon'>
						<HiOutlineAcademicCap />
					</span>
					<span className='resume__card-year'>{year}</span>
				</div>
				<h3 className='resume__card-title'>{name}</h3>
				<div className='resume__card-meta'>
					<span className='resume__card-provider'>{offer}</span>
					<span className='resume__card-separator'>on</span>
					<span className='resume__card-issuer'>{issuer}</span>
				</div>
				{credentials && (
					<a
						href={credentials}
						className='resume__card-link'
						target='_blank'
						rel='noopener noreferrer'
					>
						<FiExternalLink />
						<span>View Credential</span>
					</a>
				)}
			</div>
		</div>
	);
};

export default Card;
