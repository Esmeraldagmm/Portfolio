import React from "react";

import { NavBar } from "../pages/NavBar";
import { About } from "../pages/About";
import { Footer } from "../pages/Footer";
import { Skills } from "../pages/Skills";
import { Work } from "../pages/Work";
import { Education } from "../pages/Education";
import { Experience } from "../pages/Experience";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <About />
      <Skills />
      <Work />
      <Experience />
      <Education />
      <Footer />
    </div>
  );
};

export default HomePage;
