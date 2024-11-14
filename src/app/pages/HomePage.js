import React from "react";

const HomePage = () => {
  return (
    <div>
      {/* navbar */}
      <div className="navbar bg-base-100 bg-black">
        <div className="navbar-start">
          <div className="dropdown">
            {/* dropdown menu that is hidden on large screens and shown on small screens */}
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            {/* dropdown menu in small screen */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Work</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Portfolio</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          {/* large screen nav bar options */}
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Work</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Contact</a>
        </div>
      </div>
      {/* hero */}
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(/nyc.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-20"></div>
        <div className="hero-content text-neutral-content text-left">
          <div className="max-w-md">
            <h2 className="mb-5 text-3xl font-bold text-white">
              Software Engineer
            </h2>
            <h2 className="text-5xl font-bold text-white">
              Hi, I'm <span className="text-royal-blue">Esmeralda</span>
            </h2>
            <h2 className="mb-5 text-5xl font-bold text-white">
              Computer Science Major at John Jay College
            </h2>
          </div>
        </div>
      </div>
      {/* about */}
      <div className="hero bg-base-200 min-h-screen bg-black">
        <div className="hero-content flex-col lg:flex-row">
          <img src="/image.png" className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">About Me</h1>
            <p className="py-6">
              Hello! I'm Esmeralda, a Computer Science and Information Security
              student at CUNY John Jay College of Criminal Justice, focused on
              full stack development and diving into cybersecurity. I am
              passionate about using technology to create impactful solutions
              that promote societal good. My technical skills include
              proficiency in JavaScript, C++, Python and front-end/back-end
              development in React Node.js, Express, and Firebase.
            </p>
            {/* skills, experience, education */}
            <div role="tablist" className="tabs tabs-bordered tabs-lg">
              <input
                type="radio"
                name="my_tabs_1"
                role="tab"
                className="tab text-white font-bold"
                aria-label="Skills"
              />
              <div role="tabpanel" className="tab-content p-10">
                <h1 className="text-1xl font-bold text-pink-700">
                  Programming Languages{" "}
                </h1>
                <div class="grid grid-cols-4 gap-2 pt-2">
                  <div>C++</div>
                  <div>JavaScript</div>
                  <div>Python</div>
                </div>
                <h1 className="text-1xl pt-3 font-bold text-pink-700">
                  Frameworks and Libraries{" "}
                </h1>
                <div class="grid grid-cols-4 gap-2 pt-2">
                  <div>React</div>
                  <div>Node.js</div>
                  <div>Express.js</div>
                  <div>Next.js</div>
                  <div>Tailwind CSS</div>
                </div>
                <h1 className="text-1xl pt-3 font-bold text-pink-700">
                  {" "}
                  Databases{" "}
                </h1>
                <div class="grid grid-cols-4 gap-2 pt-2">
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
                defaultChecked
              />
              <div role="tabpanel" className="tab-content p-10">
                <h1 className="text-1xl font-bold text-pink-700">
                  Information Technology Staff
                </h1>
                <p> - </p>
                <h1 className="text-1xl pt-3 font-bold text-pink-700">
                  Full Stack Developer Fellow
                </h1>
                <p>
                  {" "}
                  Develop full-stack web applications using JavaScript, focusing
                  on front-end and back-end technologies with React and Node.js,
                  while adopting industry best practices, like MVC architecture
                  and test-driven deployment.{" "}
                </p>
                <h1 className="text-1xl pt-3 font-bold text-pink-700">
                  College Assistant{" "}
                </h1>
                <p> - </p>
                <h1 className="text-1xl pt-3 font-bold text-pink-700">
                  Social Media Assistant{" "}
                </h1>
                <p>
                  {" "}
                  Executed targeted marketing strategies that increased customer
                  engagement and enhanced brand visibility{" "}
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
                <h1 className="text-1xl font-bold text-pink-700">
                  CUNY John Jay College of Criminal Justice{" "}
                </h1>
                <p> 2022 - 2026 </p>
                <h1 className="text-1xl pt-3 font-bold text-pink-700">
                  CodePath: Intermediate Cybersecurity{" "}
                </h1>
                <p> Fall 2024 </p>
                <h1 className="text-1xl pt-3 font-bold text-pink-700">
                  CodePath: Internship Connection Program{" "}
                </h1>
                <p> Summer 2024 </p>
                <h1 className="text-1xl pt-3 font-bold text-pink-700">
                  CodePath: Intro to Cybersecurity{" "}
                </h1>
                <p> Spring 2024 </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* projects */}
      <h1 className="text-5xl font-bold text-center pb-10">My Work</h1>
      <div className="flex w-full flex-col lg:flex-row">
        <div className="card bg-base-300 rounded-box grid h-32 flex-grow place-items-center">
          content
        </div>
        <div className="divider lg:divider-horizontal"></div>
        <div className="card bg-base-300 rounded-box grid h-32 flex-grow place-items-center">
          content
        </div>
        
      </div>
    </div>
  );
};

export default HomePage;
