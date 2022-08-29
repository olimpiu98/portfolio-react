import React, { useState } from "react";
import portfoliodata from "../../data/portfoliodata";
import { GoGlobe, GoLogoGithub } from "react-icons/go";
import "./portfolio.css";

const Portfolio = () => {
	const [items, setItems] = useState(portfoliodata);

	return (
		<section className='work container section' id='work'>
			<h2 className='section__title'>Portfolio</h2>

			<div className='work__filters'>
				<span className='work__item'>All</span>
				<span className='work__item'>Vanilla</span>
				<span className='work__item'>React</span>
				<span className='work__item'>Angular</span>
			</div>
			<div className='work__container grid'>
				{items.map((elem) => {
					const { id, image, title, category } = elem;
					return (
						<div className='work__card' key={id}>
							<div className='work__thumbnail'>
								<img src={image} alt='' className='work__img' />
								<div className='work__mask'></div>
							</div>
							<span className='work__category'>{category}</span>
							<h3 className='work__title'>{title}</h3>
							<a href='#' className='work__button'>
								<GoGlobe />
							</a>
							<a href='#' className='work__button2'>
								<GoLogoGithub />
							</a>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default Portfolio;
