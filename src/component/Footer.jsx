import React, { useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);

  return (
    <footer className=" py-4 text-white text-center">
      <div className="container mx-auto">
        <p className="text-sm">&copy; Copyright AB14 |  Designed by Aniket.</p>
      </div>
      <button
        className={`${
          showScroll ? "block" : "hidden"
        } fixed bottom-10 right-10  text-white rounded-full p-3 transition-opacity duration-300 ease-in-out hover:opacity-80`}
        onClick={scrollTop}
      >
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;
