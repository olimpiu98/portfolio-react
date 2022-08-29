import React from "react";
import Logo from "../../public/assets/logo.svg";
import { AiOutlineHome, AiOutlineQuestionCircle, AiOutlineInfoCircle } from "react-icons/ai";
import { TbBooks } from "react-icons/tb";
import { MdWorkOutline } from "react-icons/md";
import "./sidebar.css";

const Sidebar = () => {
	return (
		<aside className='aside'>
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
							<a href='' className='nav__link'>
								<AiOutlineQuestionCircle />
							</a>
						</li>

						<li className='nav__item'>
							<a href='' className='nav__link'>
								<AiOutlineQuestionCircle />
							</a>
						</li>
					</ul>
				</div>
			</nav>
			<div className='nav__footer'>
				<span className='copyright'>&copy; 2022-2023</span>
			</div>
		</aside>
	);
};

export default Sidebar;
