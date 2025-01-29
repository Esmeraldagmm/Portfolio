import react from "react";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";

export function Skills() {
  return (
    <div
      id="skills"
      className="flex flex-col items-center justify-center mb-16"
    >
      <h1 className="text-4xl text-center font-bold font-playfair pt-10 mb-12">
        Skills
      </h1>
      <div className="w-full max-w-screen-2xl px-8 gap-y-8 grid grid-cols-1 md:grid-cols-3 gap-x-8">
        {/* programmming languages */}
        <div className="rounded-3xl flex flex-col bg-gray-900 gap-y-4">
          <div className="bg-blue-400 rounded-t-xl p-8">
            <h2 className="text-center font-bold text-xl font-lora">
              Programming Languages
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-6 p-4font-nunito">
            <div className="flex items-center gap-2">
              <p className="text-xl md:text-2xl">C++</p>
              <img
                src="https://icon.icepanel.io/Technology/svg/C%2B%2B-%28CPlusPlus%29.svg"
                alt="C++"
                className="w-10 h-10"
              />
            </div>
            <div className="flex items-center gap-2">
              <p className="text-xl md:text-2xl">JavaScript</p>
              <img
                src="https://icon.icepanel.io/Technology/svg/JavaScript.svg"
                alt="JavaScript"
                className="w-10 h-10"
              />
            </div>
            <div className="flex items-center gap-2">
              <p className="text-xl md:text-2xl">HTML</p>
              <img
                src="https://icon.icepanel.io/Technology/svg/HTML5.svg"
                alt="HTML"
                className="w-10 h-10"
              />
            </div>
            <div className="flex items-center gap-2">
              <p className="text-xl md:text-2xl">CSS</p>
              <img
                src="https://icon.icepanel.io/Technology/svg/CSS3.svg"
                alt="HTML"
                className="w-10 h-10"
              />
            </div>
            <div className="flex items-center gap-2">
              <p className="text-xl md:text-2xl">Python</p>
              <img
                src="https://icon.icepanel.io/Technology/svg/Python.svg"
                alt="Python"
                className="w-10 h-10"
              />
            </div>
          </div>
        </div>
        {/* frameworks and libraries */}
        <div className="rounded-3xl flex flex-col bg-gray-900 gap-y-4">
          <div className="bg-blue-400 rounded-t-xl p-8">
            <h2 className="text-center font-bold text-xl font-lora">
              Frameworks and Libraries
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-6 p-4 font-nunito">
            <div className="flex items-center gap-2">
              <p className="text-xl md:text-2xl">React </p>
              <img
                src="https://icon.icepanel.io/Technology/svg/React.svg"
                alt="React"
                className="w-10 h-10"
              />
            </div>
            <div className="flex items-center gap-2">
              <p className="text-xl md:text-2xl">Node.js</p>
              <img
                src="https://icon.icepanel.io/Technology/svg/Node.js.svg"
                alt="Node.js"
                className="w-10 h-10"
              />
            </div>
            <div className="flex items-center gap-2">
              <p className="text-xl md:text-2xl">Express.js</p>
              <img
                src="https://icon.icepanel.io/Technology/svg/Express.svg"
                alt="Express.js"
                className="w-10 h-10"
              />
            </div>
            <div className="flex items-center gap-2">
              <p className="text-xl md:text-2xl">Next.js</p>
              <img
                src="https://icon.icepanel.io/Technology/svg/Next.js.svg"
                alt="Next.js"
                className="w-10 h-10"
              />
            </div>
            <div className="flex items-center gap-2">
              <p className="text-xl md:text-2xl">Tailwind CSS</p>
              <img
                src="https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg"
                alt="Tailwind CSS"
                className="w-10 h-10"
              />
            </div>
            <div className="flex items-center gap-2">
              <p className="text-xl md:text-2xl">Vite.js</p>
              <img
                src="https://icon.icepanel.io/Technology/svg/Vite.js.svg"
                alt="Vite.js"
                className="w-10 h-10"
              />
            </div>
          </div>
        </div>
        {/* databases */}
        <div className="rounded-3xl flex flex-col bg-gray-900 gap-y-4">
          <div className="bg-blue-400 rounded-t-xl p-8">
            <h2 className="text-center font-bold text-xl font-lora">
              Databases
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-6 p-4 font-nunito">
            <div className="flex items-center gap-2">
              <p className="text-xl md:text-2xl">PostgreSQL</p>
              <img
                src="https://icon.icepanel.io/Technology/svg/PostgresSQL.svg"
                alt="PostreSQL"
                className="w-10 h-10"
              />
            </div>
            <div className="flex items-center gap-2">
              <p className="text-xl md:text-2xl">Firebase</p>
              <img
                src="https://icon.icepanel.io/Technology/svg/Firebase.svg"
                alt="Firebase"
                className="w-10 h-10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
