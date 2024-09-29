import { socialLinks } from "../constants";

const Contact = () => {
	return (
		<section id="contact" className="section">
			<div className="container lg:grid lg:grid-cols-2 lg:items-stretch">
				<div className="mb-12 lg:mb-0 lg:flex lg:flex-col">
					<h2 className="headline-2 lg:max-w-[12ch]">
						Contact me for collaboration
					</h2>
					<p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] lg:max-w-[30ch]">
						Reach out today to discuss your project needs and start
						collaborating on something amazing!
					</p>
					<div className="flex items-center gap-2 mt-auto">
						{socialLinks.map(({ href, icon: Icon }, key) => (
							<a 
                            href={href} 
                            target="_blank" 
                            key={key}
                            className="w-12 h-12 grid place-items-center ring-inset ring-2 ring-zinc-50/5 rounded-lg transition-colors hover:bg-zinc-50 hover:text-zinc-950 active:bg-zinc-50/80"
                            >
								<Icon />
							</a>
						))}
					</div>
				</div>
				<form action="" method="POST" className="xl:pl-10 2xl:pl-20">
					<div className="md:grid md:items-center md:grid-cols-2 md:gap-2">
						<div className="mb-4 ">
							<label htmlFor="name" className="label">
								Name
							</label>
							<input
								type="text"
								name="Name"
								id="name"
								className="text-field"
								autoComplete="name"
								required
								placeholder="Your Name"
							/>
						</div>
						<div className="mb-4">
							<label htmlFor="email" className="label">
								Email
							</label>
							<input
								type="email"
								name="Email"
								id="email"
								className="text-field"
								autoComplete="email"
								required
								placeholder="email@example.com"
							/>
						</div>
					</div>
					<div className="mb-4">
						<label htmlFor="message" className="label">
							Message
						</label>
						<textarea
							name="Message"
							id="message"
							placeholder="Hi!"
							required
							className="text-field resize-none min-h-32 max-h-80"
						></textarea>
					</div>
					<button type="submit" className="btn btn-primary [&]:max-w-full w-full justify-center">
						Submit
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
