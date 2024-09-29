import { Header } from "./components/";
import { Hero, About, Skill, Work } from "./sections/";

const App = () => {
	return (
		<>
			<Header />
			<main>
				<Hero />
				<About />
				<Skill />
				<Work />
			</main>
		</>
	);
};

export default App;
