const Preloader = () => {
	return (
		<div className="flex items-center justify-center min-h-screen">
			<div
				className="w-12 h-12 p-2 rounded-full bg-sky-500"
				style={{
					aspectRatio: "1",
					mask: "conic-gradient(#0000 10%, #000), linear-gradient(#000 0 0) content-box",
					WebkitMask:
						"conic-gradient(#0000 10%, #000), linear-gradient(#000 0 0) content-box",
					WebkitMaskComposite: "source-out",
					maskComposite: "subtract",
					animation: "l3 1s infinite linear",
				}}
			></div>
		</div>
	);
};

export default Preloader;
