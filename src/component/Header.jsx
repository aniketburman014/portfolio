import React, { useState, useEffect } from "react";

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 60) { // Change this value as needed
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 right-0 bg-black py-6 text-white flex justify-center transition-all ${
        scrolled ? "scrolled" : ""
      }`}
    >
      <button className="mx-10 transform transition-all duration-300 hover:scale-105" onClick={() => scrollToSection("about")}>
        About
      </button>
      <button className="mx-10 transform transition-all duration-300 hover:scale-110" onClick={() => scrollToSection("project")}>
        Project
      </button>
      <button className="mx-10 transform transition-all duration-300 hover:scale-110 " onClick={() => scrollToSection("skills")}>
        Skills
      </button>
      <button className="mx-10 transform transition-all duration-300 hover:scale-110" onClick={() => scrollToSection("education")}>
        Education
      </button>
      <button className="mx-10 transform transition-all duration-300 hover:scale-110" onClick={() => scrollToSection("contact")}>
        Contact
      </button>
    </header>
  );
};

export default Header;
