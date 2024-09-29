import { skillItem } from "../constants";
import { SkillCard } from "../components";

const Skill = () => {
	return (
		<section className="section">
			<div className="container">
				<h2 className="headline-2">Essential Tools I Use</h2>
				<p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
					Discover the powerful tools and technologies I use to create
					exceptional, high-performing websites & applications.
				</p>
				<div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
					{skillItem.map((item, key) => (
						<SkillCard
							key={key}
							imgSrc={item.imgSrc}
							label={item.label}
							desc={item.desc}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Skill;
