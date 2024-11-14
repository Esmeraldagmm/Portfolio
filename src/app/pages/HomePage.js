import React from "react";

const HomePage = () => {
  return (
    <div>
      {/* navbar */}
      <div className="navbar bg-base-100">
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
                <a>Experience</a>
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
              <a>Experience</a>
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
      <div className="hero bg-base-200 min-h-screen">
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
              development in React Node.js, Express, MongoDB, and Firebase.
            </p>
            {/* skills, experience, education */}
            <div role="tablist" className="tabs tabs-bordered tabs-lg">
              <input
                type="radio"
                name="my_tabs_1"
                role="tab"
                className="tab text-white"
                aria-label="Skills"
              />
              <div role="tabpanel" className="tab-content p-10">
                <h1 className="text-1xl font-bold">Programming Languages </h1>
                <h1 className="text-1xl font-bold">Web Development </h1>

              </div>

              <input
                type="radio"
                name="my_tabs_1"
                role="tab"
                className="tab text-white"
                aria-label="Experience"
                defaultChecked 
              />
              <div role="tabpanel" className="tab-content p-10">
                <h1 className="text-1xl font-bold">Information Technology Staff</h1>
                <p className="py-1"> - </p>
                <h1 className="text-1xl font-bold">Full Stack Developer Fellow</h1>
                <p className="py-1"> Develop full-stack web applications using JavaScript, 
                  focusing on front-end and back-end technologies with React and Node.js, 
                  while adopting industry best practices, like MVC architecture and test-driven
                  deployment. </p>
                <h1 className="text-1xl font-bold">College Assistant </h1>
                <p className="py-1"> - </p>
                <h1 className="text-1xl font-bold">Social Media Assistant </h1>
                <p className="py-1"> Executed targeted marketing strategies
                  that increased customer engagement and enhanced brand visibility </p>
              </div>

              <input
                type="radio"
                name="my_tabs_1"
                role="tab"
                className="tab text-white"
                aria-label="Education"
              />
               <div role="tabpanel" className="tab-content p-10">
                <h1 className="text-1xl font-bold">CUNY John Jay College of Criminal Justice </h1>
                <p className="py-2"> 2022 - 2026 </p>
                <h1 className="text-1xl font-bold">CodePath: Intermediate Cybersecurity </h1>
                <p className="py-2"> Fall 2024 </p>
                <h1 className="text-1xl font-bold">CodePath: Internship Connection Program </h1>
                <p className="py-2"> Summer 2024 </p>
                <h1 className="text-1xl font-bold">CodePath: Intro to Cybersecurity </h1>
                <p className="py-2"> Spring 2024 </p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
