// src/App.js
import { Analytics } from "@vercel/analytics/react";
import { useState, useEffect } from "react";
import { Footer, Header } from "./components";
import { Hero, About, Skill, Work, Review, Contact } from "./sections";
import Preloader from "./components/Preloader"; // Import the Preloader component
import "./App.css"; // If you have global styles

const App = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 2000); // Adjust the time for how long you want to show the loader
		return () => clearTimeout(timer);
	}, []);

	return (
		<>
			{loading ? (
				<Preloader /> // Use the Preloader component here
			) : (
				<>
					<Header />
					<main>
						<Hero />
						<About />
						<Skill />
						<Work />
						<Review />
						<Contact />
					</main>
					<Footer />
					<Analytics />
				</>
			)}
		</>
	);
};

export default App;
