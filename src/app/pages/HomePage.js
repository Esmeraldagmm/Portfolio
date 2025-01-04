import React from "react";

import { NavBar } from "../pages/NavBar";
import { About } from "../pages/About";
import { Work } from "../pages/Work";
import { Footer } from "../pages/Footer";

const HomePage = () => {
  return (
    <div>
      {/* navbar and hero */}
      <NavBar />
      {/* about */}
      <About />
      {/* projects */}
      {/* <h1 id="work" className="bg-black text-4xl font-bold pb-10 text-center">
        My Work
      </h1> */}
      {/* <div className="bg-black flex w-full flex-col lg:flex-row md:flex-row md:pl-5 md:pr-5 sm:pl-5 sm:pr-5 justify-center pb-10">
        <div className="card bg-base-300 rounded-box flex-grow lg:max-w-lg md:max-w-sm sm:max-w-sm border-solid border-4 border-blue-400">
          display project one */}
      {/* <img
            src="/insta.png"
            alt="Project One"
            className="rounded-xl object-cover w-full"
          /> */}
      {/* transition to a description upon hover */}
      {/* <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-xl">
            <div className="text-center text-white">
              <h3 className="text-2xl font-bold">Insta-Next</h3>
              <p className="mt-2 pl-2 pr-2 pb-5">
                Instagram clone built with Next.js and Tailwind CSS. It features
                a fully functional interface, allowing users to add likes,
                comments, and posts. Firebase is used to store data such as
                comments, likes, and images.
              </p> */}
      {/* <button className="gradient-color text-black font-bold py-2 px-4 rounded-full items-center border-2">
                <a
                  href="https://github.com/Esmeraldagmm/insta-next"
                  target="_blank"
                >
                  View
                </a>
              </button>
            </div> */}
      {/* </div>
        </div> */}
      {/* divide projects */}
      {/* <div className="divider lg:divider-horizontal md:divider-horizontal sm:divider"></div>
        <div className="card bg-base-300 rounded-box flex-grow lg:max-w-lg md:max-w-sm sm:max-w-sm border-splid border-4 border-blue-400 bg-white">
          <img
            src="/aspire.png"
            alt="Project Two"
            className="rounded-xl object-cover w-full"
          /> */}
      {/* transition to a description upon hover */}
      {/* <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-xl">
            <div className="text-center text-white">
              <h3 className="text-2xl font-bold">Aspire</h3>
              <p className="mt-2 pl-2 pr-2 pb-5">
                Social habit tracker that combines an AI life coach with a
                vibrant community to help users stay motivated on their personal
                growth journeys. With a visual, color-coded calendar for
                tracking daily progress and habit streaks, Aspire offers
                personalized support through daily motivational messages and
                tailored habit suggestions. Built using Express.js, Tailwind
                CSS, PostgreSQL, Prisma, Supabase, and OpenAI.
              </p> */}
      {/* <button className="gradient-color text-black font-bold py-2 px-4 rounded-full items-center border-2">
                <a href="https://github.com/JNikolo/Aspire" target="_blank">
                  View
                </a>
              </button>
            </div> */}
      {/* </div>
        </div>
      </div> */}
      {/* footer */}
      <Work />
      <Footer />
    </div>
  );
};

export default HomePage;
