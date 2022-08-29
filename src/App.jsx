import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Resume from "./components/resume/Resume";
import Contact from "./components/contact/Contact";
import Portfolio from "./components/portfolio/Portfolio";
import { useState } from "react";
import { AiOutlinePoweroff } from "react-icons/ai";

function App() {
	const [theme, setTheme] = useState("main-light");

	const changeStyle = () => {
		setTheme((prev) => (prev === "main-light" ? "main-dark" : "main-light"));
	};
	return (
		<div className='App'>
			<div className='power'>
				<button className='button-theme' onClick={changeStyle}>
					<AiOutlinePoweroff />
				</button>
			</div>

			<Sidebar />
			<main className={theme}>
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
