// src/App.js
import { Analytics } from "@vercel/analytics/react";
import { useState, useEffect } from "react";
import { Footer, Header } from "./components";
import { Hero, About, Skill, Work, Review, Contact } from "./sections";
import Preloader from "./components/Preloader"; 
import "./App.css"; 

const App = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 1500); // Adjust the time for how long you want to show the loader
		return () => clearTimeout(timer);
	}, []);

	return (
		<>
			{loading ? (
				<Preloader /> 
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
