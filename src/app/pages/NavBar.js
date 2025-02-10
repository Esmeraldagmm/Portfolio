import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export function NavBar() {
  return (
    <div>
      {/* navbar */}
      <div className="navbar fixed z-10 bg-black">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow-gray-300 hover:shadow-gray-300 font-nunito"
            >
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#education">Education</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-end hidden lg:flex hover:shadow-gray-300">
          {/* large screen nav bar options */}
          <ul className="menu menu-horizontal px-1 text-white font-nunito">
            <li>
              <a
                href="#about"
                className="hover:text-gray-200 transition-colors duration-200"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-gray-200 transition-colors duration-200"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="hover:text-gray-200 transition-colors duration-200"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-gray-200 transition-colors duration-200"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="hover:text-gray-200 transition-colors duration-200"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#education"
                className="hover:text-gray-200 transition-colors duration-200"
              >
                Education
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(/nyc.png)",
        }}
      >
        <div id="home" className="hero-overlay bg-opacity-0"></div>
        <div className="hero-content text-neutral-content text-left mb-40">
          <div className="max-w-md">
            <h2 className="text-3xl text-white font-bold font-nunito">
              Software Engineer
            </h2>
            <h2 className="text-5xl pt-2 gradient-text">Esmeralda Gonzalez</h2>
          </div>
        </div>
        {/* contact */}
        <div className="flex flex-row items-center space-x-4 pr-60 pt-10">
          <a href="https://github.com/Esmeraldagmm" target="_blank">
            <FaGithub className="text-4xl" />
          </a>
          <a href="https://www.linkedin.com/in/esmeraldagm/" target="_blank">
            <FaLinkedin className="text-4xl" />
          </a>
          <a href="mailto:esmeraldamenera27@gmail.com">
            <MdEmail className="text-4xl" />
          </a>
        </div>
      </div>
    </div>
  );
}
