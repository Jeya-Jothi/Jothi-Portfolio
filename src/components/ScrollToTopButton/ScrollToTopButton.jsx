import { useEffect, useState } from "react";
import "./ScrollToTopButton.css";

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      if (!aboutSection) return;

      const aboutTop = aboutSection.offsetTop;
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      if (scrollPosition >= aboutTop) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="scroll-top-btn-div">
      <button
        className={`scroll-top-btn ${showButton ? "show" : ""}`}
        onClick={scrollToTop}
      >
        ⇡
      </button>
    </div>
  );
};

export default ScrollToTopButton;
