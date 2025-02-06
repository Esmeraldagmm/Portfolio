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
            <p className="mb-4 leading-9">
              Hello! I'm Esmeralda, a Computer Science and Information Security
              student at John Jay College, focused on full-stack development.
            </p>
            <p className="mb-4 leading-9">
              I love buildiing innovative and impactful solutions. I am always
              seeking new challenges to learn, create, and grow!
            </p>
            <p className="mb-4 leading-9">
              My technical toolkit includes proficiency in JavaScript, C++, and
              Python, along with hands-on experience in full-stack development
              using React, Node.js, Express.js, and Firebase. My background in
              cybersecurity gives me a well-rounded perspective on building
              secure applications.
            </p>
            <button className="text-blue-400 border-2 border-blue-400 px-6 py-3 rounded-full mx-auto block hover:bg-blue-400 hover:text-white transition">
              <a
                href="https://drive.google.com/file/d/1fWLIyh34B0b5x3Y9Vwl3W0cqWi9ypHYX/view?usp=sharing"
                target="_blank"
                className="block"
              >
                View Resume
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
