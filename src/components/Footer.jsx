import { sitemap, socials } from "../constants";
import { ButtonPrimary } from "./Button";
import { logo } from "../assets/images";

const Footer = () => {
	return (
		<footer className="section">
			<div className="container">
				<div className="lg:grid lg:grid-cols-2 ">
					<div className="mb-10">
						<h2 className="headline-1 mb-8 lg:max-w-[12ch]">Let&apos;s work together today!</h2>
						<ButtonPrimary
							href="mailto:mayurchauhan1107@gmail.com"
							label="Start Project"
							icon="chevron_right"
						/>
					</div>

					<div className="grid grid-cols-2 gap-4 lg:pl-20">
						<div>
							<p className="mb-2">Sitemap</p>
							<ul>
								{sitemap.map((link, key) => (
									<li key={key}>
										<a 
                                            href={link.href} 
                                            className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200"
                                        >
											{link.label}
										</a>
									</li>
								))}
							</ul>
						</div>

						<div>
							<p className="mb-2">Socials</p>
							<ul>
								{socials.map((link, key) => (
									<li key={key}>
										<a 
                                        href={link.href} 
                                        target="_blank" 
                                        className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200"
                                        >
											{link.label}
										</a>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>

                <div className="flex items-center justify-between pt-10 mb-8">
                    <a href="" className="">
                        <img   
                            src={logo} 
                            width={85}
                            height={85}
                            alt="logo"
                        />
                    </a>

                    <p className="text-zinc-500 text-sm">
                        &copy; {new Date().getFullYear()} <span className="text-zinc-200">Mayur Chauhan</span>
                    </p>
                </div>
			</div>
		</footer>
	);
};

export default Footer;
