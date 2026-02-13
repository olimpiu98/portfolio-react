import React from "react";
import Card from "./Card";
import information from "../../data/education.js";
import "./resume.css";

const Resume = () => {
	return (
		<section className='resume container section' id='experience'>
			<h2 className='section__title'>Courses & Studies</h2>
			<p className='resume__subtitle'>
				Certifications and courses I've completed to sharpen my skills.
			</p>
			<div className='resume__grid'>
				{information.map((item) => (
					<Card
						key={item.id}
						name={item.name}
						offer={item.offer}
						issuer={item.issuer}
						year={item.year}
						credentials={item.credentials}
					/>
				))}
			</div>
		</section>
	);
};

export default Resume;
