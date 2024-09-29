import { aboutItems } from "../constants";
import { logo } from "../assets/images";

const About = () => {
	return (
		<section id="about" className="section">
			<div className="container">
				<div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 ">
					<p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
						Hello <span className="font-emoji">👋</span>, I&apos;m Mayur Chauhan, a skilled web developer with a passion
						for crafting visually stunning, high-performance websites. By
						combining creative design and technical expertise, I deliver
						seamless digital solutions customized to suit your unique needs.
					</p>

					<div className="flex flex-wrap items-center gap-4 md:gap-7">
						{aboutItems.map((item, key) => (
							<div key={key}>
								<div className="flex items-center md:mb-2">
									<span className="text-2xl font-bold md:text-4xl">
										{item.number}
									</span>
									<span className="text-sky-400 font-semibold md:text-3xl">
										{" "}
										+{" "}
									</span>
								</div>
								<span className="text-sm text-zinc-400">{item.label}</span>
							</div>
						))}

						<img
							src={logo}
							alt="logo"
							width={85}
							height={85}
							className="ml-auto md:block md:w-[80px] md:h-[80px] hidden"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
