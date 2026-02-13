import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Resume from "./components/resume/Resume";
import Contact from "./components/contact/Contact";
import Portfolio from "./components/portfolio/Portfolio";
import { useState, useEffect } from "react";
import { BsSun, BsMoon } from "react-icons/bs";

function App() {
	const [theme, setTheme] = useState("main-dark");

	const changeStyle = () => {
		setTheme((prev) => (prev === "main-light" ? "main-dark" : "main-light"));
	};

	// Mobile-only scroll reveal — rich animation system
	useEffect(() => {
		const mq = window.matchMedia("(max-width: 1024px)");
		if (!mq.matches) return;

		/* ---------- assign animation types + stagger ---------- */
		const assign = (selector, type, stagger = 0) => {
			document.querySelectorAll(selector).forEach((el, i) => {
				el.setAttribute("data-reveal", type);
				if (stagger) el.style.transitionDelay = `${i * stagger}s`;
			});
		};

		// Home
		assign(".home__img", "zoom-in");
		assign(".home__greeting", "fade-up");
		assign(".home__name", "clip-up");
		assign(".home__education", "blur-in");
		assign(".intro > .btn", "scale-pop");
		assign(".home__social-link", "bounce-in", 0.08);

		// About
		assign("#about .section__title", "fade-up");
		assign(".about__description", "blur-in");
		assign(".about__download", "scale-pop");

		// Resume
		assign("#resume .section__title", "fade-up");
		assign(".resume__subtitle", "blur-in");
		assign(".resume__card", "card-rise", 0.06);

		// Portfolio
		assign("#work .section__title", "fade-up");
		assign(".work__subtitle", "blur-in");
		assign(".work__filter", "scale-pop", 0.05);
		assign(".work__card", "card-rise", 0.07);

		// Contact
		assign("#contact .section__title", "fade-up");
		assign(".contact__info-card", "fade-right");
		assign(".contact__form", "fade-left");
		assign(".contact__item", "fade-up", 0.1);

		/* ---------- observer ---------- */
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add("revealed");
						observer.unobserve(entry.target);
						// Remove data-reveal after transition so React re-renders
						// don't re-hide elements (class gets stripped, attr stays)
						setTimeout(() => {
							entry.target.removeAttribute("data-reveal");
							entry.target.classList.remove("revealed");
							entry.target.style.transitionDelay = "";
						}, 1000);
					}
				});
			},
			{ threshold: 0.08, rootMargin: "0px 0px -60px 0px" }
		);

		document.querySelectorAll("[data-reveal]").forEach((el) => observer.observe(el));

		return () => observer.disconnect();
	}, []);

	return (
		<div className={`App ${theme}`}>
			<div className='power'>
				<button className='button-theme' onClick={changeStyle} aria-label='Toggle theme'>
					{theme === "main-light" ? <BsMoon /> : <BsSun />}
				</button>
			</div>

			<Sidebar />
			<main>
				<Home />
				<About />
				<Resume />
				<Portfolio />
				<Contact />
			</main>
		</div>
	);
}

export default App;
