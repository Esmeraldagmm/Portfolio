import React from "react";

import { NavBar } from "../pages/NavBar";
import { About } from "../pages/About";
import { Footer } from "../pages/Footer";
import { Skills } from "../pages/Skills";
import { Temp } from "../pages/temp";
import { Work } from "../pages/Work";
import { Education } from "../pages/Education";

const HomePage = () => {
  return (
    <div>
      {/* navbar and hero */}
      <NavBar />
      {/* about */}
      <About />
      {/* skills */}
      <Skills />
      <Temp />
      {/* experience */}
      {/* projects */}
      <Work />
      {/* education */}
      <Education />
      {/* footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
