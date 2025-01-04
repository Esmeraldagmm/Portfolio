import react from "react";

export function About() {
  return (
    <div className="container mx-auto px-4">
      <h1 id="about" className="text-4xl text-center font-bold pt-10 mb-12">
        About Me
      </h1>
      <div className="flex flex-col lg:flex-row items-start gap-12 bg-black">
        <div className="lg:w-1/3">
          <img
            src="/image.png"
            className="w-full max-w-sm mx-auto shadow-2xl rounded-full"
          />
        </div>
        <div className="lg:w-2/3">
          <div className="mb-8">
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
          {/* skills, experience, education */}
          <div role="tablist" className="tabs tabs-bordered tabs-lg">
            <input
              type="radio"
              name="my_tabs_1"
              role="tab"
              className="tab text-white font-bold"
              aria-label="Skills"
              defaultChecked
            />
            <div role="tabpanel" className="tab-content p-10">
              <h1 className="text-1xl font-bold text-blue-400">
                Programming Languages{" "}
              </h1>
              <div className="grid grid-cols-5 gap-2 pt-2">
                <div>C++</div>
                <div>JavaScript</div>
                <div>Python</div>
              </div>
              <h1 className="text-1xl pt-3 font-bold text-blue-400">
                Frameworks and Libraries{" "}
              </h1>
              <div class="grid grid-cols-5 gap-2 pt-2">
                <div>React</div>
                <div>Node</div>
                <div>Express</div>
                <div>Next</div>
                <div>Tailwind</div>
              </div>
              <h1 className="text-1xl pt-3 font-bold text-blue-400">
                {" "}
                Databases{" "}
              </h1>
              <div class="grid grid-cols-5 gap-2 pt-2">
                <div>PostgreSQL</div>
                <div>Firebase</div>
              </div>
            </div>

            <input
              type="radio"
              name="my_tabs_1"
              role="tab"
              className="tab text-white font-bold"
              aria-label="Experience"
            />
            <div role="tabpanel" className="tab-content p-10">
              <h1 className="text-1xl font-bold text-blue-400">
                IT Support Intern
              </h1>
              <p>
                {" "}
                Assess and identify technology needs, assist with the setup of
                new computer equipment, and troubleshoot hardware and software
                issues in collaboration with the DOE Help Center.{" "}
              </p>
              <h1 className="text-1xl pt-4 font-bold text-blue-400">
                Full Stack Developer Fellow
              </h1>
              <p>
                {" "}
                Develop full-stack web applications, focusing on front-end and
                back-end technologies, while adopting industry best practices.{" "}
              </p>
              <h1 className="text-1xl pt-4 font-bold text-blue-400">
                College Assistant{" "}
              </h1>
              <p>
                {" "}
                Design engaging flyers to promote departmental services,
                enhancing student participation. Utilize office management
                software to efficiently record and track student data.
              </p>
              <h1 className="text-1xl pt-4 font-bold text-blue-400">
                Social Media Assistant{" "}
              </h1>
              <p>
                {" "}
                Executed targeted marketing strategies that increased customer
                engagement and enhanced brand visibility by 25%.{" "}
              </p>
            </div>

            <input
              type="radio"
              name="my_tabs_1"
              role="tab"
              className="tab text-white font-bold"
              aria-label="Education"
            />
            <div role="tabpanel" className="tab-content p-10">
              <h1 className="text-1xl font-bold text-blue-400">
                CUNY John Jay College of Criminal Justice{" "}
              </h1>
              <p> 2022 - 2026 </p>
              <h1 className="text-1xl pt-3 font-bold text-blue-400">
                CodePath: Intermediate Cybersecurity{" "}
              </h1>
              <p> Fall 2024 </p>
              <h1 className="text-1xl pt-3 font-bold text-blue-400">
                CodePath: Internship Connection Program{" "}
              </h1>
              <p> Summer 2024 </p>
              <h1 className="text-1xl pt-3 font-bold text-blue-400">
                CodePath: Intro to Cybersecurity{" "}
              </h1>
              <p> Spring 2024 </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
