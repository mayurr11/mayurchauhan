import { Header } from "./components/";
import { Hero, About } from "./sections/";

const App = () => {
	return (
		<>
			<Header />
			<main>
				<Hero />
				<About />
			</main>
		</>
	);
};

export default App;
