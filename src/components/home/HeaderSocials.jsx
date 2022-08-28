import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const HeaderSocials = () => {
	return (
		<div className='home__socials'>
			<a
				href='https://www.linkedin.com/in/olimpiu-ticudean/'
				className='home__social-link'
				target='_blank'
			>
				<FaLinkedin />
			</a>

			<a href='https://twitter.com/tic_oli' className='home__social-link' target='_blank'>
				<FaTwitter />
			</a>

			<a href='https://github.com/olimpiu98' className='home__social-link' target='_blank'>
				<FaGithub />
			</a>

			<a href='https://leetcode.com/olimpiu98/' className='home__social-link' target='_blank'>
				<SiLeetcode />
			</a>
		</div>
	);
};

export default HeaderSocials;
