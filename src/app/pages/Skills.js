import React from "react";
import Image from "next/image";

export function Skills() {
  return (
    <div
      id="skills"
      className="flex flex-col items-center justify-center mb-16"
    >
      <h1 className="text-4xl text-center font-bold font-rubik pt-10 mb-12">
        SKILLS
      </h1>
      <div className="w-full max-w-screen-2xl px-8 gap-y-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8">
        {/* programmming languages */}
        <div className="rounded-3xl flex flex-col bg-slate-900 gap-y-4">
          <div className="bg-blue-400 rounded-t-xl p-8">
            <h2 className="text-center font-bold text-xl font-rubik">
              Programming Languages
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-6 p-4 font-rubik">
            <div className="flex items-center gap-2">
              <p className="text-xl md:text-2xl">C++</p>
              <Image
                src="https://icon.icepanel.io/Technology/svg/C%2B%2B-%28CPlusPlus%29.svg"
                alt="C++"
                width={300}
                height={300}
                className="w-10 h-10"
              />
            </div>
            <div className="flex items-center gap-2">
              <p className="text-xl md:text-2xl">JavaScript</p>
              <Image
                src="https://icon.icepanel.io/Technology/svg/JavaScript.svg"
                alt="JavaScript"
                width={300}
                height={300}
                className="w-10 h-10"
              />
            </div>
            <div className="flex items-center gap-2">
              <p className="text-xl md:text-2xl">HTML</p>
              <Image
                src="https://icon.icepanel.io/Technology/svg/HTML5.svg"
                alt="HTML"
                width={300}
                height={300}
                className="w-10 h-10"
              />
            </div>
            <div className="flex items-center gap-2">
              <p className="text-xl md:text-2xl">CSS</p>
              <Image
                src="https://icon.icepanel.io/Technology/svg/CSS3.svg"
                alt="HTML"
                width={300}
                height={300}
                className="w-10 h-10"
              />
            </div>
            <div className="flex items-center gap-2">
              <p className="text-xl md:text-2xl">Python</p>
              <Image
                src="https://icon.icepanel.io/Technology/svg/Python.svg"
                alt="Python"
                width={300}
                height={300}
                className="w-10 h-10"
              />
            </div>
          </div>
        </div>
        {/* frameworks and libraries */}
        <div className="rounded-3xl flex flex-col bg-slate-900 gap-y-4">
          <div className="bg-blue-400 rounded-t-xl p-8">
            <h2 className="text-center font-bold text-xl font-rubik">
              Frameworks and Libraries
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-6 p-4 font-rubik">
            <div className="flex items-center gap-2">
              <p className="text-xl md:text-2xl">React </p>
              <Image
                src="https://icon.icepanel.io/Technology/svg/React.svg"
                alt="React"
                width={300}
                height={300}
                className="w-10 h-10"
              />
            </div>
            <div className="flex items-center gap-2">
              <p className="text-xl md:text-2xl">Node.js</p>
              <Image
                src="https://icon.icepanel.io/Technology/svg/Node.js.svg"
                alt="Node.js"
                width={300}
                height={300}
                className="w-10 h-10"
              />
            </div>
            <div className="flex items-center gap-2">
              <p className="text-xl md:text-2xl">Express.js</p>
              <Image
                src="https://icon.icepanel.io/Technology/svg/Express.svg"
                alt="Express.js"
                width={300}
                height={300}
                className="w-10 h-10"
              />
            </div>
            <div className="flex items-center gap-2">
              <p className="text-xl md:text-2xl">Next.js</p>
              <Image
                src="https://icon.icepanel.io/Technology/svg/Next.js.svg"
                alt="Next.js"
                width={300}
                height={300}
                className="w-10 h-10"
              />
            </div>
            <div className="flex items-center gap-2">
              <p className="text-xl md:text-2xl">Tailwind CSS</p>
              <Image
                src="https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg"
                alt="Tailwind CSS"
                width={300}
                height={300}
                className="w-10 h-10"
              />
            </div>
            <div className="flex items-center gap-2">
              <p className="text-xl md:text-2xl">Vite.js</p>
              <Image
                src="https://icon.icepanel.io/Technology/svg/Vite.js.svg"
                alt="Vite.js"
                width={300}
                height={300}
                className="w-10 h-10"
              />
            </div>
          </div>
        </div>
        {/* databases */}
        <div className="rounded-3xl flex flex-col bg-slate-900 gap-y-4">
          <div className="bg-blue-400 rounded-t-xl p-8">
            <h2 className="text-center font-bold text-xl font-rubik">
              Databases
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-6 p-4 font-rubik">
            <div className="flex items-center gap-2">
              <p className="text-xl md:text-2xl">PostgreSQL</p>
              <Image
                src="https://icon.icepanel.io/Technology/svg/PostgresSQL.svg"
                alt="PostreSQL"
                width={300}
                height={300}
                className="w-10 h-10"
              />
            </div>
            <div className="flex items-center gap-2">
              <p className="text-xl md:text-2xl">Firebase</p>
              <Image
                src="https://icon.icepanel.io/Technology/svg/Firebase.svg"
                alt="Firebase"
                width={300}
                height={300}
                className="w-10 h-10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
