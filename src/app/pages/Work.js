import React from "react";

export function Work() {
  return (
    <div
      id="projects"
      className="flex flex-col items-center justify-center mb-16"
    >
      <h1 className="text-4xl text-center font-bold pt-10 mb-12">Projects</h1>
      <div className="w-full max-w-screen-2xl px-8 gap-y-8 grid grid-cols-1 md:grid-cols-3 gap-x-8">
        {/* Aspire */}
        <div className="rounded-3xl flex flex-col bg-gray-900 bg-opacity-80 gap-y-4">
          <div className="border-t-4 border-t-blue-400 rounded-t-xl p-8">
            <img src="/aspire.png" alt="Aspire" className="w-full h-80 mb-4" />
            <h2 className="text-center font-bold text-xl mb-2">Aspire</h2>
            <p className="text-lg text-white font-light mb-2">
              Social habit tracker that combines an AI life coach with a vibrant
              community to help users stay motivated on their personal growth
              journeys. With a visual, color-coded calendar for tracking daily
              progress and habit streaks, Aspire offers personalized support
              through daily motivational messages and tailored habit
              suggestions. Built using Express.js, Tailwind CSS, PostgreSQL,
              Prisma, Supabase, and OpenAI.
            </p>
            <div className="text-center">
              <a
                href="https://github.com/JNikolo/Aspire"
                target="_blank"
                className="text-blue-600 text-lg hover:underline"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
        {/* Insta-next*/}
        <div className="rounded-3xl flex flex-col bg-gray-900 bg-opacity-80 gap-y-4">
          <div className="border-t-4 border-t-blue-400 rounded-t-xl p-8">
            <img src="/insta.png" alt="Aspire" className="w-full h-80 mb-4" />
            <h2 className="text-center font-bold text-xl mb-2">Insta-Next</h2>
            <p className="text-lg text-white font-light mb-2">
              Instagram clone built with Next.js and Tailwind CSS. It features a
              fully functional interface, allowing users to add likes, comments,
              and posts. Firebase is used to store data such as comments, likes,
              and images.
            </p>
            <div className="text-center">
              <a
                href="https://github.com/Esmeraldagmm/insta-next"
                target="_blank"
                className="text-blue-600 text-lg hover:underline"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
        {/* DES */}
        <div className="rounded-3xl flex flex-col bg-gray-900 bg-opacity-80 gap-y-4">
          <div className="border-t-4 border-t-blue-400 rounded-t-xl p-8">
            <img src="/des.png" alt="Aspire" className="w-full h-80 mb-4" />
            <h2 className="text-center font-bold text-xl mb-2">
              DES Encryption
            </h2>
            <p className="text-lg text-white font-light mb-2">
              This project demonstrates how to encrypt and decrypt messages
              using DES, a symmetric-key block cipher. It also includes a Bash
              script to test the implementation and compare it with OpenSSL
              outputs.
            </p>
            <div className="text-center">
              <a
                href="https://github.com/Esmeraldagmm/des-encryption"
                target="_blank"
                className="text-blue-600 text-lg hover:underline"
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
