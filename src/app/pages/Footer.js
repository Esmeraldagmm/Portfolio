import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export function Footer() {
  return (
    <div>
      <footer className="footer footer-center bg-base-200 text-base-content rounded p-10 font-rubik">
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover" href="#about">
            About
          </a>
          <a className="link link-hover" href="#skills">
            Skills
          </a>
          <a className="link link-hover" href="#projects">
            Projects
          </a>
          <a className="link link-hover" href="#experience">
            Experience
          </a>
          <a className="link link-hover" href="#education">
            Education
          </a>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
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
        </nav>
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            Esmeralda Gonzalez
          </p>
        </aside>
      </footer>
    </div>
  );
}
