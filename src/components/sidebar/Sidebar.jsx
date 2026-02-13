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

	const links = [
		{ href: "#home", icon: <AiOutlineHome />, label: "Home" },
		{ href: "#about", icon: <AiOutlineInfoCircle />, label: "About" },
		{ href: "#experience", icon: <TbBooks />, label: "Resume" },
		{ href: "#work", icon: <MdWorkOutline />, label: "Portfolio" },
		{ href: "#contact", icon: <AiOutlineContacts />, label: "Contact" },
	];

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
							{links.map((link, i) => (
								<li className='nav__item' key={link.label} style={{ "--i": i }}>
									<a
										href={link.href}
										className='nav__link'
										data-tooltip={link.label}
										onClick={closeMenu}
									>
										{link.icon}
										<span className='nav__label'>{link.label}</span>
									</a>
								</li>
							))}
						</ul>
					</div>
				</nav>

				<div className='nav__footer'>
					<span className='copyright'>&copy; 2026</span>
				</div>

				<button
					className='nav__toggle nav__toggle--open'
					onClick={() => setShowMenu(false)}
					aria-label='Close menu'
				>
					<AiOutlineClose />
				</button>
			</aside>

			{showMenu && <div className='aside__overlay' onClick={closeMenu}></div>}

			<button
				className={`nav__toggle ${showMenu ? "nav__toggle--hidden" : ""}`}
				onClick={() => setShowMenu(true)}
				aria-label='Open menu'
			>
				<AiOutlineMenu />
			</button>
		</>
	);
};

export default Sidebar;
