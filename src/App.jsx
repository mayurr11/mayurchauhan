import { Footer, Header } from "./components/";
import { Hero, About, Skill, Work, Review, Contact } from "./sections/";

const App = () => {
	return (
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
		</>
	);
};

export default App;
