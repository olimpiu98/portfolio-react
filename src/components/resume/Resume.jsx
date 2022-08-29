import React from "react";
import Card from "./Card";
import information from "../../data/education.js";
import "./resume.css";

const Resume = () => {
	return (
		<section className='resume container section' id='experience'>
			<h2 className='section__title'>Courses & Studies</h2>
			<div className='resume__container  grid'>
				<div className='timeline grid'>
					{information.map((item) => {
						if (item.category === "education") {
							return (
								<Card
									key={item.id}
									name={item.name}
									offer={item.offer}
									issuer={item.issuer}
									year={item.year}
									credentials={item.credentials}
								/>
							);
						}
					})}
				</div>

				<div className='timeline grid mobile-hide'>
					{information.map((item) => {
						if (item.category === "education2") {
							return (
								<Card
									key={item.id}
									name={item.name}
									offer={item.offer}
									issuer={item.issuer}
									year={item.year}
									credentials={item.credentials}
								/>
							);
						}
					})}
				</div>
			</div>
		</section>
	);
};

export default Resume;
