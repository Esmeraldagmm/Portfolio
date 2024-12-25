import react from "react";

export function About() {
  return (
    <div>
      <h1 id="about" className="text-4xl text-center font-bold pt-10">
        About Me
      </h1>
      <div className="hero bg-base-200  bg-black">
        <div className="hero-content flex-col lg:flex-row">
          <img src="/image.png" className="max-w-sm shadow-2xl rounded-full" />
          <div className="pt-7">
            <p className="py-6">
              Hello! I'm Esmeralda, a Computer Science and Information Security
              student at CUNY John Jay College of Criminal Justice, focused on
              full stack development and diving into cybersecurity. I love
              building innovative and creative solutions that make a positive
              impact while constantly learning and growing in the field of
              software engineering. My technical skills include proficiency in
              JavaScript, C++, Python and front-end/back-end development in
              React Node.js, Express, and Firebase.
            </p>
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
    </div>
  );
}
