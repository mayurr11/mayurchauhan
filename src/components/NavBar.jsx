import { useRef, useId, useEffect, useState } from "react";
import { navItems } from "../constants";
import PropTypes from "prop-types";

const NavBar = ({ isNavOpen }) => {
  const lastActiveLink = useRef();
  const activeBox = useRef();
  const linkId = useId();
  const [activeIndex, setActiveIndex] = useState(0);

  const initActiveBox = () => {
    if (!lastActiveLink.current) return;
    activeBox.current.style.top = lastActiveLink.current.offsetTop + 'px';
    activeBox.current.style.left = lastActiveLink.current.offsetLeft + 'px';
    activeBox.current.style.width = lastActiveLink.current.offsetWidth + 'px';
    activeBox.current.style.height = lastActiveLink.current.offsetHeight + 'px';
  };

  // Activate link when section is visible
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]"); // Select all sections by id

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = navItems.findIndex(
              (item) => `#${entry.target.id}` === item.link
            );
            setActiveIndex(index);
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect(); // Clean up observer
  }, []);

  useEffect(() => {
    // Update the active box position when activeIndex changes
    if (activeIndex !== -1) {
      const activeLink = document.querySelectorAll(".nav-link")[activeIndex];
      lastActiveLink.current?.classList.remove("active");
      activeLink.classList.add("active");
      lastActiveLink.current = activeLink;
      initActiveBox();
    }
  }, [activeIndex]);

  // Handle manual click on nav links
  const ActivateCurrentLink = (e) => {
    lastActiveLink.current?.classList.remove("active");
    e.target.classList.add("active");
    lastActiveLink.current = e.target;
    initActiveBox();
  };

  useEffect(() => {
    // Set the default active link to "Home"
    lastActiveLink.current?.classList.add("active");
    initActiveBox();
    window.addEventListener("resize", initActiveBox);

    return () => {
      window.removeEventListener("resize", initActiveBox);
    };
  }, []);

  return (
    <nav className={'navbar ' + (isNavOpen ? 'active' : '')}>
      {navItems.map((navItem, index) => (
        <a
          key={`${linkId}-${index}`}
          href={navItem.link}
          className={`nav-link ${index === activeIndex ? "active" : ""}`}
          ref={index === 0 ? lastActiveLink : null} // Apply ref to the first link ('Home')
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
