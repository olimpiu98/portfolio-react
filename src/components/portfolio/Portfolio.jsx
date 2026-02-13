import React, { useState } from "react";
import portfoliodata from "../../data/portfoliodata";
import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import "./portfolio.css";

const filters = [
	{ key: "starred", label: "Starred" },
	{ key: "react", label: "React" },
	{ key: "vanilla", label: "Vanilla" },
];

const Portfolio = () => {
	const defaultPortData = portfoliodata.filter((element) => element.visible === true);
	const [items, setItems] = useState(defaultPortData);
	const [activeFilter, setActiveFilter] = useState("starred");

	const filterItem = (filterName) => {
		setActiveFilter(filterName);
		if (filterName === "starred") {
			setItems(defaultPortData);
		} else {
			setItems(portfoliodata.filter((el) => el.framework === filterName));
		}
	};

	return (
		<section className='work container section' id='work'>
			<h2 className='section__title'>Portfolio</h2>
			<p className='work__subtitle'>A selection of projects I've built and shipped.</p>

			<div className='work__filters'>
				{filters.map((f) => (
					<button
						key={f.key}
						className={`work__filter ${activeFilter === f.key ? "work__filter--active" : ""}`}
						onClick={() => filterItem(f.key)}
					>
						{f.label}
					</button>
				))}
			</div>

			<div className='work__grid'>
				{items.map((elem) => {
					const { id, image, title, category, demo, github } = elem;
					return (
						<article className='work__card' key={id}>
							<div className='work__thumbnail'>
								<img src={image} alt={title} className='work__img' />
							</div>

							<div className='work__body'>
								<span className='work__badge'>{category}</span>
								<h3 className='work__title'>{title}</h3>
								<div className='work__actions'>
									<a
										href={github}
										className='work__action'
										target='_blank'
										rel='noreferrer'
									>
										<FaGithub />
										<span>Source</span>
									</a>
									<a
										href={demo}
										className='work__action work__action--primary'
										target='_blank'
										rel='noreferrer'
									>
										<FiArrowUpRight />
										<span>Live Demo</span>
									</a>
								</div>
							</div>
						</article>
					);
				})}
			</div>
		</section>
	);
};

export default Portfolio;
