import { avatar1, heroBanner } from "../assets/images";
import { ButtonPrimary, ButtonOutline } from "../components/";

const Hero = () => {
	const handleDownload = () => {
		const link = document.createElement("a");
		link.href = "/cv/Mayur_Chauhan_CV.pdf"; // Replace with the actual path to your CV
		link.download = "Mayur_Chauhan_CV.pdf"; // Set the name for the downloaded file
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};
	return (
		<section id="home" className="pt-28 lg:pt-36">
			<div className="container lg:grid lg:grid-cols-2 items-center lg:gap-10">
				<div>
					<div className="flex items-center gap-3">
						<figure className="img-box w-9 h-9 rounded-lg">
							<img
								src={avatar1}
								alt="Mayur Chauhan"
								className="img-cover"
								width={40}
								height={40}
							/>
						</figure>

						<div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
							<span className="relative w-2 h-2 rounded-full bg-emerald-400">
								<span className="absolute w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
							</span>
							Available for work
						</div>
					</div>
					<h2 className="headline-1 max-w-[15ch]  lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
						{/* sm:max-w-[20ch] */}
						Building Scalable Modern Websites for the Future
					</h2>
					<div className="flex items-center gap-3">
						<ButtonPrimary
							label="Download CV"
							icon="download"
							onClick={handleDownload} 
						/>
						<ButtonOutline
							href="#about"
							label="Scroll down"
							icon="arrow_downward"
						/>
					</div>
				</div>

				<div className="lg:block max-md:mt-12">
					<figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[60px] overflow-hidden">
						<img
							src={heroBanner}
							width={656}
							height={800}
							alt="Mayur Chauhan"
							className=""
						/>
					</figure>
				</div>
			</div>
		</section>
	);
};

export default Hero;
