import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from './components/Experience';
import Projects from "./components/Projects";
import ContactLinks from "./components/ContactLinks";
import Footer from "./components/Footer";
import projects from "./content/projects";
import experience from "./content/experience";
import statements from "./content/about-me";

import "./scss/index.scss";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faExternalLinkAlt);

const App = () => (
  <div className="container-lg">
    <div className="home-container">
      <Navbar />
      <Hero />
      <About statements={statements} />
      <h2 id="experience" className="section-title">
        Work Experience
      </h2>
      <Experience projects={experience} />
      <h2 id="projects" className="section-title">
        Projects
      </h2>
      <Projects projects={projects} />
      <div className="background" />
      <h2 id="contact" className="section-title">
        Contact me!
      </h2>
      <ContactLinks />
      <Footer />
    </div>
  </div>
);

export default React.memo(App);
