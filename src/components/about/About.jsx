import React from "react";
import "./about.css";

const About = () => {
	return (
		<section className='container' id='about'>
			<h2 className='section__title'>About Me</h2>
			<div className='about__container grid'>
				<div className='about__data grid'>
					<div className='about__info'>
						<p className='about__description'>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus eum impedit ullam
							alias tempore inventore ipsam tenetur? Consectetur odit corporis itaque facere quod
							similique? Ratione, optio commodi! Numquam, quas veritatis.
						</p>
						<div className='about__download'>
							<a href='#' className='btn '>
								Download CV
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
