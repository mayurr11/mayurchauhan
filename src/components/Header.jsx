import { useState } from "react";
import { logo } from "../assets/images";
import NavBar from "./NavBar";

const Header = () => {
	const [isNavOpen, setIsNavOpen] = useState(false);
	
	return (
		<header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
			<div
				className={`max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 
			{/*md:grid md:grid-cols-3*/}
			`}
			>
				<h1>
					<a href="/" className="logo">
						<img src={logo} height={40} width={40} alt="Mayur Chauhan" />
					</a>
				</h1>
				<div className="relative md:justify-self-center">
					<button
						className="menu-btn md:hidden"
						onClick={() => setIsNavOpen((prev) => !prev)}
					>
						<span className="material-symbols-rounded">
							{isNavOpen ? "close" : "menu"}
						</span>
					</button>
					<NavBar isNavOpen={isNavOpen} />
				</div>
				<a
					href="#contact"
					className="btn btn-secondary max-md:hidden md:justify-self-end"
				>
					Contact Me
				</a>
			</div>
		</header>
	);
};

export default Header;
