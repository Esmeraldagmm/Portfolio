"use client";
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow-gray-300 hover:shadow-gray-300"
            >
              <li>
                <a href="#home">
                  Home
                </a>
              </li>
              <li>
                <a href="#about">
                  About
                </a>
              </li>
              <li>
                <a href="#work" >
                  Work
                </a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Portfolio</a>
        </div>
        <div className="navbar-center hidden lg:flex hover:shadow-gray-300">
          {/* large screen nav bar options */}
          <ul className="menu menu-horizontal px-1 text-white  hover:shadow-gray-300">
            <li> 
              <a href="#home">
                Home
              </a>
            </li>
            <li>
              <a href="#about" >
                About
              </a>
            </li>
            <li>
              <a href="#work">
                Work
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a
            href="#contact"
            className="btn text-white"
          >
            Contact
          </a>
        </div>
      </div>
      {/* hero */}
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(/nyc.png)",
        }}
      >
        <div id="home" className="hero-overlay bg-opacity-0"></div>
        <div className="hero-content text-neutral-content text-left">
          <div className="max-w-md">
            <h2 className="text-2xl font-bold text-white pl-20">
              Software Engineer
            </h2>
            <h2 className="text-4xl pt-2 font-bold text-white pl-20">
              Hi, I'm <span className="text-royal-blue">Esmeralda</span>
            </h2>
            <h2 className="mb-5 text-4xl font-bold text-white pl-20 pb-20">
              Computer Science Major at John Jay College
            </h2>
          </div>
        </div>
      </div>
      {/* about */}
      <h1 id="about" className="text-5xl text-center font-bold pt-10">
        About Me
      </h1>
      <div className="hero bg-base-200  bg-black">
        <div className="hero-content flex-col lg:flex-row">
          <img src="/image.png" className="max-w-sm shadow-2xl rounded-full" />
          <div className="pt-7 pl-10">
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
                  <div>Node.js</div>
                  <div>Express.js</div>
                  <div>Next.js</div>
                  <div>Tailwind CSS</div>
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
                <p> </p>
                <h1 className="text-1xl pt-3 font-bold text-blue-400">
                  Full Stack Developer Fellow
                </h1>
                <p>
                  {" "}
                  Develop full-stack web applications using JavaScript, focusing
                  on front-end and back-end technologies with React and Node.js,
                  while adopting industry best practices, like MVC architecture
                  and test-driven deployment.{" "}
                </p>
                <h1 className="text-1xl pt-3 font-bold text-blue-400">
                  College Assistant{" "}
                </h1>
                <p> </p>
                <h1 className="text-1xl pt-3 font-bold text-blue-400">
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
      {/* projects */}
      <h1 id="work" className="bg-black text-5xl font-bold pb-10 text-center">
        Work
      </h1>
      <div className="bg-black flex w-full flex-col lg:flex-row md:flex-row justify-center pb-10">
        <div className="card bg-base-300 rounded-box flex-grow lg:max-w-lg md:max-w-sm sm:max-w-lg border-solid border-4 border-blue-400">
          {/* display project one */}
          <img
            src="/insta.png"
            alt="Project One"
            className="rounded-xl object-cover w-full"
          />
          {/* transition to a description upon hover */}
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-xl">
            <div className="text-center text-white">
              <h3 className="text-2xl font-bold">Insta-Next</h3>
              <p className="mt-2">
                Instagram clone built with Next.js and Tailwind CSS. It features
                a fully functional interface, allowing users to add likes,
                comments, and posts. Firebase is used to store data such as
                comments, likes, and images.
              </p>
            </div>
          </div>
        </div>
        {/* divide projects */}
        <div className="divider lg:divider-horizontal md:divider-horizontal sm:divider"></div>
        <div className="card bg-base-300 rounded-box flex-grow lg:max-w-lg md:max-w-sm sm:max-w-lg border-splid border-4 border-blue-400 bg-white">
          <img
            src="/aspire.png"
            alt="Project Two"
            className="rounded-xl object-cover w-full"
          />
          {/* transition to a description upon hover */}
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-xl">
            <div className="text-center text-white">
              <h3 className="text-2xl font-bold">Aspire</h3>
              <p className="mt-2">Social Habit Tracker with AI powered coach</p>
            </div>
          </div>
        </div>
      </div>
      {/* github */}
      <div className="flex items-center justify-center pb-10">
        <button className="bg-blue-400 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full flex items-center border-2">
          <img src="/github.png" alt="github icon" className="w-7 h-7" />
          GitHub
        </button>
      </div>
      {/* contact */}
      <div id="contact" className="bg-black items-center pb-20">
        <div className="hero-content flex-col lg:flex-row-reverse shrink-0">
          <div className="text-center lg:text-left lg:pl-20">
            <h1 className="text-5xl font-bold text-center">Contact Me!</h1>
            {/* resume, email, github */}
            <div className="grid grid-cols-3 gap-10 pt-10">
              <button className="bg-blue-400 hover:bg-royal-blue text-white font-bold py-2 px-4 rounded-full flex items-center border-2">
                <img src="/email.png" alt="email icon" className="w-10 h-10" />
                Email
              </button>
              <button className="bg-blue-400 hover:bg-royal-blue text-white font-bold py-2 px-4 rounded-full border-2">
                Resume
              </button>
              <button className="bg-blue-400 hover:bg-royal-blue text-white font-bold py-2 px-4 rounded-full flex items-center border-2">
                <img
                  src="/linkedin.webp"
                  alt="linkedin icon"
                  className="w-10 h-10"
                />
                LinkedIn
              </button>
            </div>
          </div>
          {/* input for email message */}
          <div className="card bg-base-100 w-full max-w-lg shadow-2xl shrink-0 ">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Your Name</span>
                </label>
                <input
                  type="name"
                  className="input input-bordered focus:border-blue-400"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Your Email</span>
                </label>
                <input
                  type="email"
                  className="input input-bordered  focus:border-blue-400"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Message</span>
                </label>
                <textarea
                  type="message"
                  className="input input-bordered focus:border-blue-400"
                  rows="5"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary bg-blue-400 hover:bg-royal-blue border-1 border-white">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
