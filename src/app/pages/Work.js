import React from "react";
import Image from "next/image";

export function Work() {
  return (
    <div
      id="projects"
      className="flex flex-col items-center justify-center mb-16"
    >
      <h1 className="text-4xl text-center font-bold font-rubik pt-10 mb-12">
        PROJECTS
      </h1>
      <div className="w-full max-w-screen-2xl px-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* VitalView */}
        <div className="rounded-3xl flex flex-col bg-slate-900 bg-opacity-80 gap-y-4">
          <div className="border-t-4 border-t-blue-400 rounded-t-xl p-8">
            <Image
              src="/vitalview.png"
              alt="Vitalview"
              width={300}
              height={300}
              style={{ objectFit: "fill" }}
              className="w-full max-w-sm h-80 mb-4 mx-auto border-none rounded-badge"
            />
            <h2 className="text-center font-bold text-xl mb-2 font-rubik">
              VitalView
            </h2>
            <p className="text-lg text-white font-light font-rubik mb-2 leading-8">
              Web app that enhances lung cancer detection by allowing users to
              upload CT scans for analysis. The AI model identifies cancerous
              regions and presents an interactive 3D model of the scan, making
              it easier for patients to understand the results.
            </p>
            <p className="text-gray-400 pt-3 font-light font-rubik text-md text-center">
              Next.js, Tailwind CSS, Three.js, PyTorch, OpenAI
            </p>
            <div className="pt-3 text-center font-rubik">
              <button className="text-blue-400 border-2 border-blue-400 px-6 py-3 rounded-full mx-auto block hover:bg-blue-400 hover:text-white transition">
                <a
                  href="https://github.com/Esmeraldagmm/vitalview"
                  target="_blank"
                  className="block"
                >
                  GitHub
                </a>
              </button>
            </div>
          </div>
        </div>
        {/* Aspire*/}
        <div className="rounded-3xl flex flex-col bg-slate-900 bg-opacity-80 gap-y-4">
          <div className="border-t-4 border-t-blue-400 rounded-t-xl p-8">
            <Image
              src="/aspire.png"
              alt="Aspire"
              width={300}
              height={300}
              style={{ objectFit: "fill" }}
              className="w-full max-w-sm h-80 mb-4 mx-auto border-none rounded-badge"
            />
            <h2 className="text-center font-bold text-xl mb-2 font-rubik">
              Aspire
            </h2>
            <p className="text-lg text-white font-light font-rubik mb-2 leading-8">
              Social habit-tracker featuring AI-driven coaching providing
              personalized insights tailored to unique habits, community support
              to encourage users to stay motivated on their personal growth
              journeys, and engaging heatmaps to visualize progress.
            </p>
            <p className="text-gray-500 pt-3 font-light font-rubik text-md text-center">
              Express.js, Tailwind CSS, PostgreSQL, Prisma, Supabase, OpenAI
            </p>
            <div className="pt-3 text-center font-rubik">
              <button className="text-blue-400 border-2 border-blue-400 px-6 py-3 rounded-full mx-auto block hover:bg-blue-400 hover:text-white transition">
                <a
                  href="https://github.com/JNikolo/Aspire"
                  target="_blank"
                  className="block"
                >
                  GitHub
                </a>
              </button>
            </div>
          </div>
        </div>
        {/* instagram */}
        <div className="rounded-3xl flex flex-col bg-slate-900 bg-opacity-80 gap-y-4">
          <div className="border-t-4 border-t-blue-400 rounded-t-xl p-8">
            <Image
              src="/insta.png"
              alt="Insta"
              width={300}
              height={300}
              style={{ objectFit: "fill" }}
              className="w-full max-w-sm h-80 mb-4 mx-auto border-none rounded-badge"
            />
            <h2 className="text-center font-bold text-xl mb-2 font-rubik">
              Instagram Clone
            </h2>
            <p className="text-lg text-white font-light font-rubik mb-2 leading-8">
              Instagram clone featuring a fully functional interface, allowing
              users to add and delete posts, likes, and comments.
            </p>
            <p className="text-gray-500 pt-4 font-light font-rubik text-md text-center">
              Next.js, Tailwind CSS, Firebase
            </p>
            <div className="pt-3 text-center font-rubik">
              <button className="text-blue-400 border-2 border-blue-400 px-6 py-3 rounded-full mx-auto block hover:bg-blue-400 hover:text-white transition">
                <a
                  href="https://github.com/Esmeraldagmm/insta-next"
                  target="_blank"
                  className="block"
                >
                  GitHub
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
