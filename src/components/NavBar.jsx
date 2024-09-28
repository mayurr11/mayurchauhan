import { useRef, useId, useEffect } from "react";
import { navItems } from "../constants";
import PropTypes from "prop-types";

const NavBar = ({ isNavOpen }) => {
	const lastActiveLink = useRef();
	const activeBox = useRef();
	const linkId = useId();

	const initActiveBox = () => {
		activeBox.current.style.top = lastActiveLink.current.offsetTop + 'px';
		activeBox.current.style.left = lastActiveLink.current.offsetLeft + 'px';
		activeBox.current.style.width = lastActiveLink.current.offsetWidth + 'px';
		activeBox.current.style.height = lastActiveLink.current.offsetHeight + 'px';
	};

	useEffect(() => {
		// Set the default active link to "Home"
		lastActiveLink.current?.classList.add('active');
		initActiveBox();
	}, []);

	window.addEventListener('resize', initActiveBox);

	const ActivateCurrentLink = (e) => {
		lastActiveLink.current?.classList.remove('active');
		e.target.classList.add('active');
		lastActiveLink.current = e.target;

		activeBox.current.style.top = e.target.offsetTop + 'px';
		activeBox.current.style.left = e.target.offsetLeft + 'px';
		activeBox.current.style.width = e.target.offsetWidth + 'px';
		activeBox.current.style.height = e.target.offsetHeight + 'px';
	};

	return (
		<nav className={'navbar ' + (isNavOpen ? 'active' : '')}>
			{navItems.map((navItem, index) => (
				<a
					key={`${linkId}-${index}`}
					href={navItem.link}
					className={`nav-link ${navItem.label === "Home" ? "active" : ""}`}
					ref={navItem.label === "Home" ? lastActiveLink : null} // Apply ref to 'Home'
					onClick={ActivateCurrentLink}
				>
					{navItem.label}
				</a>
			))}
			<div className="active-box" ref={activeBox}></div>
		</nav>
	);
};

NavBar.propTypes = {
	isNavOpen: PropTypes.bool.isRequired,
};

export default NavBar;
