import React from "react";
import Typewriter from "./Typewriter";
import Scrollchor from "react-scrollchor";

const Hero = () => {
  return (
    <div className="hero-container">
      <Typewriter className="hero-title" text="Alien Gurung" />
      <div className="hero-description">
        I'm a 4th year undergraduate student studying Computer Science at Troy University. I'm looking for
        full time new grad or entry level opportunities in Software Develpment / Software Engineering roles.
        <br />
        Check out my <Scrollchor to="#projects">side-projects</Scrollchor>{" "}
        below.
      </div>
    </div>
  );
};

export default React.memo(Hero);
