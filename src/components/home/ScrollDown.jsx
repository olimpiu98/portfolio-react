import React from "react";

const ScrollDown = () => {
	return (
		<div className='scroll__down'>
			<a href='#about' className='mouse__wrapper'></a>
			<span className='home_scroll-name'>Scroll Down</span>
			<span className='mouse'>
				<span className='wheel'></span>
			</span>
		</div>
	);
};

export default ScrollDown;
