import { aboutItems } from "../constants";
import { logo } from "../assets/images";

const About = () => {
	return (
		<section id="about" className="section">
			<div className="container">
				<div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12">
					<p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
						Welcome! I&apos;m Henry, a professional web developer with a knack
						for crafting visually stunning and highly functional websites.
						Combining creativity and technical expertise. I transform your
						vision into digital masterpiece that excels in both appearance and
						performance.
					</p>

					<div className="a">
						{aboutItems.map((item, key) => (
							<div key={key}>
								<div className="">
									<span className="">{item.number}</span>
									<span className="">+</span>
									<span className=""> {item.label}</span>
								</div>
							</div>
						))}

						<img src={logo} alt="logo" width={30} height={30} className="" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
