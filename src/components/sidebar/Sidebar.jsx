import React from "react";
import {
	AiOutlineMenu,
	AiOutlineContacts,
	AiOutlineHome,
	AiOutlineInfoCircle,
	AiOutlineClose,
} from "react-icons/ai";
import { TbBooks } from "react-icons/tb";
import { MdWorkOutline } from "react-icons/md";
import "./sidebar.css";
import { useState } from "react";

const Sidebar = () => {
	const [showMenu, setShowMenu] = useState(false);

	const closeMenu = () => setShowMenu(false);

	return (
		<>
			<aside className={showMenu ? "aside show-menu" : "aside"}>
				<a href='#home' className='nav__logo' onClick={closeMenu}>
					<svg width='40' height='40' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
						<path d='M20 20H80V38H59V85H41V38H20V20Z' fill='currentColor' />
						<rect x='75' y='70' width='18' height='18' className='logo__dot' />
					</svg>
				</a>

				<nav className='nav'>
					<div className='nav__menu'>
						<ul className='nav__list'>
							<li className='nav__item'>
								<a href='#home' className='nav__link' data-tooltip='Home' onClick={closeMenu}>
									<AiOutlineHome />
								</a>
							</li>

							<li className='nav__item'>
								<a href='#about' className='nav__link' data-tooltip='About' onClick={closeMenu}>
									<AiOutlineInfoCircle />
								</a>
							</li>

							<li className='nav__item'>
								<a href='#experience' className='nav__link' data-tooltip='Resume' onClick={closeMenu}>
									<TbBooks />
								</a>
							</li>

							<li className='nav__item'>
								<a href='#work' className='nav__link' data-tooltip='Portfolio' onClick={closeMenu}>
									<MdWorkOutline />
								</a>
							</li>

							<li className='nav__item'>
								<a href='#contact' className='nav__link' data-tooltip='Contact' onClick={closeMenu}>
									<AiOutlineContacts />
								</a>
							</li>
						</ul>
					</div>
				</nav>
				<div className='nav__footer'>
					<span className='copyright'>&copy; 2026</span>
				</div>
			</aside>

			{/* Overlay for mobile */}
			{showMenu && <div className='aside__overlay' onClick={closeMenu}></div>}

			{/* Mobile burger button — hidden on desktop via CSS */}
			<button
				className={`nav__toggle ${showMenu ? "nav__toggle--open" : ""}`}
				onClick={() => setShowMenu(!showMenu)}
				aria-label='Toggle menu'
			>
				{showMenu ? <AiOutlineClose /> : <AiOutlineMenu />}
			</button>
		</>
	);
};

export default Sidebar;
