import React from "react";
import Logo from "../../public/assets/logo.svg";
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
	return (
		<>
			<aside className={showMenu ? "aside show-menu" : "aside"}>
				<a href='#home' className='nav__logo'>
					<img src={Logo} alt='' />
				</a>

				<nav className='nav'>
					<div className='nav__menu'>
						<ul className='nav__list'>
							<li className='nav__item'>
								<a href='#home' className='nav__link'>
									<AiOutlineHome />
								</a>
							</li>

							<li className='nav__item'>
								<a href='#about' className='nav__link'>
									<AiOutlineInfoCircle />
								</a>
							</li>

							<li className='nav__item'>
								<a href='#experience' className='nav__link'>
									<TbBooks />
								</a>
							</li>

							<li className='nav__item'>
								<a href='#work' className='nav__link'>
									<MdWorkOutline />
								</a>
							</li>

							<li className='nav__item'>
								<a href='#contact' className='nav__link'>
									<AiOutlineContacts />
								</a>
							</li>
						</ul>
					</div>
				</nav>
				<div className='nav__footer'>
					<span className='copyright'>&copy; 2022-2023</span>
				</div>
			</aside>
			<div
				className={showMenu ? "nav__toggle nav_toggle-open hide-desktop" : "nav__toggle"}
				onClick={() => setShowMenu(!showMenu)}
			>
				{showMenu ? <AiOutlineClose /> : <AiOutlineMenu />}
			</div>
		</>
	);
};

export default Sidebar;
