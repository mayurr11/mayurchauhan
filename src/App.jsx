import { Header } from "./components/";
import { Hero, About, Skill } from "./sections/";

const App = () => {
	return (
		<>
			<Header />
			<main>
				<Hero />
				<About />
				<Skill />
			</main>
		</>
	);
};

export default App;
