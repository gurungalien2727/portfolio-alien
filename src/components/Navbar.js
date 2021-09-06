import React from "react";
import Scrollchor from "react-scrollchor";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <nav className="navbar">
      <Scrollchor to="#experience">Work Experience</Scrollchor>
        <Scrollchor to="#projects">Projects</Scrollchor>
        <Scrollchor to="#contact">Contact</Scrollchor>
      </nav>
    </div>
  );
};

export default React.memo(Navbar);
