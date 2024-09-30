// src/components/Popup.jsx

import PropTypes from "prop-types";

const Popup = ({ status, onClose }) => {
	return (
		<div className="fixed inset-0 flex items-center justify-center bg-gray-950 bg-opacity-10 z-50 backdrop-blur">
			<div className="bg-gray-700 mx-5 p-7 lg:p-7 lg:w-2/1 rounded-xl shadow-lg">
				<h3 className="text-xl font-semibold text font-emoji">
					{status === "success"
						? "Submission Successful! 😃"
						: "Submission Failed! 😔"}
				</h3>
				<p className="mt-2 text-sm  text-zinc-400">
					{status === "success"
						? "Thank you for your message! I will get back to you soon."
						: "There was an error submitting your form. Please try again."}
				</p>
				<button onClick={onClose} className="mt-4 btn btn-primary w-full">
					Close
				</button>
			</div>
		</div>
	);
};

Popup.propTypes = {
	status: PropTypes.string,
	onClose: PropTypes.string,
};

export default Popup;
