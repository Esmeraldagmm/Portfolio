import react from "react";

export function About() {
  return (
    <div id="about" className="container mx-auto px-4">
      <h1 className="text-4xl text-center font-bold font-playfair pt-10 mb-10 mt-5">
        About Me
      </h1>
      <div className="flex flex-col lg:flex-row items-start gap-12">
        <div className="lg:w-1/3 ">
          <img
            src="/image.png"
            className="w-full max-w-sm mx-auto shadow-2xl rounded-full"
          />
        </div>
        <div className="lg:w-2/3">
          <div className="mb-10 font-nunito">
            <p className="mb-4 leading-8">
              Hello! I'm Esmeralda, a Computer Science and Information Security
              student at CUNY John Jay College of Criminal Justice, focused on
              full-stack development.
            </p>
            <p className="mb-4 leading-8">
              I love buildiing innovative and impactful solutions, always
              seeking new challenges in the ever-evolving tech landscape.
            </p>
            <p className="mb-4 leading-8">
              My technical toolkit includes proficiency in JavaScript, C++, and
              Python, along with hands-on experience in full-stack development
              using React, Node.js, Express.js, and Firebase. My background in
              cybersecurity gives me a well-rounded perspective on building
              secure applications.
            </p>
            <p className="mb-4 leading-8">
              I'm always eager to learn, create, and grow, exploring new
              technologies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
