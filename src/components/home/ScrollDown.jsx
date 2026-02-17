import React from "react";

const ScrollDown = () => {
	return (
		<a href='#about' className='scroll__down' aria-label='Scroll to about section'>
			<span className='home__scroll-name'>Scroll Down</span>
			<span className='mouse'>
				<span className='wheel'></span>
			</span>
		</a>
	);
};

export default ScrollDown;
