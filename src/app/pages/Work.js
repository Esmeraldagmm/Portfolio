import React from "react";

export function Work() {
  return (
    <div
      id="projects"
      className="flex flex-col items-center justify-center mb-16"
    >
      <h1 className="text-4xl text-center font-bold font-playfair pt-10 mb-12">
        Projects
      </h1>
      <div className="w-full max-w-screen-2xl px-8 gap-y-8 grid grid-cols-1 md:grid-cols-3 gap-x-8">
        {/* Aspire */}
        <div className="rounded-3xl flex flex-col bg-gray-900 bg-opacity-80 gap-y-4">
          <div className="border-t-4 border-t-blue-400 rounded-t-xl p-8">
            <img src="/aspire.png" alt="Aspire" className="w-full h-80 mb-4" />
            <h2 className="text-center font-bold text-xl mb-2 font-lora">
              Aspire
            </h2>
            <p className="text-lg text-white font-light font-nunito mb-2 leading-8">
              Social habit-tracker featuring AI-driven coaching providing
              personalized insights tailored to unique habits, community support
              to encourage users to stay motivated on their personal growth
              journeys, and engaging heatmaps to visualize progress.
            </p>
            <p className="text-gray-500 pt-3 font-light font-nunito text-md text-center">
              Express.js, Tailwind CSS, PostgreSQL, Prisma, Supabase, OpenAI
            </p>
            <div className="pt-3 text-center font-nunito">
              <a
                href="https://github.com/JNikolo/Aspire"
                target="_blank"
                className="text-blue-600 text-xl hover:underline"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
        {/* Insta-next*/}
        <div className="rounded-3xl flex flex-col bg-gray-900 bg-opacity-80 gap-y-4">
          <div className="border-t-4 border-t-blue-400 rounded-t-xl p-8">
            <img src="/insta.png" alt="Insta" className="w-full h-80 mb-4" />
            <h2 className="text-center font-bold text-xl mb-2 font-lora">
              Instagram Clone
            </h2>
            <p className="text-lg text-white font-light font-nunito mb-2 leading-8">
              Instagram clone featuring a fully functional interface, allowing
              users to add posts likes, and comments.
            </p>
            <p className="text-gray-500 pt-3 font-light font-nunito text-md text-center">
              Next.js, Tailwind CSS, Firebase
            </p>
            <div className="pt-3 font-nunito text-center">
              <a
                href="https://github.com/Esmeraldagmm/insta-next"
                target="_blank"
                className="text-blue-600 text-xl hover:underline"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
        {/* DES */}
        <div className="rounded-3xl flex flex-col bg-gray-900 bg-opacity-80 gap-y-4">
          <div className="border-t-4 border-t-blue-400 rounded-t-xl p-8">
            <img src="/des.png" alt="DES" className="w-full h-80 mb-4" />
            <h2 className="text-center font-bold text-xl mb-2 font-lora">
              DES Encryption
            </h2>
            <p className="text-lg text-white font-light font-nunito mb-2 leading-8">
              This project demonstrates how to encrypt and decrypt messages
              using DES, a symmetric-key block cipher. It also includes a Bash
              script to test the implementation and compare it with OpenSSL
              outputs.
            </p>
            <p className="text-gray-500 pt-4 font-light font-nunito text-md text-center">
              Python, Bash Script
            </p>
            <div className="pt-3 text-center font-nunito">
              <a
                href="https://github.com/Esmeraldagmm/des-encryption"
                target="_blank"
                className="text-blue-600 text-xl hover:underline"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
