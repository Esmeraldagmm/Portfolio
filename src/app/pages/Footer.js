import react from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export function Footer() {
  return (
    <div>
      <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover">About</a>
          <a className="link link-hover">Work</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <FaGithub className="text-4xl" />
            <FaLinkedin className="text-4xl" />
            <MdEmail className="text-4xl" />
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
