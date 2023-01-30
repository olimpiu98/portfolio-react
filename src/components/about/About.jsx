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
							I'm currently in the process of building several different projects to further expand my understanding and experience with web development. From creating basic websites to more complex and interactive ones, I'm always looking for new challenges to tackle.
						</p>
						<div className='about__download'>
							<a href='../../public/Olimpiu_Ticudean_Resume.pdf' className='btn '>
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
