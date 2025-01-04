import react from "react";

export function Work() {
  return (
    <div>
      <h1 id="work" className="bg-black text-4xl font-bold text-center">
        Projects
      </h1>
      {/* <div className="flex justify-center">
        <div className="carousel rounded-box w-1/2">
          <div className="carousel-item w-full">
            <img src="/aspire.png" className="w-full" alt="Project One" />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-xl">
              <div className="text-center text-white">
                <h3 className="text-2xl font-bold">Aspire</h3>
                <p className="mt-2 pl-2 pr-2 pb-5">
                  Social habit tracker that combines an AI life coach with a
                  vibrant community to help users stay motivated on their
                  personal growth journeys. With a visual, color-coded calendar
                  for tracking daily progress and habit streaks, Aspire offers
                  personalized support through daily motivational messages and
                  tailored habit suggestions. Built using Express.js, Tailwind
                  CSS, PostgreSQL, Prisma, Supabase, and OpenAI.
                </p>
                <button className="gradient-color text-black font-bold py-2 px-4 rounded-full items-center border-2">
                  <a href="https://github.com/JNikolo/Aspire" target="_blank">
                    View
                  </a>
                </button>
              </div>
            </div>
          </div>{" "}
          <div className="carousel-item w-full">
            <img src="/insta.png" className="w-full" alt="Project 2" />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-xl">
              <div className="text-center text-white">
                <h3 className="text-2xl font-bold">Insta-Next</h3>
                <p className="mt-2 pl-2 pr-2 pb-5">
                  Instagram clone built with Next.js and Tailwind CSS. It
                  features a fully functional interface, allowing users to add
                  likes, comments, and posts. Firebase is used to store data
                  such as comments, likes, and images.
                </p>
                <button className="gradient-color text-black font-bold py-2 px-4 rounded-full items-center border-2">
                  <a
                    href="https://github.com/Esmeraldagmm/insta-next"
                    target="_blank"
                  >
                    View
                  </a>
                </button>
              </div>
            </div>
          </div> */}
      {/* <div className="carousel-item w-full">
            <img src="/des.png" className="w-full" alt="Project 3" />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-xl">
              <div className="text-center text-white">
                <h3 className="text-2xl font-bold">Aspire</h3>
                <p className="mt-2 pl-2 pr-2 pb-5">
                  This project demonstrates how to encrypt and decrypt messages
                  using DES, a symmetric-key block cipher. It also includes a
                  Bash script to test the implementation and compare it with
                  OpenSSL outputs.
                </p>
                <button className="gradient-color text-black font-bold py-2 px-4 rounded-full items-center border-2">
                  <a
                    href="https://github.com/Esmeraldagmm/des-encryption"
                    target="_blank"
                  >
                    View
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="carousel carousel-center bg-black rounded-box flex justify-center space-x-4 p-10">
        <div className="carousel-item flex-shrink-0">
          <img
            src="/aspire.png"
            className="rounded-box border-4 border-blue-400 object-fill h-100 w-96"
            alt="Project One"
          />
        </div>
        <div className="divider lg:divider-horizontal md:divider-horizontal sm:divider divide-white"></div>
        <div className="carousel-item flex-shrink-0">
          <img
            src="/insta.png"
            className="rounded-box border-4 border-blue-400 object-fill h-100 w-96"
            alt="Project Two"
          />
        </div>
      </div>
    </div>
  );
}
