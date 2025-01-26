import react from "react";

export function About() {
  return (
    <div id="about" className="container mx-auto px-4">
      <h1 className="text-4xl text-center font-bold pt-10 mb-10">About Me</h1>
      <div className="flex flex-col lg:flex-row items-start gap-12">
        <div className="lg:w-1/3 ">
          <img
            src="/image.png"
            className="w-full max-w-sm mx-auto shadow-2xl rounded-full"
          />
        </div>
        <div className="lg:w-2/3 pt-10">
          <div className="mb-10">
            <p className="mb-4">
              Hello! I'm Esmeralda, a Computer Science and Information Security
              student at CUNY John Jay College of Criminal Justice, focused on
              full stack development and diving into cybersecurity.
            </p>
            <p className="mb-4">
              As an aspiring software engineer, I thrive on creating innovative
              solutions that make a positive impact. I'm constantly pushing the
              boundaries of my knowledge, embracing new challenges in the
              ever-evolving tech landscape.
            </p>
            <p className="mb-4">
              My technical toolkit includes proficiency in JavaScript, C++, and
              Python, complemented by hands-on experience in full-stack
              development using React, Node.js, Express, and Firebase. I'm
              always eager to expand my skill set and learn technologies in both
              software development and cybersecurity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
