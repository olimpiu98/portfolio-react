import React from "react";
import avatardef from "../../public/avatar/avatardef.jpg";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import "./home.css";
import Shapes from "./Shapes";

const Home = () => {
	return (
		<section className='home container' id='home'>
			<div className='intro'>
				<div className='home__img-wrapper'>
					<img src={avatardef} alt='Olimpiu Ticudean' className='home__img' />
				</div>
				<span className='home__greeting'>Hello, I'm</span>
				<h1 className='home__name'>Olimpiu Ticudean</h1>
				<span className='home__education'>Web Developer</span>
				<HeaderSocials />
				<a href='#contact' className='btn'>
					Get in Touch
				</a>
			</div>
			<ScrollDown />
			<Shapes />
		</section>
	);
};

export default Home;
