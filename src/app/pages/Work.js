import React from "react";

export function Work() {
  const projects = [
    {
      title: "Aspire",
      image: "/aspire.png",
      description:
        "Social habit tracker that combines an AI life coach with a vibrant community to help users stay motivated on their personal growth journeys. With a visual, color-coded calendar for tracking daily progress and habit streaks, Aspire offers personalized support through daily motivational messages and tailored habit suggestions. Built using Express.js, Tailwind CSS, PostgreSQL, Prisma, Supabase, and OpenAI.",
      link: "https://github.com/JNikolo/Aspire",
    },
    {
      title: "Insta-Next",
      image: "/insta.png",
      description:
        "Instagram clone built with Next.js and Tailwind CSS. It features a fully functional interface, allowing users to add likes, comments, and posts. Firebase is used to store data such as comments, likes, and images.",
      link: "https://github.com/Esmeraldagmm/insta-next",
    },
    {
      title: "DES Encryption",
      image: "/des.png",
      description:
        "This project demonstrates how to encrypt and decrypt messages using DES, a symmetric-key block cipher. It also includes a Bash script to test the implementation and compare it with OpenSSL outputs.",
      link: "https://github.com/Esmeraldagmm/des-encryption",
    },
  ];

  return (
    <div className="bg-black text-white py-10">
      <h1 id="work" className="text-4xl font-bold text-center mb-10">
        {" "}
        Projects{" "}
      </h1>
      <div className="space-y-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row items-center bg-gray-800 p-6 rounded-lg shadow-lg space-y-6 lg:space-y-0 lg:space-x-6"
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-lg border-4 border-blue-400 object-cover w-80 h-48"
            />
            <div className="lg:w-1/2 text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              <p className="mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                className="inline-block gradient-color text-black font-bold py-2 px-4 rounded-full border-2 hover:bg-blue-500 hover:text-white transition-colors"
              >
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
