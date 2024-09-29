import { useEffect, useRef, useState } from "react";
import { reviews } from "../constants";
import { ReviewCard } from "../components/";

const Review = () => {
  const scrollContainerRef = useRef(null);
  const [isAutoScrollActive, setIsAutoScrollActive] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Disable auto horizontal scroll when scrolling via anchor links
      if (!isAutoScrollActive) return;

      const reviewSection = scrollContainerRef.current;
      if (reviewSection) {
        const scrollTop = window.scrollY;
        const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercentage = scrollTop / documentHeight;

        const maxScrollLeft = reviewSection.scrollWidth - reviewSection.clientWidth;
        reviewSection.scrollLeft = maxScrollLeft * scrollPercentage;
      }
    };

    // Listen for the scroll event on the window
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isAutoScrollActive]);

  useEffect(() => {
    const handleHashChange = () => {
      // Disable auto-scroll briefly while navigating to an anchor link
      setIsAutoScrollActive(false);

      // Re-enable auto-scroll after the browser finishes the jump
      setTimeout(() => {
        setIsAutoScrollActive(true);
      }, 1000); // Adjust delay if needed
    };

    // Listen for hash change events (like #about, #contact, etc.)
    window.addEventListener("hashchange", handleHashChange);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <section id="reviews" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8">What our customers say</h2>

        {/* Scrollable container with hidden scrollbar */}
        <div
          className="flex items-stretch gap-3 overflow-x-scroll hide-scrollbar cursor-grab"
          ref={scrollContainerRef}
        >
          {reviews.map((review, key) => (
            <ReviewCard
              key={key}
              name={review.name}
              imgSrc={review.imgSrc}
              company={review.company}
              content={review.content}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;
