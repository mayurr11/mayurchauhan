import { works } from "../constants";
import { ProjectCard } from "../components";

const Work = () => {
	return (
		<section id="work" className="section">
			<div className="container">
				<h2 className="headline-2 mb-8">My Portfolio Highlights</h2>
				<div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
					{works.map(({imgSrc, title, tags, projectLink}, key) => (
						<ProjectCard
							key={key}
							imgSrc={imgSrc}
							title={title}
							tags={tags}
							projectLink={projectLink}
						/>
					))}
					{/*  */}
				</div>
			</div>
		</section>
	);
};

export default Work;
