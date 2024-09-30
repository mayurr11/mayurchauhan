// src/components/Popup.jsx

import PropTypes from "prop-types";

const Popup = ({ status, onClose }) => {
	return (
		<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-20 z-50 backdrop-blur">
			<div className="bg-zinc-900 mx-5 p-7 lg:p-7 lg:w-fit max-md:w-4/5 rounded-xl shadow-2xl">
				<h3 className="text-xl lg:text-2xl font-semibold text font-emoji">
					 {status === 'success' ? 'Submission Successful! 😃' : 'Submission Failed! 🙁'}
				</h3>
				<p className="mt-2 text-sm  text-zinc-400">
					{status === "success"
						? "Thank you for your message! I will get back to you soon."
						: "There was an error submitting your form. Please try again."}
				</p>
				<button onClick={onClose} className="mt-4 btn btn-primary min-w-full text-center flex justify-center">
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
