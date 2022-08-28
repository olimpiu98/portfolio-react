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
				<img src={avatardef} alt='' className='home__img' />
				<h1 className='home__name'>Olimpiu Ticudean</h1>
				<span className='home__education'>Web developer</span>
				<HeaderSocials />
				<a href='#contact' className='btn'>
					Contact me!
				</a>
				<ScrollDown />
			</div>
			<Shapes />
		</section>
	);
};

export default Home;
