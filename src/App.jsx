import { useState, useEffect } from "react";
import { Footer, Header } from "./components";
import { Hero, About, Skill, Work, Review, Contact } from "./sections";
import { InfinitySpin } from "react-loader-spinner"; // Import a loader from the library

const App = () => {
  const [loading, setLoading] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFade(true);
      setTimeout(() => setLoading(false), 500); // Delay for fade-out effect
    }, 2000); // Simulate loading time
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className={`fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-500 ${fade ? "opacity-0" : "opacity-100"}`}>
          <div className="absolute inset-0  backdrop:blur-sm"></div>
          <InfinitySpin
            height={100}
            width={100}
            color="rgb(125,211,255)"
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#4f46e5"
            strokeWidth={5}
            strokeWidthSecondary={5}
          />
        </div>
      ) : (
        <>
          <Header />
          <main>
            <Hero />
            <About />
            <Skill />
            <Work />
            <Review />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
