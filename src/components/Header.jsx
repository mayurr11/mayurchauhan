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
						<img src={logo} height={85} width={85} alt="Mayur Chauhan" />
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
					href="https://wa.me/+917359808697?text=Hello%20there!"
					target="_blank"
					className="btn btn-secondary max-md:hidden md:justify-self-end"
				>
					Message me <span className="material-symbols-rounded" aria-hidden="true">
					chevron_right
					</span>
				</a>
			</div>
		</header>
	);
};

export default Header;
