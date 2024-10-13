import PropTypes from "prop-types";

const ratings = new Array(5).fill({
	icon: "star",
	style: { fontVariationSettings: '"FILL" 1' },
});



const ReviewCard = ({ name, content, company, imgSrc }) => {
	return (
		<div className="bg-zinc-800 p-5 rounded-xl min-w-[320px] flex  flex-col lg:min-w-[420px]">
			<p className="text-zinc-400 mb-8">
				{content}
			</p>
			<div className="flex items-center gap-2 mt-auto">
				<figure className="img-box rounded-lg">
					<img
						src={imgSrc}
						alt={name}
						width={14}
						height={14}
						loading='lazy'
						className="img-cover"
					/>
				</figure>
				<div>
					<p>{name}</p>
					<p className="text-xs text-zinc-400 tracking-wider">
						{company}
					</p>
				</div>
			</div>
		</div>
	);
};

ReviewCard.propTypes = {
	name: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
	company: PropTypes.string.isRequired,
	imgSrc: PropTypes.string.isRequired,
};

export default ReviewCard;
